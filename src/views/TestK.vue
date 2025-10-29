<script setup>
import { ref, computed, onMounted } from 'vue'

const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, '')

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

const groups = computed(() => {
  const order = ['mandag','tirsdag','onsdag','torsdag','fredag','lørdag','søndag']
  const map = new Map()
  for (const ev of events.value) {
    const key = weekdayName(ev.date).toLowerCase()
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(ev)
  }
  for (const list of map.values()) {
    list.sort((a, b) => `${a.start ?? '00:00'}`.localeCompare(`${b.start ?? '00:00'}`))
  }
  return order
    .filter(k => map.has(k))
    .map(k => ({ day: k[0].toUpperCase() + k.slice(1), items: map.get(k) }))
})

function join(ev) {
  // TODO: Mathilde kobler sin fetch/patch her
  console.log('Tilmeld til event id:', ev.id)
  // fx: fetch(`${DB_URL}/events/${ev.id}/participants.json`, { method:'PATCH', ... })
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
              <span v-if="ev.capacity !== undefined"> • {{ ev.capacity }} pladser</span>
            </div>
            <p v-if="ev.description" class="card__desc">{{ ev.description }}</p>
          </div>

          <div class="card__right">
            <button class="card__btn" @click="join(ev)">Tilmeld</button>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.list { padding: 24px; display: grid; gap: 24px; }
.list__header { display: flex; align-items: baseline; gap: 12px; }
.list__day { display: grid; gap: 12px; }
.list__dayTitle { margin: 0; font-size: 28px; }
.list__items { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }

.card {
  display: flex; justify-content: space-between; gap: 16px;
  padding: 16px; border-radius: 16px;
  border: 1px solid #e6e6e6; background: #e0e9ff;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}
.card__title { font-weight: 800; font-size: 20px; margin-top: 6px; }
.card__time { font-weight: 600; opacity: 0.9; }
.card__meta { color: #334; margin-top: 4px; }
.card__desc { margin-top: 8px; }
.card__btn {
  align-self: center; padding: 10px 16px; border: none; border-radius: 12px;
  background: #f0652a; color: white; font-weight: 800; cursor: pointer;
}
.list__error { color: #b00020; }
</style>