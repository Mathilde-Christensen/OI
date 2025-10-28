<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['created'])
const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, '')

const form = reactive({
  title: '',
  date: '',
  start: '',
  end: '',
  location: '',
  coach: '',
  capacity: 0,
  description: ''
})

const submitting = ref(false)
const error = ref('')
const success = ref(false)

async function onSubmit() {
  error.value = ''
  success.value = false

  if (!form.title || !form.date || !form.start) {
    error.value = 'Titel, dato og starttid er påkrævet.'
    return
  }

  submitting.value = true
  try {
    const res = await fetch(`${DB_URL}/events.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        capacity: Number(form.capacity || 0),
        createdAt: Date.now()
      })
    })

    if (!res.ok) throw new Error('HTTP ' + res.status)

    const { name: id } = await res.json()
    const created = { id, ...form }

    emit('created', created)

    Object.assign(form, {
      title: '',
      date: '',
      start: '',
      end: '',
      location: '',
      coach: '',
      capacity: 0,
      description: ''
    })

    success.value = true
    setTimeout(() => (success.value = false), 1200)
  } catch (e) {
    error.value = 'Kunne ikke oprette hold.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form class="event-form" @submit.prevent="onSubmit">
    <h2>Opret hold</h2>

    <label>Titel *</label>
    <input v-model.trim="form.title" />

    <label>Dato *</label>
    <input type="date" v-model="form.date" />

    <label>Starttid *</label>
    <input type="time" v-model="form.start" />

    <label>Sluttid</label>
    <input type="time" v-model="form.end" />

    <label>Lokation</label>
    <input v-model.trim="form.location" />

    <label>Pris</label>
    <input type="number" min="0" v-model.number="form.price" />

    <button :disabled="submitting">{{ submitting ? 'Opretter…' : 'Opret hold' }}</button>

    <p v-if="error" style="color:red">{{ error }}</p>
    <p v-if="success" style="color:green">✔ Hold oprettet!</p>
  </form>
</template>

