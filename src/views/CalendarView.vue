<script setup>
import { onMounted, computed } from 'vue'
import { useEventsStore } from '../stores/useEventsStore'
import EventCardRow from '../components/EventCardRow.vue'

const store = useEventsStore()

onMounted(() => {
  if (!store.ready) store.init()
  // SLET denne linje når Mathildes login er klar:
  store.bindUser('dev') // midlertidigt så Tilmeld virker i udvikling
})

const groups = computed(() => {
  const map = {}
  for (const ev of store.enriched) {
    const d = new Date(ev.start)
    const key = d.toLocaleDateString('da-DK', { weekday:'long', day:'2-digit', month:'2-digit', year:'numeric' })
    ;(map[key] ||= []).push(ev)
  }
  for (const k in map) map[k].sort((a,b) => new Date(a.start) - new Date(b.start))
  return map
})

function booked(ev) { return !!store.myBookings[ev.id] }
async function join(ev)  { try { await store.tilmeld(ev.id) } catch (e) { alert(e.message) } }
async function leave(ev) { try { await store.frameld(ev.id) } catch (e) { alert(e.message) } }
</script>

<template>
  <section class="max-w-5xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Holdoversigt</h1>

    <div v-if="!store.ready">Henter hold…</div>

    <div v-else>
      <div v-for="(events, day) in groups" :key="day" class="mb-10 border rounded-lg overflow-hidden shadow-sm">
        <div class="bg-gray-100 px-4 py-2 font-semibold flex justify-between">
          <span class="capitalize">{{ day.split(' ')[0] }}</span>
          <span>{{ day.split(' ').slice(1).join(' ') }}</span>
        </div>
        <table class="w-full border-collapse">
          <thead class="bg-gray-50 text-left text-sm text-gray-600 uppercase">
            <tr>
              <th class="py-2 px-4">Tidspunkt</th>
              <th class="py-2 px-4">Hold</th>
              <th class="py-2 px-4">Sted</th>
              <th class="py-2 px-4">Instruktør</th>
              <th class="py-2 px-4 text-center">Status</th>
              <th class="py-2 px-4 text-right">Handling</th>
            </tr>
          </thead>
          <tbody>
            <EventCardRow
              v-for="ev in events"
              :key="ev.id"
              :ev="ev"
              :booked="booked(ev)"
              @join="join"
              @leave="leave"
            />
          </tbody>
        </table>
      </div>

      <p v-if="Object.keys(groups).length === 0" class="text-gray-500 text-center">
        Ingen planlagte hold.
      </p>
    </div>
  </section>
</template>