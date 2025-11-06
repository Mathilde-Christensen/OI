<script setup>
  import { useRouter } from 'vue-router'
  import Footer from './components/Footer.vue'

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

  function goToAktivitetsOversigt() {
  router.push('/aktivitetsoversigt')
  }
</script>

<template>
  <RouterView />
  <Footer></Footer>
</template>

<style lang="scss" scoped>

</style>