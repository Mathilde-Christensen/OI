<script setup>
defineProps({
  title: String,
  text: String,
  buttonText: String,
  image: String
})
</script>

<template>
  <section class="dark_blue_section">
    <img v-if="image" :src="image" alt="">
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <a v-if="buttonText" href="#" class="btn">{{ buttonText }}</a>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;
@use '../assets/_buttons.scss' as b;

.dark_blue_section {
  background-color: c.$color-primary;
  color: c.$color-secondary;
  display: flex;
  align-items: center;
  padding: 4rem;
  gap: 2rem;
}


.btn {
  @include b.button(b.$button-primary);
}
</style>
