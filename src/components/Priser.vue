<script setup>
import { ref, onMounted, watch, computed } from "vue";

const props = defineProps({
  placeId: { type: String, required: true },
});

const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL?.replace(/\/$/, "");

const loading = ref(false);
const data = ref(null);

const labels = [
  { key: "child", label: "Børn" },
  { key: "adult", label: "Voksen" },
  { key: "senior", label: "Pensionist" },
];

const cardsArr = computed(() => {
  const cards = data.value?.cards || {};
  // behold en “fast” rækkefølge
  const order = ["entry", "card12", "card30", "year"];
  return order
    .filter(k => cards[k])
    .map(k => ({ id: k, ...cards[k] }));
});

function kr(n) {
  if (n === null || n === undefined || n === "") return "—";
  return `${n},-`;
}

async function load() {
  loading.value = true;
  try {
    const res = await fetch(`${DB_URL}/prices/${props.placeId}.json`);
    data.value = (await res.json()) || null;
  } catch (e) {
    console.error(e);
    data.value = null;
  } finally {
    loading.value = false;
  }
}

watch(() => props.placeId, load, { immediate: true });
onMounted(load);
</script>

<template>
  <section class="prices">
    <header class="prices__header">
      <h2 class="prices__title">Priser</h2>
      <span v-if="loading" class="prices__loading">Henter…</span>
    </header>

    <div class="prices__grid" v-if="cardsArr.length">
      <article v-for="card in cardsArr" :key="card.id" class="priceCard">
        <div class="priceCard__head">
          <h3 class="priceCard__title">{{ card.title }}</h3>
        </div>

        <div class="priceCard__body">
          <div class="priceRows">
            <div v-for="l in labels" :key="l.key" class="priceRow">
              <span class="priceRow__label">{{ l.label }}</span>
              <span class="priceRow__value">{{ kr(card.rows?.[l.key]) }}</span>
            </div>
          </div>

          <div class="priceCard__note">
            {{ data?.note || "Med adgang til ..." }}
          </div>

          <div class="priceRows">
            <div v-for="l in labels" :key="l.key + 'note'" class="priceRow">
              <span class="priceRow__label">{{ l.label }}</span>
              <span class="priceRow__value">{{ kr(card.noteRows?.[l.key]) }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <p v-else class="prices__empty">Ingen priser endnu.</p>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/_colors.scss' as c;

.prices {
    margin: 30px;
}

.prices__header{ 
    display:flex; 
    justify-content:space-between; 
    align-items:baseline; 
    gap:10px; 
}

.prices__title{ 
    margin:0 0 12px;
}

.prices__grid{
  display:grid;
  gap: 16px;
}

@media (min-width: 1024px){
  .prices__grid{
    grid-template-columns: repeat(4, 1fr);
  }
}

.priceCard{
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,.12);
  background: c.$color-secondary;
  box-shadow: 0 10px 20px rgba(0,0,0,.08);
}

.priceCard__head{
  background: c.$color-primary;
  padding: 14px 16px;
}

.priceCard__title{
  margin:0;
  color: c.$color-secondary;
  font-size: 1.05rem;
}

.priceCard__body{ padding: 14px 16px; }

.priceRows{ display:grid; gap: 10px; padding: 8px 0; }

.priceRow{
  display:flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.12);
  padding-bottom: 6px;
}

.priceRow__label{ font-weight: 600; }
.priceRow__value{ font-weight: 700; color: c.$color-primary; }

.priceCard__note{
  margin: 12px -16px;
  padding: 10px 16px;
  background: c.$color-tertiary; /* din lyseblå */
  color: c.$color-primary;
  font-weight: 600;
}
</style>
