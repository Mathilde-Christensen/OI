<script setup>
const props = defineProps({
  ev: { type: Object, required: true },
  booked: { type: Boolean, default: false }
})
const emit = defineEmits(['join','leave'])

function formatTime(iso) {
  const d = new Date(iso)
  return d.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' })
}
</script>

<template>
  <tr class="border-b hover:bg-gray-50 transition">
    <td class="py-3 px-4 font-medium text-gray-700">
      {{ formatTime(ev.start) }} - {{ formatTime(ev.end) }}
    </td>
    <td class="py-3 px-4 font-semibold text-gray-800">
      {{ ev.title }}
    </td>
    <td class="py-3 px-4 text-gray-600">{{ ev.location }}</td>
    <td class="py-3 px-4 text-gray-600">{{ ev.instructor || '—' }}</td>
    <td class="py-3 px-4 text-center">
      <span
        v-if="ev.full"
        class="text-orange-600 font-semibold"
      >Venteliste ({{ ev.booked }})</span>
      <span
        v-else
        class="text-green-600 font-semibold"
      >{{ ev.free }} ledige</span>
    </td>
    <td class="py-3 px-4 text-right">
      <button
        v-if="!booked"
        class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold disabled:opacity-50"
        :disabled="ev.full"
        @click="$emit('join', ev)"
      >
        Tilmeld
      </button>
      <button
        v-else
        class="px-4 py-2 border rounded-md font-semibold text-gray-700 hover:bg-gray-100"
        @click="$emit('leave', ev)"
      >
        Frameld
      </button>
    </td>
  </tr>
</template>