<script setup>
import { ref } from "vue";
import Calendar from '@/components/Calendar.vue';
import InfoBarAdmin from '@/components/InfoBarAdmin.vue';

const activeTab = ref("events");
</script>

<template>
   <div class="admin">
        <div class="admin__header">
                <h1 class="admin__title">Admin</h1>

        <nav class="tabs" aria-label="Admin sektioner">
            <button
            type="button"
            class="tab"
            :class="{ 'tab--active': activeTab === 'events' }"
            @click="activeTab = 'events'"
            >
            Events
            </button>

            <button
            type="button"
            class="tab"
            :class="{ 'tab--active': activeTab === 'info' }"
            @click="activeTab = 'info'"
            >
            Info
            </button>

            <button
            type="button"
            class="tab"
            :class="{ 'tab--active': activeTab === 'prices' }"
            @click="activeTab = 'prices'"
            >
            Priser
            </button>
        </nav>
        </div>

        <section v-show="activeTab === 'events'" class="grid">
        <article class="card">
            <Calendar />
        </article>
        </section>

        <!-- INFO -->
        <section v-show="activeTab === 'info'" class="card">
        <h2 class="card__title">Info-beskeder</h2>
        <InfoBarAdmin />
        </section>

        <!-- PRISER -->
        <section v-show="activeTab === 'prices'" class="card">
        <h2 class="card__title">Priser</h2>
        <!-- Sæt din pris-komponent ind her når du har den -->
        <p class="muted">Pris-komponent kommer her.</p>
        <!-- <PricesAdmin /> -->
        </section>
    </div>
</template>

<style lang="scss">
    @use '../assets/_colors.scss' as c;
    @use '../assets/_fonts.scss' as f;

    .admin{
    margin: 0 auto;
    padding: 30px;
    }

    .admin__header{
    display: grid;
    gap: 10px;
    margin-bottom: 16px;
    }

    .tabs{
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(c.$color-primary, 0.5);
    padding-bottom: 8px;
    }

    .tab{
    background: none;
    border: none;
    padding: 6px 0;
    cursor: pointer;
    font-weight: 600;
    opacity: 0.7;
    }

    .tab--active{
    opacity: 1;
    position: relative;
    }

    .tab--active::after{
    content:"";
    position:absolute;
    left:0;
    right:0;
    bottom:-9px;
    height:3px;
    background:#1d2346;
    border-radius:999px;
    }

    .card{
    background:#fff;
    border:1px solid rgba(0,0,0,0.12);
    border-radius:14px;
    padding:16px;
    }

    .card__title{
    margin:0 0 12px;
    }

    .muted{
    opacity: 0.7;
    margin: 0;
    }
</style>