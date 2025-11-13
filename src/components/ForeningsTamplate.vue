<script setup>
defineProps({
  title: String,
  text: String,
  buttonText: String,
  buttonLink: String,
  image: String
})
</script>

<template>
  <section class="forenings_tamplate">
    <img class="section_img" v-if="image" :src="image" alt="">
    <div class="content">
      <h2 class="content_h2" v-html="title"></h2>
      <p class="content_p" v-html="text"></p>
    </div>
    
    <div class="content_btn">
    <a
        v-if="buttonText && buttonLink && buttonLink.startsWith('http')"
        :href="buttonLink"
        target="_blank"
        class="link_btn"
        rel="noopener"
    >
        {{ buttonText }}
    </a>
    </div>
  </section>
</template>

<style lang="scss">
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;
@use '../assets/_buttons.scss' as b;

.content_btn {
  @include b.button(b.$button-primary);
  margin-top: 20px;
}

.link_btn:hover {
    color: c.$color-secondary;
}

.link_btn {
    color: c.$color-secondary;
}


</style>