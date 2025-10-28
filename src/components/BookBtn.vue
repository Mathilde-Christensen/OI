<script setup>
    import { ref, onMounted } from 'vue'
    import { getBookingStatus, toggleBookingStatus } from '@/services/booking'

    const status = ref(0)

    onMounted(async () => {
    status.value = await getBookingStatus()
    })

    async function toggle() {
    status.value = await toggleBookingStatus(status.value)
    }
</script>

<template>
    <button @click="toggle">{{ status === 1 ? 'AFMELD' : 'TILMELD' }}</button>
</template>