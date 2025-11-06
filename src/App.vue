<script setup>
  import { useRouter } from 'vue-router'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'

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
  <Header></Header>
  <Footer></Footer>
</template>

<style lang="scss" scoped>

</style>