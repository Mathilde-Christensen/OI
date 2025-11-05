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
  <div class="test">Hejsa lalalalalalaa</div>
</template>

<style lang="scss" scoped>
@use './assets/_colors.scss' as c;
@use './assets/_fonts.scss' as f;

.test {
  color: c.$color-primary;
}
</style>
