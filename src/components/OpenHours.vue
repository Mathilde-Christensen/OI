<script setup>
    const props = defineProps({
    hours: {
        type: Array,
        default: () => []
    }
    })
</script>

<template>
    <div class="opening-hours">
        <div 
            v-for="item in hours" 
            :key="item.day" 
            class="opening-hours__row"
        >
            <span class="opening-hours__day">{{ item.day }}</span>
            <span class="opening-hours__time">{{ item.time }}</span>
        </div>
  </div>
</template>

<style lang="scss" scoped>
    @use '../assets/_colors.scss' as c;

    .opening-hours {
    width: 100%;
    margin-top: 1.5rem;
    font-size: 0.95rem;
    }

    .opening-hours__row {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid c.$color-secondary;
    padding-block: 0.3rem;
    }

    .opening-hours__day {
    font-variation-settings: "wght" 800;
    }

    .opening-hours__time {
    font-variation-settings: "wght" 400;
    }
</style>