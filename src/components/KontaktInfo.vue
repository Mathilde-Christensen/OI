<script setup>
const props = defineProps({
  icon: {          // icon file path (imported image)
    type: String,
    required: true,
  },
  text: {          // text next to the icon
    type: String,
    required: true,
  },
  href: String     // optional: makes text clickable
})
</script>

<template>
  <div class="contactItem">
    <img :src="icon" alt="" class="contactItem__icon" />

    <div class="contactItem__content">
      <a v-if="href" :href="href" class="contactItem__text">
        {{ text }}
      </a>
      <p v-else class="contactItem__text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;

.contactItem {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  margin-left: 5px;
}

.contactItem__icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.contactItem__text {
  font-family: f.$font-primary;
  color: c.$color-primary;
  text-decoration: none;
  font-size: 0.75rem;
}

.contactItem__text:hover {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .contactItem {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    margin-left: 30px;
  }

  .contactItem__icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .contactItem__text {
    font-family: f.$font-primary;
    color: c.$color-primary;
    text-decoration: none;
  }

  .contactItem__text:hover {
    text-decoration: underline;
  }
}
</style>