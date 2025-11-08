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

<style lang="scss" scoped>
  @use '../assets/_buttons.scss' as btn;
  @use '../assets/_fonts.scss' as f;

  button {
    @include btn.button(btn.$button-primary);
    font-family: f.$font-primary;
    font-size: 16px;
    font-weight: 900; 
    border: 0;
    cursor: pointer;
  }

  button.active {
    background: #1E234D;
  }

  button:disabled {
    opacity: 0.6;
    cursor: default;
    transform: none;
  }
</style>