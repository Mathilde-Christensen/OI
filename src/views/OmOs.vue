<script setup>
import SectionDarkBlue from '@/components/SectionDarkBlue.vue';
import SectionLightBlue from '@/components/SectionLightBlue.vue';
import HeroTamplate from '@/components/HeroTamplate.vue';

import friendsImg     from '@/assets/images/about/friends.webp';
import communityImg  from '@/assets/images/about/community.webp';
import accessImg     from '@/assets/images/about/accessibility.webp';
import bikeImg    from '@/assets/images/about/cykel.webp';
import handsImg   from '@/assets/images/about/hands.webp';
import havneImg     from '@/assets/images/about/havnebad.webp';
import iceImg  from '@/assets/images/about/iceskating.webp';
import klosterImg     from '@/assets/images/about/klosterbakke.webp';
import legeImg    from '@/assets/images/about/legevenner.webp';
import morehandsImg   from '@/assets/images/about/morehands.webp';
import nikoImg     from '@/assets/images/about/nikoline.webp';
import runningImg  from '@/assets/images/about/running.webp';
import badetImg     from '@/assets/images/about/havnebadet.webp';
import sportImg    from '@/assets/images/about/sport.webp';
import stadiumImg   from '@/assets/images/about/stadium.webp';
import swimImg    from '@/assets/images/about/swim.webp';
import yogaImg   from '@/assets/images/about/yoga.webp';
</script>

<template>
  <HeroTamplate
    :image="friendsImg"
    title="Bevægelse, fællesskab og oplevelser for alle"
    text="Odense Idrætspark skaber rammerne for idræt, bevægelse og fællesskab i hele byen. Her mødes borgere, foreninger og klubber for at dyrke motion, oplevelser og glæden ved at være aktiv – uanset alder og niveau."
  />

  <SectionLightBlue
    :image="communityImg"
    title="Mere end bare sport"
    text="Odense Idrætspark er en del af Odense Kommune og arbejder for at skabe <span>aktive fællesskaber</span> i hele byen. Vi samarbejder med lokale foreninger og haller for at give alle adgang til <span>sunde og sjove aktiviteter.</span>"
    buttonText="Udforsk"
    buttonLink="/aktiviteter"
  />

  <section class="about-section about-section--dark">
    <div class="about-container">
      <h2>Vores faciliteter</h2>
      <p>
        Odense Idrætspark driver og vedligeholder en række moderne idrætsfaciliteter i hele Odense.
        Her finder du svømmehaller, haller, baner, stadioner og grønne områder til både hverdag og events.
      </p>
      <p>
        Faciliteterne bruges hver dag af foreninger, skoler, institutioner og borgere, som ønsker at
        dyrke motion, fællesskab og bevægelse i trygge og professionelle rammer.
      </p>

      <div class="about-cards">
        <article class="about-card">
          <img :src="swimImg" alt="Svømmehal" />
          <span>Svømmehaller</span>
        </article>
        <article class="about-card">
          <img :src="stadiumImg" alt="Stadion og arenaer" />
          <span>Stadion og arenaer</span>
        </article>
        <article class="about-card">
          <img :src="sportImg" alt="Idrætshaller" />
          <span>Idrætshaller</span>
        </article>
        <article class="about-card">
          <img :src="badetImg" alt="Friluftsfaciliteter" />
          <span>Friluftsfaciliteter</span>
        </article>
        <article class="about-card">
          <img :src="iceImg" alt="Skøjtehal" />
          <span>Skøjtehal</span>
        </article>
      </div>
    </div>
  </section>

  <SectionLightBlue
    :image="communityImg"
    title="Fællesskab og frivillighed"
    text="Hos Odense Idrætspark er fællesskab meget mere end motion. Det er glæden ved at være sammen, hjælpe hinanden og skabe oplevelser, der binder mennesker sammen. Frivillige er en vigtig del af hverdagen og er med til at skabe liv i hallerne og styrke sammenholdet."
    buttonText="Udforsk"
    buttonLink="/frivillighed"
  />

  <section class="about-section">
    <div class="about-container">
      <h2>Værdier og vision</h2>
      <p>
        Odense Idrætsparks værdier danner grundlag for alt, hvad vi gør. Vi arbejder for aktive
        fællesskaber, der er åbne for alle – med fokus på bevægelse, ansvarlighed og tilgængelige
        idrætsfaciliteter i hele Odense.
      </p>

      <div class="about-cards">
        <article class="about-card">
          <img :src="morehandsImg" alt="Fællesskab" />
          <span>Fællesskab</span>
        </article>
        <article class="about-card">
          <img :src="runningImg" alt="Bevægelse" />
          <span>Bevægelse</span>
        </article>
        <article class="about-card">
          <img :src="accessImg" alt="Tilgængelighed" />
          <span>Tilgængelighed</span>
        </article>
        <article class="about-card">
          <img :src="yogaImg" alt="Ansvarlighed" />
          <span>Ansvarlighed</span>
        </article>
      </div>
    </div>
  </section>

  <SectionDarkBlue
    :image="handsImg"
    title="Har du spørgsmål?"
    text="Har du spørgsmål til booking, åbningstider eller vores faciliteter, er du altid velkommen til at kontakte os. Vi hjælper dig gerne videre til den rette person eller afdeling, så du hurtigt får svar."
    buttonText="Kontakt"
    buttonLink="/kontakt"
  />

  <section class="about-section">
    <div class="about-container">
      <h2>Følg med – der sker altid noget i Odense Idrætspark</h2>
      <p>
        Få glimt fra hverdagen i Odense Idrætspark. Se billeder og opslag fra aktiviteter, events
        og fællesskaber på tværs af byens faciliteter – og få et indblik i, hvordan bevægelse og
        fællesskab leves ud i praksis.
      </p>

      <div class="about-feed">
        <article class="about-feed-card">
          <img :src="outdoorImg" alt="Udendørs aktivitet" />
        </article>
        <article class="about-feed-card">
          <img :src="moveImg" alt="Deltager ved aktivitet" />
        </article>
        <article class="about-feed-card">
          <img :src="styrkeImg" alt="Svømmehal" />
        </article>
        <article class="about-feed-card about-feed-card--placeholder">
          <div class="about-feed-placeholder"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;
@use '../assets/_buttons.scss' as btn;

.about {
  &-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.25rem;
    font-family: f.$font-primary;
    color: c.$color-primary;
  }

  &-section {
    background-color: c.$color-secondary;

    &--dark {
      background-color: c.$color-primary;
      color: c.$color-secondary;
    }

    h2 {
      font-family: f.$font-secondary;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    p {
      max-width: 46rem;
      margin-bottom: 1rem;
      line-height: 1.6;
      font-family: f.$font-primary;
      font-size: 0.95rem;
    }
  }

  &-cards {
    display: grid;
    grid-template-columns: 1fr; 
    gap: 1.5rem;
    margin-top: 2rem;
  }

  &-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background-color: c.$color-secondary;

    img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }

    span {
      position: absolute;
      left: 0.75rem;
      bottom: 0.75rem;
      padding: 0.3rem 0.8rem;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.65);
      color: c.$color-secondary;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-family: f.$font-secondary;
    }

    &:hover {
      img {
        transform: scale(1.04);
      }
    }
  }

  &-feed {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;

    &-card {
      border-radius: 10px;
      overflow: hidden;
      background-color: c.$color-tertiary;
      min-height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &--placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: c.$color-secondary;
      }
    }

    &-placeholder {
      width: 60%;
      height: 70%;
      border-radius: 0.75rem;
      border: 2px dashed c.$color-primary;
    }
  }
}

@media (min-width: 600px) {
  .about-container {
    padding: 3rem 1.5rem;
  }

  .about-section h2 {
    font-size: 1.8rem;
  }

  .about-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-feed {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .about-container {
    padding: 4rem 1.5rem;
  }

  .about-section h2 {
    font-size: 2rem;
  }

  .about-cards {
    grid-template-columns: repeat(5, 1fr);
  }

  .about-feed {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>