<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function goToCalendar() {
    router.push('/calendar')
  }

  function goToEvents() {
    router.push('/events')
  }

  function goToHome() {
    router.push('/')
  }
</script>

<template>

    <nav>
      <button v-on:click="goToHome">Hjem</button>
      <button v-on:click="goToCalendar">Opret aktivitet</button>
      <button v-on:click="goToEvents">Aktivitetsoversigt</button>
    </nav>

  <RouterView />
</template>

<style scoped>
  button {
    border-radius: 10px;
    background: #1E234D;
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
</style>
