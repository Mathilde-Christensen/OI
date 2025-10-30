<script setup>
import { ref, computed, onMounted } from 'vue'
import BookBtn from '../components/BookBtn.vue'
import { eventStartMs, dateKey, weekdayDa, formatDateDa } from '../utils/date'

const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, '')
console.log('[DB_URL]', DB_URL)
if (!DB_URL) {
  console.error('Mangler VITE_FIREBASE_DATABASE_URL i .env (projektets rodmappe)')
}

const events = ref([])
const loading = ref(false)
const error = ref('')

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
      .sort((a, b) => {
        const aKey = `${a.date} ${a.start ?? '00:00'}`
        const bKey = `${b.date} ${b.start ?? '00:00'}`
        return aKey.localeCompare(bKey)
      })
  } catch (e) {
    console.error(e)
    error.value = 'Kunne ikke hente hold.'
  } finally {
    loading.value = false
  }
}

function weekdayName(isoDate) {
  if (!isoDate) return 'Uden dato'
  const d = new Date(isoDate)
  if (String(isoDate).includes('-') && isoDate.split('-')[0].length === 2) {
    const [dd, mm, yyyy] = isoDate.split('-')
    return new Intl.DateTimeFormat('da-DK', { weekday: 'long' }).format(new Date(`${yyyy}-${mm}-${dd}`))
  }
  return new Intl.DateTimeFormat('da-DK', { weekday: 'long' }).format(d)
}

function formatDate(iso) {
  if (!iso) return ''
  const [yyyy, mm, dd] = iso.split('-')
  return `${dd}-${mm}-${yyyy}`
}

const groups = computed(() => {
  const sorted = [...events.value].sort((a, b) => eventStartMs(a) - eventStartMs(b))

  const map = new Map()
  for (const ev of sorted) {
    const key = dateKey(ev)
    if (!map.has(key)) {
      const title =
        ev?.date
          ? `${weekdayDa(ev.date)[0].toUpperCase()}${weekdayDa(ev.date).slice(1)} ${formatDateDa(ev.date)}`
          : 'Uden dato'
      map.set(key, { day: title, items: [] })
    }
    map.get(key).items.push(ev)
  }

  return [...map.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([, group]) => group)
})

function join(ev) {
  console.log('Tilmeld til event id:', ev.id)
}
</script>

<template>
  <main class="list">
    <header class="list__header">
      <h1>Holdoversigt</h1>
      <span v-if="loading">Henter…</span>
    </header>

    <p v-if="error" class="list__error">{{ error }}</p>
    <p v-else-if="!loading && !events.length">Ingen hold endnu.</p>

    <section v-for="group in groups" :key="group.day" class="list__day">
      <h2 class="list__dayTitle">{{ group.day }}</h2>

      <ul class="list__items">
        <li v-for="ev in group.items" :key="ev.id" class="card">
          <div class="card__left">
            <div class="card__time">
              Kl. {{ ev.start || '—' }} – {{ ev.end || '—' }}
            </div>
            <div class="card__title">{{ ev.title ?? 'Uden titel' }}</div>
            <div class="card__meta">
                <span v-if="ev.location">{{ ev.location }}</span>
                <span v-if="ev.coach"> • {{ ev.coach }}</span>
            </div>
            <p v-if="ev.description" class="card__desc">{{ ev.description }}</p>
          </div>

          <div class="card__right">
            <BookBtn :id="ev.id" />
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.list { 
    padding: 24px; 
    display: grid; 
    gap: 24px; 
}

.list__header { 
    display: flex; 
    align-items: baseline; 
    gap: 12px; 
}

.list__day { 
    display: grid; 
    gap: 12px; 
}

.list__dayTitle { 
    margin: 0; 
    font-size: 28px; 
}

.list__items { 
    list-style: none; 
    margin: 0; 
    padding: 0; 
    display: grid; 
    gap: 14px; 
}

.card {
  display: flex; 
  justify-content: space-between; 
  gap: 16px;
  padding: 16px; 
  border-radius: 16px;
  border: 1px solid #e6e6e6; 
  background: #e0e9ff;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.card__title { 
    font-weight: 800; 
    font-size: 20px; 
    margin-top: 6px; 
}

.card__time { 
    font-weight: 600; 
    opacity: 0.9; 
}
.card__meta { 
    color: #334; 
    margin-top: 4px; 
}

.card__desc { 
    margin-top: 8px; 
}

.card__btn {
  align-self: center; 
  padding: 10px 16px; 
  border: none; 
  border-radius: 12px;
  background: #f0652a; 
  color: white; 
  font-weight: 800; 
  cursor: pointer;
}

.list__error { 
    color: #b00020; 
}

</style>