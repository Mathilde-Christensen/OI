<script setup>
import { ref, computed, onMounted } from 'vue'
import EventForm from '@/components/EventForm.vue'
import { getEvents, deleteEventById } from '@/services/events'

const events = ref([])
const loading = ref(false)
const error = ref('')

onMounted(load)

async function load() {
  loading.value = true
  error.value = ''
  try {
    events.value = await getEvents()
  } catch (e) {
    error.value = 'Kunne ikke hente hold.'
  } finally {
    loading.value = false
  }
}

const sortedEvents = computed(() => {
  return [...events.value].sort((a, b) => {
    const aKey = `${a.date} ${a.start ?? '00:00'}`
    const bKey = `${b.date} ${b.start ?? '00:00'}`
    return aKey.localeCompare(bKey)
  })
})

function onCreated(newEvent) {
  // optimistisk opdatering – indsæt i local state
  events.value.push(newEvent)
}

async function onDelete(id) {
  if (!confirm('Slet hold?')) return
  await deleteEventById(id)
  events.value = events.value.filter(e => e.id !== id)
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
          <li v-for="ev in sortedEvents" :key="ev.id" class="calendar__item">
            <div class="calendar__itemMain">
              <strong class="calendar__name">{{ ev.title }}</strong>
              <div class="calendar__meta">
                <span>{{ ev.date }} • {{ ev.start }}–{{ ev.end || '—' }}</span>
                <span v-if="ev.location"> • {{ ev.location }}</span>
                <span v-if="ev.coach"> • {{ ev.coach }}</span>
                <span v-if="ev.capacity !== undefined"> • Pladser: {{ ev.capacity }}</span>
              </div>
              <p v-if="ev.description" class="calendar__desc">{{ ev.description }}</p>
            </div>
            <div class="calendar__actions">
              <!-- her kan I senere sætte redigér / booking knapper -->
              <button @click="onDelete(ev.id)">Slet</button>
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
.calendar__list { display: grid; gap: 12px; }
.calendar__header { display: flex; gap: 12px; align-items: baseline; }
.calendar__title { margin: 0; }
.calendar__items { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.calendar__item {
  display: flex; justify-content: space-between; gap: 16px;
  padding: 12px; border: 1px solid #eee; border-radius: 12px;
}
.calendar__meta { color: #555; margin-top: 4px; }
.calendar__desc { margin: 8px 0 0; }
.calendar__actions { display: flex; gap: 8px; }
.calendar__error { color: #b00020; }
</style>