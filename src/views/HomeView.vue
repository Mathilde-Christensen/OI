<script setup>
import AboutFollow from '@/components/AboutFollow.vue';
import SectionLightBlue from '@/components/SectionLightBlue.vue';
import HeroSlide from '@/components/HeroSlideshow.vue'
import Kalender from '@/components/MiniCalendar.vue'
import OpeningHours from '@/components/OpeningHours.vue'
import Aktiviteter from '@/components/FindActivity.vue'

import GroupPhoto from '@/assets/images/activities/grouphug.webp';
</script>

<template>
  <main>
  <HeroSlide />
  <Kalender />
  <SectionLightBlue
  :image="GroupPhoto"
    title="Odense Idrætspark - samlingspunkt for <span>bevægelse og fællesskab</span>"
    text="Odense Idrætspark samler byens mange faciliteter, foreninger og aktiviteter under ét tag. Her finder du alt fra svømmehaller og sportshaller til udendørsbaner og events for alle aldre.
    Uanset om du dyrker sport, bevægelse eller bare vil være en del af fællesskabet – så er du velkommen."
    buttonText="Udforsk"
    buttonLink="/omos"
  />
  <Aktiviteter />
  <OpeningHours />

   <!-- FØLG MED -->
   <AboutFollow />

  </main> 
</template>
