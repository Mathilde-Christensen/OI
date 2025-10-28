<script setup>
 import BookBtm from '../components/BookBtm.vue'

    const onClick = () => {
    console.log('BookBtm klikket!')
    }
</script>

<template>
      <div style="padding:2rem">
    <h1>TestM</h1>
    <BookBtm @click="onClick" />
  </div>
</template>