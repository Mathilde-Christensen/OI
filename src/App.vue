<script setup>
  import { useRouter } from 'vue-router'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import InfoBar from './components/InfoBar.vue'

  const router = useRouter()
</script>

<template>
  <Header></Header>
  <InfoBar />
  <RouterView />
  <Footer></Footer>
</template>

<style lang="scss" scoped>

</style>