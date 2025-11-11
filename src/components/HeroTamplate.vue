<script setup>
defineProps({
  title: String,
  text: String,
  buttonText: String,
  image: String
})
</script>

<template>
  <section class="hero_tamplate">
    <img class="hero__img" v-if="image" :src="image" alt="">
    <div class="hero__content">
      <h1 class="hero__title">{{ title }}</h1>
      <p class="hero__text">{{ text }}</p>
      <div class="hero__actions">
        <a v-if="buttonText" href="#" class="btn">{{ buttonText }}</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;
@use '../assets/_buttons.scss' as b;

.hero_tamplate {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Alt er nu navngivet hero__* og scoped */
.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: c.$color-secondary;
  padding: 0 3rem;
}

.hero__title {
  font-size: clamp(1.6rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.hero__text {
  line-height: 2rem;
}

.btn {
  @include b.button(b.$button-primary);
  margin: 2rem;
}

@media (min-width: 1024px) {
   .hero__content {
    max-width: 800px;
    margin-inline: auto;
   } 
}
</style>
