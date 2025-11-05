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
  <RouterView />
</template>

<style lang="scss" scoped>

</style>
