<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  placeId: { type: String, required: true },
  title: { type: String, default: "Priser" },
});

const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, "");

const loading = ref(false);
const saving = ref(false);
const error = ref("");
const success = ref(false);

function defaultData() {
  return {
    note: "Med adgang til Relax balkon",
    cards: {
      entry:   { title: "Entre billet", rows: { child: 0, adult: 0, senior: 0 }, noteRows: { child: 0, adult: 0, senior: 0 } },
      card12:  { title: "12 turs rabatkort", rows: { child: 0, adult: 0, senior: 0 }, noteRows: { child: 0, adult: 0, senior: 0 } },
      card30:  { title: "30 turs rabatkort", rows: { child: 0, adult: 0, senior: 0 }, noteRows: { child: 0, adult: 0, senior: 0 } },
      year:    { title: "Årskort", rows: { child: 0, adult: 0, senior: 0 }, noteRows: { child: 0, adult: 0, senior: 0 } },
    }
  };
}

const form = ref(defaultData());

const cardOrder = ["entry", "card12", "card30", "year"];
const labels = [
  { key: "child", label: "Børn" },
  { key: "adult", label: "Voksen" },
  { key: "senior", label: "Pensionist" },
];

async function load() {
  loading.value = true;
  error.value = "";
  try {
    const res = await fetch(`${DB_URL}/prices/${props.placeId}.json`);
    const data = (await res.json()) || null;
    form.value = data ? data : defaultData();
  } catch (e) {
    console.error(e);
    error.value = "Kunne ikke hente priser.";
    form.value = defaultData();
  } finally {
    loading.value = false;
  }
}

async function save() {
  saving.value = true;
  error.value = "";
  success.value = false;

  try {
    // lav tal om til Number (så du ikke gemmer "22" som string)
    for (const k of cardOrder) {
      const c = form.value.cards[k];
      for (const l of labels) {
        c.rows[l.key] = Number(c.rows[l.key] ?? 0);
        c.noteRows[l.key] = Number(c.noteRows[l.key] ?? 0);
      }
    }

    const res = await fetch(`${DB_URL}/prices/${props.placeId}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);

    success.value = true;
    setTimeout(() => (success.value = false), 1200);
  } catch (e) {
    console.error(e);
    error.value = "Kunne ikke gemme priser.";
  } finally {
    saving.value = false;
  }
}

watch(() => props.placeId, load, { immediate: true });
onMounted(load);
</script>

<template>
  <section class="priceAdmin">
    <header class="priceAdmin__head">
      <h3>{{ title }}</h3>
      <span v-if="loading">Henter…</span>
    </header>

    <div class="priceAdmin__note">
      <label>Tekst i den lyseblå boks</label>
      <input v-model="form.note" placeholder="Med adgang til ..." />
    </div>

    <div class="priceAdmin__grid">
      <article v-for="cardKey in cardOrder" :key="cardKey" class="priceAdmin__card">
        <div class="priceAdmin__cardHead">
          <input v-model="form.cards[cardKey].title" />
        </div>

        <div class="priceAdmin__section">
          <h4>Standard</h4>
          <div v-for="l in labels" :key="l.key" class="priceAdmin__row">
            <span>{{ l.label }}</span>
            <input type="number" min="0" v-model="form.cards[cardKey].rows[l.key]" />
          </div>
        </div>

        <div class="priceAdmin__section">
          <h4>Med ekstra adgang</h4>
          <div v-for="l in labels" :key="l.key + 'n'" class="priceAdmin__row">
            <span>{{ l.label }}</span>
            <input type="number" min="0" v-model="form.cards[cardKey].noteRows[l.key]" />
          </div>
        </div>
      </article>
    </div>

    <div class="priceAdmin__actions">
      <button type="button" class="save" @click="save" :disabled="saving">
        {{ saving ? "Gemmer…" : "Gem" }}
      </button>
    </div>

    <p v-if="error" class="err">{{ error }}</p>
    <p v-if="success" class="ok">✔ Gemt</p>
  </section>
</template>

<style scoped>
.priceAdmin{ display:grid; gap:12px; }
.priceAdmin__head{ display:flex; justify-content:space-between; align-items:baseline; }
.priceAdmin__note{ display:grid; gap:6px; }
.priceAdmin__note input{ padding:8px; border-radius:10px; border:1px solid rgba(0,0,0,.15); }

.priceAdmin__grid{ display:grid; gap:16px; }
@media (min-width: 1024px){ .priceAdmin__grid{ grid-template-columns: repeat(2, 1fr);} }

.priceAdmin__card{ border:1px solid rgba(0,0,0,.12); border-radius:14px; overflow:hidden; background:#fff; }
.priceAdmin__cardHead{ padding:10px; background:#1d2346; }
.priceAdmin__cardHead input{ width:100%; padding:8px; border-radius:10px; border:1px solid rgba(255,255,255,.2); color:#fff; background:transparent; }

.priceAdmin__section{ padding:12px; display:grid; gap:10px; }
.priceAdmin__row{ display:flex; justify-content:space-between; gap:10px; align-items:center; }
.priceAdmin__row input{ width:110px; padding:6px; border-radius:10px; border:1px solid rgba(0,0,0,.15); }

.priceAdmin__actions{ display:flex; justify-content:flex-end; }
.save{ padding:10px 14px; border-radius:10px; border:0; background:#1d2346; color:#fff; cursor:pointer; }
.err{ color:#b00020; margin:0; }
.ok{ color:#0a7a2f; margin:0; }
</style>
