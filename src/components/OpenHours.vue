<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { getISOWeekKey, shiftWeekKey, formatWeekLabel } from "@/utils/week";
import dropdownPil from '@/assets/images/ikoner/dropdown_pil.webp'

const props = defineProps({
  placeId: { type: String, required: true }, // "klosterbakken" / "havnebadet"
});

const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, "");

const weekKey = ref(getISOWeekKey());
const loading = ref(false);
const weekData = ref(null);

const dayOrder = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const dayLabels = {
  mon: "Mandag",
  tue: "Tirsdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lørdag",
  sun: "Søndag",
};

function formatTime(dayObj) {
  if (!dayObj || dayObj.closed) return "Lukket";
  const open = dayObj.open || "—";
  const close = dayObj.close || "—";
  return `${open} – ${close}`;
}

const hours = computed(() => {
  const data = weekData.value;
  if (!data) return dayOrder.map(k => ({ day: dayLabels[k], time: "—" }));
  return dayOrder.map(k => ({ day: dayLabels[k], time: formatTime(data[k]) }));
});

const weekLabel = computed(() => formatWeekLabel(weekKey.value));

async function loadWeek() {
  loading.value = true;
  try {
    const res = await fetch(`${DB_URL}/openingHours/${props.placeId}/${weekKey.value}.json`);
    const data = (await res.json()) || null;
    weekData.value = data;
  } catch (e) {
    console.error(e);
    weekData.value = null;
  } finally {
    loading.value = false;
  }
}

function prevWeek() {
  weekKey.value = shiftWeekKey(weekKey.value, -1);
}
function nextWeek() {
  weekKey.value = shiftWeekKey(weekKey.value, 1);
}
function resetWeek() {
  weekKey.value = getISOWeekKey();
}

watch([weekKey, () => props.placeId], loadWeek, { immediate: true });
onMounted(loadWeek);
</script>

<template>
  <div class="opening-hours">
    <div v-for="item in hours" :key="item.day" class="opening-hours__row">
      <span class="opening-hours__day">{{ item.day }}</span>
      <span class="opening-hours__time">{{ item.time }}</span>
    </div>

    <!-- Pile i bunden -->
    <div class="opening-hours__nav">
      <button type="button" class="opening-hours__arrow" @click="prevWeek" aria-label="Forrige uge"><img :src="dropdownPil" alt="dropdown pil" class="dropdown__arrow"></button>

      <div class="opening-hours__week">
        <span>{{ weekLabel }}</span>
        <span v-if="loading" class="opening-hours__loading">Henter…</span>
      </div>

      <button type="button" class="opening-hours__arrow" @click="nextWeek" aria-label="Næste uge">→</button>
    </div>

    <button type="button" class="opening-hours__reset" @click="resetWeek">
      Tilbage til denne uge
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;

.opening-hours {
  width: 100%;
}

.dropdown__arrow {
    width: 20px;          // justér
    height: auto;
    transition: transform 0.3s ease;
}

.opening-hours__row {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid c.$color-secondary;
  padding-block: 0.3rem;
}

/* navigation */
.opening-hours__nav{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 0.8rem;
}

.opening-hours__arrow{
  background: transparent;
  padding: 0.35rem 0.7rem;
  color: c.$color-secondary;
  border: none;
}

.opening-hours__week{
  display:flex;
  flex-direction: column;
  align-items:center;
  gap: 2px;
}

.opening-hours__loading{
  opacity: 0.7;
  font-size: 0.85rem;
}

.opening-hours__reset{
  margin-top: 0.6rem;
  width: 100%;
  border: 1px solid transparent;
  background: transparent;
  color: c.$color-secondary;
  cursor: pointer;
  text-decoration: underline;
}
</style>
