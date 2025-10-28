<script setup>
    import BookButton from '../components/BookBtn.vue'
</script>

<template>
    <div>
        <BookButton id="test_evt" />
    </div>

      <div style="padding: 2rem">
    <!-- Du giver selv et midlertidigt ID -->
    <BookButton id="test_evt" />
  </div>
</template>