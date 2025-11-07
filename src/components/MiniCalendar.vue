<script setup>
import { ref, computed, onMounted } from 'vue'
import BookBtn from '@/components/BookBtn.vue'
import { eventStartMs, dateKey, weekdayDa, formatDateDa } from '@/utils/date'

const props = defineProps({
  width:  { type: String, default: '60vw' },
  height: { type: String, default: '50vh' },
})

const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, '')

const events  = ref([])
const loading = ref(false)
const error   = ref('')

onMounted(load)
async function load() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch(`${DB_URL}/events.json`)
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const raw = await res.json() || {}
    events.value = Object.entries(raw)
      .map(([id, v]) => (v ? { id, ...v } : null))
      .filter(Boolean)
  } catch (e) {
    console.error(e)
    error.value = 'Kunne ikke hente hold.'
  } finally {
    loading.value = false
  }
}

/** Grupper som i Events.vue */
const groups = computed(() => {
  const sorted = [...events.value].sort((a, b) => eventStartMs(a) - eventStartMs(b))
  const map = new Map()
  for (const ev of sorted) {
    const key = dateKey(ev)
    if (!map.has(key)) {
      const wd = ev?.date ? weekdayDa(ev.date) : ''
      const title = ev?.date
        ? `${wd.charAt(0).toUpperCase()}${wd.slice(1)} ${formatDateDa(ev.date)}`
        : 'Uden dato'
      map.set(key, { day: title, items: [] })
    }
    map.get(key).items.push(ev)
  }
  return [...map.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([, g]) => g)
})

/** Vis kun de første N events – med “Se flere”-toggle */
const VISIBLE_COUNT = 10
const showAll = ref(false)
const totalCount = computed(() => groups.value.reduce((sum, g) => sum + g.items.length, 0))

const groupsForView = computed(() => {
  if (showAll.value) return groups.value
  let remaining = VISIBLE_COUNT
  const out = []
  for (const g of groups.value) {
    if (remaining <= 0) break
    const take = g.items.slice(0, remaining)
    if (take.length) out.push({ day: g.day, items: take })
    remaining -= take.length
  }
  return out
})
</script>

<template>
    <section
      class="calendarPreview"
      :style="{ '--preview-w': width, '--preview-h': height }"
      aria-labelledby="calendarPreviewTitle"
    >
      <!-- Højre infoboks (mobil: vises først via CSS order) -->
      <aside class="calendarPreview__right">
        <h3 id="calendarPreviewTitle" class="info__title">
          Find din næste <span>aktivitet</span> her
        </h3>
        <p class="info__text">
          I Odense Idrætspark er der altid noget i gang. Vores mange hold
          og arrangementer dækker alt fra børneaktiviteter til seniortræning
          – og alt midt imellem. Tilmeld dig direkte og oplev, hvor nemt det
          er at være aktiv i fællesskab.
        </p>
        <a class="info__btn" href="/calendar">FIND AKTIVITET</a>
      </aside>
  
      <!-- Venstre: oversigten -->
      <div class="calendarPreview__left">
        <div class="calendarPreview__scroll" role="region" aria-label="Aktivitetsliste">
          <template v-if="groupsForView.length">
            <section v-for="group in groupsForView" :key="group.day" class="previewDay">
              <h4 class="previewDay__title">{{ group.day }}</h4>
  
              <ul class="previewList">
                <li v-for="ev in group.items" :key="ev.id" class="previewCard">
                  <div class="previewCard__main">
                    <div class="previewCard__title">{{ ev.title ?? 'Uden titel' }}</div>
                    <div class="previewCard__meta">
                      <span>Kl. {{ ev.start || '—' }}–{{ ev.end || '—' }}</span>
                      <span v-if="ev.location"> • {{ ev.location }}</span>
                      <span v-if="ev.priceText || ev.price !== undefined">
                        • {{ ev.priceText ?? (ev.price + ' kr.') }}
                      </span>
                    </div>
                  </div>
  
                  <div class="previewCard__actions">
                    <BookBtn :id="ev.id" />
                  </div>
                </li>
              </ul>
            </section>
  
            <div
              v-if="!showAll && totalCount > VISIBLE_COUNT"
              class="previewMore"
            >
              <button type="button" class="previewMore__btn" @click="showAll = true">
                Indlæs flere aktiviteter
              </button>
            </div>
          </template>
  
          <p v-else-if="!loading && !error" class="calendarPreview__empty">Ingen hold endnu.</p>
        </div>
      </div>
    </section>
  </template>

<style lang="scss" scoped>
.calendarPreview {
  /* container */
  /*inline-size: min(1200px, 92vw);
  margin-inline: auto;*/
  border-radius: 14px;
  padding: 40px 40px 60px 40px;

  /* mobil: info over liste */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "info"
    "list";
  gap: 28px;

  &__right { grid-area: info; }  /* infoboks */
  &__left  { grid-area: list; padding-left: 10px; } /* oversigt */
  &__title { margin: 0; font-weight: 800; font-size: 1rem; }
  &__meta  { display: flex; align-items: center; gap: 12px; }
  &__error { color: #b00020; }

  /* ——— Scroll-boks (liste) ——— */
  &__scroll {
    block-size: var(--list-h, 38vh);
    overflow-y: scroll;           /* altid synlig scrollbar */
    overflow-x: hidden;
    direction: rtl;
    padding: 8px 10px 12px 20px;

    /* indhold læses normalt */
    .previewDay, .previewList, .calendarPreview__empty { direction: ltr; }

    scrollbar-gutter: stable both-edges; /* undgå hop */
    scrollbar-width: thin;
    scrollbar-color: #c2c7d1 transparent;
    &::-webkit-scrollbar { width: 10px; height: 10px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb {
      background: #c2c7d1; border-radius: 8px; border: 2px solid transparent; background-clip: content-box;
    }
    &::-webkit-scrollbar-thumb:hover { background: #aeb5c2; }
  }

  /* grupper + kort */
  .previewDay { display: grid; gap: 14px; margin: 0 0 16px; }
  .previewDay__title { margin: 0; font-size: 1.5rem; font-weight: 800; letter-spacing: .2px; color: #101738; }

  .previewList { list-style: none; margin: 0; padding: 0; display: grid; gap: 16px; }

  .previewCard {
    display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 18px;
    padding: 16px 18px; background: #fefffe; border: 1px solid #e2e6ef;
    border-radius: 14px; box-shadow: 0 14px 30px rgba(0,0,0,.12);

    &__main { min-width: 0; }
    &__title { font-weight: 800; font-size: 1.08rem; margin: 0 0 6px; color: #101738; }
    &__meta { color: #3a3a3a; font-size: .98rem; }
    &__actions { display: flex; align-items: center; justify-content: flex-end;
      :deep(button) { min-width: 130px; height: 44px; }
    }
  }

  .previewMore { display: flex; justify-content: center; margin-top: 8px;
    &__btn {
      border: 0; cursor: pointer; padding: 10px 16px; border-radius: 12px;
      background: #e9efff; color: #1f3bb3; font-weight: 800;
      box-shadow: 0 6px 16px rgba(31,59,179,.18);
      &:hover { filter: brightness(.97); }
    }
  }

  /* infoboks (venstre på større skærme) */
  &__right {
    align-self: start; justify-self: stretch; inline-size: 100%;
    border-radius: 16px;
    padding: 100px 22px;

    .info__title { margin: 0 0 12px; font-weight: 900; font-size: 1.6rem; line-height: 1.25; color: #101738; }
    .info__text  { margin: 0 0 18px; color: #2d2f3a; line-height: 1.55; }
    .info__btn   {
      display: inline-block; padding: 12px 18px; border-radius: 12px;
      background: #f37341; color: #fff; font-weight: 800; text-decoration: none;
      box-shadow: 0 10px 20px rgba(243,115,65,.25);
      &:hover { filter: brightness(.95); }
    }
  }

  /* ——— Tablet: info venstre, liste højre; gør listen bredere ——— */
  @media (min-width: 768px) {
    grid-template-columns: .9fr 1.6fr;       /* liste bredere end info */
    grid-template-areas: "info list";        /* info venstre, liste højre */
    gap: 40px;

    &__left  { padding-left: 0; }
    &__scroll { block-size: var(--list-h, 44vh); }
    .previewDay__title { font-size: 1.6rem; }
    .previewCard__meta { font-size: 1rem; }
  }

  /* ——— Desktop: endnu bredere liste, sticky info ——— */
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 2fr;          /* ~33% / 67% */
    gap: 56px;
    &__scroll { block-size: var(--list-h, 52vh); }
    &__right  { position: sticky; top: 18px; }
  }
}
</style>