<template>
  <button @click="onToggle" :disabled="loading">
    {{ status === 1 ? 'AFMELD' : 'TILMELD' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 🔧 DIN RTDB base (uden trailing slash)
const BASE = 'https://frontend-projekt-98306-default-rtdb.europe-west1.firebasedatabase.app/'

// ⬇️ Gør komponentet genbrugeligt: hver instans kræver et unikt id
const props = defineProps({
  id: { type: String, required: true } // fx "evt_123"
})

const status = ref(0)       // 0 = TILMELD, 1 = AFMELD
const loading = ref(false)
const error = ref('')

// Byg sti for dette event
// Hvis I bruger auth-regler, tilføj fx: const AUTH = `?auth=${token}`
const PATH = `${BASE}/booking/${encodeURIComponent(props.id)}.json`

// Hent initial status
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

// Toggle med if/else + PUT
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
