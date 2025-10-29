<script setup>
import { ref, onMounted } from 'vue'

const BASE = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, '')

const props = defineProps({
  id: { type: String, required: true } 
})

const status = ref(0)        
const loading = ref(false)
const error = ref('')

const PATH = `${BASE}/booking/${encodeURIComponent(props.id)}.json`

onMounted(load)
async function load() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch(PATH)
    if (!res.ok) throw new Error(`GET ${res.status} ${res.statusText}`)
    const data = await res.json()
    status.value = (data === 0 || data === 1) ? data : 0
  } catch (e) {
    console.error('[BookButton][GET] failed:', e)
    error.value = 'Kunne ikke hente status.'
  } finally {
    loading.value = false
  }
}

async function onToggle() {
  loading.value = true
  error.value = ''
  try {
    const next = (status.value === 1) ? 0 : 1
    const res = await fetch(PATH, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next),
    })
    if (!res.ok) throw new Error(`PUT ${res.status} ${res.statusText}`)
    status.value = next
  } catch (e) {
    console.error('[BookButton][PUT] failed:', e)
    error.value = 'Kunne ikke gemme status.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <button
    v-on:click="onToggle"
    v-bind:disabled="loading"
    v-bind:class="{ active: status === 1 }"
  >
    {{ status === 1 ? 'AFMELD' : 'TILMELD' }}
  </button>
</template>

<style scoped>
button {
  border-radius: 10px;
  background: #FE622A;
  width: 125px;
  height: 43px;
  border: 0px;
  color: #FEFEFE;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
}

/* Når status === 1 */
button.active {
  background: #1E234D;
}

button:disabled {
  opacity: 0.6;
}
</style>
