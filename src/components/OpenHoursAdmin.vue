<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { getISOWeekKey, shiftWeekKey, formatWeekLabel } from "@/utils/week";

const props = defineProps({
  placeId: { type: String, required: true }, // "klosterbakken" / "havnebadet"
  title: { type: String, default: "Åbningstider" }
});

const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, "");

const weekKey = ref(getISOWeekKey());
const weekLabel = computed(() => formatWeekLabel(weekKey.value));

const loading = ref(false);
const saving = ref(false);
const error = ref("");
const success = ref(false);

const days = [
  { key: "mon", label: "Mandag" },
  { key: "tue", label: "Tirsdag" },
  { key: "wed", label: "Onsdag" },
  { key: "thu", label: "Torsdag" },
  { key: "fri", label: "Fredag" },
  { key: "sat", label: "Lørdag" },
  { key: "sun", label: "Søndag" },
];

function defaultWeek() {
  return {
    mon: { closed: false, open: "08:00", close: "16:00" },
    tue: { closed: false, open: "08:00", close: "16:00" },
    wed: { closed: false, open: "08:00", close: "16:00" },
    thu: { closed: false, open: "08:00", close: "16:00" },
    fri: { closed: false, open: "08:00", close: "14:00" },
    sat: { closed: true, open: "", close: "" },
    sun: { closed: true, open: "", close: "" },
    note: ""
  };
}

const weekData = ref(defaultWeek());

async function loadWeek() {
  loading.value = true;
  error.value = "";
  success.value = false;

  try {
    const res = await fetch(`${DB_URL}/openingHours/${props.placeId}/${weekKey.value}.json`);
    const data = (await res.json()) || null;
    weekData.value = data ? data : defaultWeek();
  } catch (e) {
    console.error(e);
    error.value = "Kunne ikke hente åbningstider.";
    weekData.value = defaultWeek();
  } finally {
    loading.value = false;
  }
}

async function saveWeek() {
  saving.value = true;
  error.value = "";
  success.value = false;

  try {
    const res = await fetch(`${DB_URL}/openingHours/${props.placeId}/${weekKey.value}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(weekData.value),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);

    success.value = true;
    setTimeout(() => (success.value = false), 1200);
  } catch (e) {
    console.error(e);
    error.value = "Kunne ikke gemme åbningstider.";
  } finally {
    saving.value = false;
  }
}

function prevWeek() { weekKey.value = shiftWeekKey(weekKey.value, -1); }
function nextWeek() { weekKey.value = shiftWeekKey(weekKey.value, 1); }
function resetWeek() { weekKey.value = getISOWeekKey(); }

watch([weekKey, () => props.placeId], loadWeek, { immediate: true });
onMounted(loadWeek);
</script>

<template>
  <section class="adminHours">
    <header class="adminHours__top">
      <h3>{{ title }}</h3>

      <div class="adminHours__nav">
        <button type="button" @click="prevWeek">←</button>

        <div class="adminHours__week">
          <strong>{{ weekLabel }}</strong>
          <span v-if="loading">Henter…</span>
        </div>

        <button type="button" @click="nextWeek">→</button>
      </div>
    </header>

    <div class="adminHours__list">
      <div v-for="d in days" :key="d.key" class="adminHours__row">
        <div class="adminHours__day">{{ d.label }}</div>

        <label class="adminHours__closed">
          <input type="checkbox" v-model="weekData[d.key].closed" />
          Lukket
        </label>

        <input type="time" v-model="weekData[d.key].open" :disabled="weekData[d.key].closed" />
        <span class="dash">–</span>
        <input type="time" v-model="weekData[d.key].close" :disabled="weekData[d.key].closed" />
      </div>

      <div class="adminHours__note">
        <label>Note (valgfri)</label>
        <input v-model="weekData.note" placeholder="Fx lukket fredag pga. event" />
      </div>

      <div class="adminHours__actions">
        <button type="button" class="ghost" @click="resetWeek">Denne uge</button>
        <button type="button" class="save" @click="saveWeek" :disabled="saving">
          {{ saving ? "Gemmer…" : "Gem" }}
        </button>
      </div>

      <p v-if="error" class="err">{{ error }}</p>
      <p v-if="success" class="ok">✔ Gemt</p>
    </div>
  </section>
</template>

<style scoped>
.adminHours { border:1px solid rgba(0,0,0,.12); border-radius:14px; padding:16px; background:#fff; }
.adminHours__top { display:flex; flex-direction:column; gap:10px; }
.adminHours__nav { display:flex; align-items:center; gap:12px; justify-content:space-between; }
.adminHours__week { display:flex; flex-direction:column; align-items:center; gap:2px; }

.adminHours__list { display:grid; gap:10px; margin-top:12px; }

.adminHours__row {
  display:grid;
  grid-template-columns: 1fr auto 110px 10px 110px;
  gap:10px;
  align-items:center;
}

.adminHours__day { font-weight:600; }
.adminHours__closed { display:flex; gap:8px; align-items:center; }
.dash { text-align:center; opacity:.6; }

.adminHours__note { display:grid; gap:6px; margin-top:10px; }
.adminHours__note input { padding:8px; border-radius:10px; border:1px solid rgba(0,0,0,.15); }

.adminHours__actions { display:flex; justify-content:space-between; gap:10px; margin-top:10px; }
.save, .ghost { padding:10px 14px; border-radius:10px; border:1px solid rgba(0,0,0,.15); cursor:pointer; }
.ghost { background: transparent; }
.save { background: #1d2346; color:#fff; border-color: transparent; }

.err { color:#b00020; margin:0; }
.ok { color:#0a7a2f; margin:0; }

@media (max-width: 700px){
  .adminHours__row { grid-template-columns: 1fr 1fr; }
  .dash { display:none; }
  input[type="time"] { width: 100%; }
}
</style>
