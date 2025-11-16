<script setup>
import SectionDarkBlue from '@/components/SectionDarkBlue.vue';
import SectionLightBlue from '@/components/SectionLightBlue.vue';
import HeroTamplate from '@/components/HeroTamplate.vue';

import friendsImg     from '@/assets/images/about/friends.webp';
import communityImg   from '@/assets/images/about/community.webp';
import accessImg      from '@/assets/images/about/accessibility.webp';
import bikeImg        from '@/assets/images/about/cykel.webp';
import handsImg       from '@/assets/images/about/hands.webp';
import havneImg       from '@/assets/images/about/havnebad.webp';
import iceImg         from '@/assets/images/about/iceskating.webp';
import klosterImg     from '@/assets/images/about/klosterbakke.webp';
import morehandsImg   from '@/assets/images/about/morehands.webp';
import nikoImg        from '@/assets/images/about/nikoline.webp';
import runningImg     from '@/assets/images/about/running.webp';
import badetImg       from '@/assets/images/about/havnebadet.webp';
import sportImg       from '@/assets/images/about/sport.webp';
import stadiumImg     from '@/assets/images/about/stadium.webp';
import swimImg        from '@/assets/images/about/swim.webp';
import yogaImg        from '@/assets/images/about/yoga.webp';
import instaLogo      from '@/assets/images/about/oiinsta.webp';
</script>

<template>
    <!-- HERO -->
    <HeroTamplate
        :image="friendsImg"
        title="Bevægelse, fællesskab og oplevelser for alle"
        text="Odense Idrætspark skaber rammerne for idræt, bevægelse og fællesskab i hele byen. Her mødes borgere, foreninger og klubber for at dyrke motion, oplevelser og glæden ved at være aktiv – uanset alder og niveau."
        :gradient="true"
    />
    

  <!-- VORES FACILITETER -->
  <section class="about-section about-section--white">
    <div class="about-container">
      <h2>Vores faciliteter</h2>

      <div class="about-text-split">
        <p>
          Odense Idrætspark driver og vedligeholder en række moderne idrætsfaciliteter i hele Odense.
          Her finder du svømmehaller, haller, baner, stadioner og grønne områder til både hverdag og events.
        </p>
        <p>
          Faciliteterne bruges hver dag af foreninger, skoler, institutioner og borgere, som ønsker at
          dyrke motion, fællesskab og bevægelse i trygge og professionelle rammer.
        </p>
      </div>

      <div class="about-cards about-cards--facilities">
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

  <!-- MERE END BARE SPORT -->
  <SectionLightBlue
    :image="bikeImg"
    title="Mere end bare sport"
    text="Odense Idrætspark er en del af Odense Kommune og arbejder for at skabe <span>aktive fællesskaber</span> i hele byen. Vi samarbejder med lokale foreninger og haller for at give alle adgang til <span>sunde og sjove aktiviteter.</span>"
    buttonText="Udforsk"
    buttonLink="/aktiviteter"
  />

  <!-- FÆLLESSKAB OG FRIVILLIGHED -->
  <SectionDarkBlue
    :image="communityImg"
    title="Fællesskab og frivillighed"
    text="Hos Odense Idrætspark er fællesskab meget mere end motion. Det er glæden ved at være sammen, hjælpe hinanden og skabe oplevelser, der binder mennesker sammen. Frivillige er en vigtig del af hverdagen og er med til at skabe liv i hallerne og styrke sammenholdet."
    buttonText="Udforsk"
    buttonLink="/frivillighed"
  />

  <!-- VÆRDIER OG VISION -->
  <section class="about-section about-section--values">
    <div class="about-container">
      <div class="about-values-text">
        <h2>Værdier og vision</h2>
        <p>
          Odense Idrætsparks værdier danner grundlag for alt, hvad vi gør. Vi arbejder for aktive
          fællesskaber, der er åbne for alle – med fokus på bevægelse, ansvarlighed og tilgængelige
          idrætsfaciliteter i hele Odense.
        </p>
      </div>

      <div class="about-cards about-cards--values">
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

  <!-- FØLG MED -->
  <section class="about-section about-section--white">
    <div class="about-container">
      <h2>Følg med – der sker altid noget i Odense Idrætspark</h2>
      <p>
        Få glimt fra hverdagen i Odense Idrætspark. Se billeder og opslag fra aktiviteter, events
        og fællesskaber på tværs af byens faciliteter – og få et indblik i, hvordan bevægelse og
        fællesskab leves ud i praksis.
      </p>

      <!-- INSTAGRAM-PROFIL BLOK -->
      <div class="about-follow">
            <img :src="instaLogo" alt="Odense Idrætspark på Instagram" class="about-follow__avatar" />
            <div class="about-follow__info">
                <p class="about-follow__handle">odenseidraetspark</p>
                <button class="about-follow__btn">Følg</button>
            </div>
        </div>

      <!-- FEED-BILLEDER -->
      <div class="about-feed">
        <article class="about-feed-card">
          <img :src="havneImg" alt="Udendørs aktivitet" />
        </article>
        <article class="about-feed-card">
          <img :src="nikoImg" alt="Deltager ved aktivitet" />
        </article>
        <article class="about-feed-card">
          <img :src="klosterImg" alt="Svømmehal" />
        </article>
        <article class="about-feed-card">
          <img :src="klosterImg" alt="Svømmehal" />
        </article>
      </div>
    </div>
  </section>

  <!-- HAR DU SPØRGSMÅL? -->
  <SectionDarkBlue
    :image="handsImg"
    title="Har du spørgsmål?"
    text="Har du spørgsmål til booking, åbningstider eller vores faciliteter, er du altid velkommen til at kontakte os. Vi hjælper dig gerne videre til den rette person eller afdeling, så du hurtigt får svar."
    buttonText="Kontakt"
    buttonLink="/kontakt"
  />
</template>

<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;
@use '../assets/_buttons.scss' as btn;

.about {
  &-container {
    margin: 0 auto;
    padding-block: 2rem;
    padding-inline: 4rem;
    font-family: f.$font-primary;
    color: c.$color-primary;
  }

  &-section {
    background-color: c.$color-secondary;
    color: c.$color-primary;

    &--white {
      background-color: c.$color-secondary;
      color: c.$color-primary;

      h2,
      p {
        color: c.$color-primary;
      }
    }

    &--values {
      background-color: c.$color-secondary; 
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

  .about-text-split {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;

    p {
      margin: 0;
    }
  }


  &-cards {
    display: grid;
    grid-template-columns: 1fr; 
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .about-section--values .about-container {
   background-color: c.$color-tertiary;
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
            z-index: 0;
            position: relative;
        }


        &::after {
        content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.65)
            );
            z-index: 1;
            pointer-events: none;
        }


        span {
            position: absolute;
            inset: 0;              
            display: flex;
            justify-content: center; 
            align-items: center;    
            z-index: 2;
            text-align: center;
            background: transparent;  
            color: c.$color-secondary;
            font-size: 1rem;
            font-family: f.$font-secondary;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;

            pointer-events: none; 
        }

        &:hover img {
            transform: scale(1.04);
        }
    }


  &-follow {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;

        &__avatar {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            object-fit: cover;
            display: block;
        }

        &__info {
            display: flex;
            flex-direction: column;
            align-items: flex-start; 
            gap: 0.6rem;
        }

        &__handle {
            font-family: f.$font-secondary;
            font-size: 2rem;
            font-weight: 600;
            margin: 0;
            color: c.$color-primary;
        }

        &__btn {
            @include btn.button(btn.$button-primary); 
            cursor: pointer;
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
        }
    }
}


@media (min-width: 600px) {
  .about-container {
    padding-block: 3rem;
  }

  .about-section h2 {
    font-size: 1.8rem;
  }

  .about-cards--facilities {
    grid-template-columns: repeat(3, 1fr);
  }

  .about-feed {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
    .about-container {
        padding-block: 4rem;
    }

    .about-section h2 {
        font-size: 2rem;
    }

    .about-cards--facilities {
        grid-template-columns: repeat(5, 1fr);
    }

    .about-feed {
        grid-template-columns: repeat(4, 1fr);
    }

    .about-text-split {
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
    }

    .about-section--values .about-container {
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.4fr);
        gap: 3rem;
        align-items: center;
        background-color: c.$color-tertiary;;
    }

    .about-values-text {
        max-width: 32rem;
    }

    .about-section--values .about-cards--values {
        margin-top: 0;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;                     
        max-width: 650px;            
    }

    .about-section--values .about-card img {
        height: 220px;              
    }

    .about-section--values .about-card {
        border-radius: 14px;           
    }
}
</style>