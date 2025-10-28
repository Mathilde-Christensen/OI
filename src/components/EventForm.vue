<script setup>
import { reactive, ref } from 'vue'
import { useEventsStore } from '@/stores/useEventsStore'

const store = useEventsStore()

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

  // En simpel validering
  if (!form.title || !form.date || !form.start) {
    error.value = 'Titel, dato og starttid er påkrævet.'
    return
  }

  submitting.value = true
  try {
    await store.addEvent(form)
    // Her nulstilles formularen efter oprettelse
    Object.assign(form, {
      title: '', date: '', start: '', end: '',
      location: '', coach: '', capacity: 0, description: ''
    })
    success.value = true
    setTimeout(() => (success.value = false), 2000)
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
  
      <div class="event-form__row">
        <label class="event-form__label" for="title">Titel</label>
        <input id="title" v-model.trim="form.title" class="event-form__input" required />
      </div>
  
      <div class="event-form__row">
        <label class="event-form__label" for="date">Dato</label>
        <input id="date" type="date" v-model="form.date" class="event-form__input" required />
      </div>
  
      <div class="event-form__row">
        <label class="event-form__label" for="start">Start</label>
        <input id="start" type="time" v-model="form.start" class="event-form__input" required />
      </div>
  
      <div class="event-form__row">
        <label class="event-form__label" for="end">Slut</label>
        <input id="end" type="time" v-model="form.end" class="event-form__input" />
      </div>
  
      <div class="event-form__row">
        <label class="event-form__label" for="location">Lokation</label>
        <input id="location" v-model.trim="form.location" class="event-form__input" />
      </div>
  
      <div class="event-form__row">
        <label class="event-form__label" for="coach">Instruktør</label>
        <input id="coach" v-model.trim="form.coach" class="event-form__input" />
      </div>
  
      <div class="event-form__row">
        <label class="event-form__label" for="capacity">Pladser</label>
        <input id="capacity" type="number" min="0" v-model.number="form.capacity" class="event-form__input" />
      </div>
  
      <div class="event-form__row">
        <label class="event-form__label" for="desc">Beskrivelse</label>
        <textarea id="desc" v-model.trim="form.description" class="event-form__textarea" rows="3" />
      </div>
  
      <div class="event-form__actions">
        <button class="event-form__btn" :disabled="submitting">
          {{ submitting ? 'Opretter...' : 'Opret hold' }}
        </button>
        <p v-if="error" class="event-form__error">{{ error }}</p>
        <p v-if="success" class="event-form__success">Hold oprettet ✔</p>
      </div>
    </form>
</template>

<style scoped>
.event-form { display: grid; gap: 12px; max-width: 560px; }
.event-form__row { display: grid; gap: 6px; }
.event-form__label { font-weight: 600; }
.event-form__input, .event-form__textarea {
  padding: 8px 10px; border: 1px solid #ddd; border-radius: 8px;
}
.event-form__actions { display: flex; align-items: center; gap: 12px; }
.event-form__btn {
  padding: 10px 14px; border-radius: 10px; border: none; cursor: pointer;
}
.event-form__error { color: #b00020; }
.event-form__success { color: #0a7a27; }
</style>
