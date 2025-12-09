<script setup>
    import { ref, onMounted, onBeforeUnmount } from "vue";
    import { db } from "@/firebase";
    import { ref as dbRef, onValue } from "firebase/database";
    import Advarsel from "@/assets/images/ikoner/advarsel.webp";
    import dropdownPil from '@/assets/images/ikoner/dropdown_pil.webp'

    const messages = ref([]);
    const open = ref(false);
    const wrap = ref(null);

    let unsub = null;

    function toggle() {
    open.value = !open.value;
    }

    function handleClickOutside(e) {
    if (!open.value) return;
    if (wrap.value && !wrap.value.contains(e.target)) open.value = false;
    }

    onMounted(() => {
    const r = dbRef(db, "infoMessages");

    const maybeUnsub = onValue(r, (snap) => {
        const val = snap.val();
        const arr = val ? Object.entries(val).map(([id, data]) => ({ id, ...data })) : [];

        // Nyeste først (så klientens seneste “åbningstid” vises øverst)
        arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

        messages.value = arr;

        // hvis listen bliver tom, luk dropdown
        if (!arr.length) open.value = false;
    });

    unsub = typeof maybeUnsub === "function" ? maybeUnsub : null;

    document.addEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
    if (unsub) unsub();
    document.removeEventListener("click", handleClickOutside);
    });
</script>

<template>
  <section v-if="messages.length" class="info" ref="wrap">
    <button class="info__btn" @click="toggle" :aria-expanded="open">
      <span class="info__icon"><img :src="Advarsel" alt="Advarsels trekant" class="info__icon-img"></span>
      <span class="info__label">Ændrede åbningstider</span>
      <span class="info__count">({{ messages.length }})</span>
      <img
        :src="dropdownPil"
        alt=""
        class="info__chev dropdown__arrow"
        :class="{ rotated: open }"
      />
    </button>

    <div v-show="open" class="info__panel">
      <ul class="info__list">
        <li v-for="m in messages" :key="m.id" class="info__item">
          {{ m.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;

    .info__btn {
    width: 100%;
    display: flex;
    align-items: center;
    background: c.$color-secondary;
    color: c.$color-primary;
    border: 0;
    border-top: 0.5px solid rgba(c.$color-primary, 0.2);
    padding: 4px 30px;
    }

    

    .info__icon-img { 
        width: 80%;
    }

    .info__icon { 
        display: flex;
        align-items: center;
    }

    .info__label { 
        font-weight: 600; 
    }

    .info__count { 
        opacity: 0.8;
        margin: 2px;
    }

    .info__chev { 
        margin-left: auto; opacity: 0.8; 
    }

    /* Dropdown panel */
    .info__panel {
    border: transparent;
    background: c.$color-secondary;
    }

    .info__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 8px;
    }

    .info__item {
        background: c.$color-secondary;
        color: c.$color-primary;
        margin: 5px 30px;
        
    }

</style>