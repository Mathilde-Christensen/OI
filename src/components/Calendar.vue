<script setup>
import { ref, computed, onMounted } from 'vue'
import EventForm from '../components/EventForm.vue'

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

    const raw = await res.json()

    let list = []
    if (Array.isArray(raw)) {
      list = raw.map((v, i) => (v ? { id: String(i), ...v } : null)).filter(Boolean)
    } else if (raw && typeof raw === 'object') {
      list = Object.entries(raw).map(([id, v]) => (v ? { id, ...v } : null)).filter(Boolean)
    }

    events.value = list
  } catch (e) {
    console.error(e)
    error.value = 'Kunne ikke hente hold.'
  } finally {
    loading.value = false
  }
}

const sortedEvents = computed(() =>
  events.value
    .filter(Boolean)
    .sort((a, b) => {
      const aKey = `${a.date} ${a.start ?? '00:00'}`
      const bKey = `${b.date} ${b.start ?? '00:00'}`
      return aKey.localeCompare(bKey)
    })
)

function onCreated(newEvent) {
  if (!newEvent || !newEvent.id) return
  events.value.push(newEvent)
}

async function onDelete(id) {
  if (!confirm('Slet hold?')) return

  const res = await fetch(`${DB_URL}/events/${id}.json`, { method: 'DELETE' })
  if (res.ok) {
    events.value = events.value.filter(e => e?.id !== id)
  }
}
</script>

<template>
  <main class="calendar">
    <EventForm @created="onCreated" />

    <hr class="calendar__divider" />

    <section class="calendar__list">
      <header class="calendar__header">
        <h2 class="calendar__title">Holdoversigt</h2>
        <span v-if="loading">Henter…</span>
      </header>

      <p v-if="error" class="calendar__error">{{ error }}</p>

      <ul v-if="sortedEvents.length" class="calendar__items">
        <li
          v-for="event in sortedEvents"
          :key="event.id"
          class="calendar__item">
          <div class="calendar__itemMain">
            <strong class="calendar__name">{{ event.title ?? 'Uden titel' }}</strong>
            <div class="calendar__meta">
              <span>{{ event.date }} • {{ event.start || '—' }}–{{ event.end || '—' }}</span>
              <span v-if="event.location"> • {{ event.location }}</span>
              <span v-if="event.coach"> • {{ event.coach }}</span>
              <span v-if="event.capacity !== undefined"> • Pladser: {{ event.capacity }}</span>
            </div>
            <p v-if="event.description" class="calendar__desc">{{ event.description }}</p>
          </div>

          <div class="calendar__actions">
            <button @click="onDelete(event.id)">Slet</button>
          </div>
        </li>
      </ul>

      <p v-else>Ingen hold endnu.</p>
    </section>
  </main>
</template>

<style scoped>
.calendar { display: grid; gap: 24px; padding: 24px; }
.calendar__divider { border: none; border-top: 1px solid #eee; }
.calendar__header { display: flex; gap: 12px; align-items: baseline; }
.calendar__items { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.calendar__item {
  display: flex; justify-content: space-between; gap: 16px;
  padding: 12px; border: 1px solid #eee; border-radius: 12px;
}
.calendar__error { color: #b00020; }
</style>