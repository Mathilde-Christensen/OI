<script setup>
import SectionDarkBlue from '@/components/SectionDarkBlue.vue';
import SectionLightBlue from '@/components/SectionLightBlue.vue';
</script>

<template>
<SectionLightBlue
  :image="GroupPhoto"
    title="Odense Idrætspark - samlingspunkt for bevægelse og fællesskab"
    text="Odense Idrætspark samler byens mange faciliteter, foreninger og aktiviteter under ét tag. Her finder du alt fra svømmehaller og sportshaller til udendørsbaner og events for alle aldre.
    Uanset om du dyrker sport, bevægelse eller bare vil være en del af fællesskabet – så er du velkommen."
    buttonText="Udforsk"
/>

<SectionDarkBlue
    :image="HulaHop"
    title="Følg med i hverdagen hos Odense Idrætspark"
    text="Hold dig opdateret om arrangementer, nye aktiviteter og hverdagen i Odense Idrætspark.
     Følg os på Facebook og Instagram for de seneste nyheder og stemningsbilleder fra vores mange faciliteter."
    buttonText="Følg os"
/>
</template>