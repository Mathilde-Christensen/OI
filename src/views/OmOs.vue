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

const instaUrl = 'https://www.instagram.com/odenseidraetspark/';
</script>

<template>
    <!-- HERO -->
    <div class="about-hero">
        <HeroTamplate
            :image="friendsImg"
            title="Bevægelse, fællesskab og oplevelser for alle"
            text="Odense Idrætspark skaber rammerne for idræt, bevægelse og fællesskab i hele byen. Her mødes borgere, foreninger og klubber for at dyrke motion, oplevelser og glæden ved at være aktiv – uanset alder og niveau."
            :gradient="true"
        />
    </div>
    

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
            Odense Idrætsparks vision er at skabe rammer, hvor alle kan finde glæde ved bevægelse og fællesskab. Vi vil være et sted, 
            hvor både nye og erfarne udøvere føler sig hjemme, og hvor aktiviteterne giver energi, motivation og lyst til at være aktiv i hverdagen.
            Vi arbejder for at gøre vores faciliteter indbydende, trygge og tilgængelige for alle – uanset alder,
            niveau og baggrund. Vores værdier bygger på respekt, ansvarlighed og lysten til at bringe mennesker sammen gennem positive oplevelser og stærke fællesskaber.
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
                <img
                :src="instaLogo"
                alt="Odense Idrætspark på Instagram"
                class="about-follow__avatar"
                />

                <div class="about-follow__info">
                <p class="about-follow__handle">
                    <a
                    :href="instaUrl"
                    target="_blank"
                    rel="noopener"
                    class="about-follow__handle-link"
                    >
                    odenseidraetspark
                    </a>
                </p>

                <a
                    :href="instaUrl"
                    target="_blank"
                    rel="noopener"
                    class="about-follow__btn"
                >
                    Følg
                </a>
                </div>
            </div>

            <!-- FEED-BILLEDER -->
            <div class="about-feed">
                <article class="about-feed-card">
                <a
                    :href="instaUrl"
                    target="_blank"
                    rel="noopener"
                    class="about-feed-card__link"
                >
                    <img :src="havneImg" alt="Udendørs aktivitet" />
                    <div class="about-feed-card__overlay">
                    <span>Udforsk opslag</span>
                    </div>
                </a>
                </article>

                <article class="about-feed-card">
                <a
                    :href="instaUrl"
                    target="_blank"
                    rel="noopener"
                    class="about-feed-card__link"
                >
                    <img :src="nikoImg" alt="Deltager ved aktivitet" />
                    <div class="about-feed-card__overlay">
                    <span>Udforsk opslag</span>
                    </div>
                </a>
                </article>

                <article class="about-feed-card">
                <a
                    :href="instaUrl"
                    target="_blank"
                    rel="noopener"
                    class="about-feed-card__link"
                >
                    <img :src="klosterImg" alt="Svømmehal" />
                    <div class="about-feed-card__overlay">
                    <span>Udforsk opslag</span>
                    </div>
                </a>
                </article>

                <article class="about-feed-card">
                <a
                    :href="instaUrl"
                    target="_blank"
                    rel="noopener"
                    class="about-feed-card__link"
                >
                    <img :src="klosterImg" alt="Svømmehal" />
                    <div class="about-feed-card__overlay">
                    <span>Udforsk opslag</span>
                    </div>
                </a>
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
                font-variation-settings: "wght" 400;
                margin: 20px 0;                  
            }

            p {
                max-width: 46rem;
                margin-bottom: 1rem;
                line-height: 1.5rem;
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
            gap: 1rem;
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;

            &__avatar {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                object-fit: cover;
            }

            &__info {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 0.6rem;
            }

            &__handle {
                margin: 0;
            }

            &__handle-link {
                font-family: f.$font-secondary;
                font-size: 18px;    
                font-weight: 600;
                color: c.$color-primary;
                text-decoration: none;
                padding-right: 12px;  
                display: inline-block;  
            }

            &__handle-link:hover {
                text-decoration: underline;
            }

            &__btn {
                @include btn.button(btn.$button-primary);
                cursor: pointer;
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
        }

        &-feed {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 2rem;

            &-card {
                position: relative;
                border-radius: 10px;
                overflow: hidden;
                background-color: c.$color-tertiary;
                min-height: 200px;
            }

            &-card__link {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }

            &-card img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
                display: block;
            }

            &-card__overlay {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding-inline: 1rem;
                background: linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.45),
                    rgba(0, 0, 0, 0.85)
                );
                color: c.$color-secondary;
                font-family: f.$font-secondary;
                font-weight: 800;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                opacity: 0;
                transition: opacity 0.25s ease;
            }

            &-card__overlay span {
                pointer-events: none;
            }

            &-card:hover img {
                transform: scale(1.04);
            }

            &-card:hover &-card__overlay {
                opacity: 1;
            }
        }
    }

    .about-hero :deep(.hero_tamplate--gradient::before) {
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.55) 40%,
            rgba(0, 0, 0, 0.9) 100%
        );
    }

    .about-hero :deep(.content_h2) {
        font-variation-settings: "wght" 700;
        font-size: clamp(1.6rem, 4vw, 3rem);
    }

    .about-hero :deep(.content_h2 span) {
        font-variation-settings: "wght" 900;
    }

    @media (min-width: 600px) {
        .about-container {
            padding-block: 3rem;
        }

        .about-cards--facilities {
            grid-template-columns: repeat(3, 1fr);
        }

        .about-feed {
            grid-template-columns: repeat(2, 1fr);
        }

        .about-section--values .about-container {
            background-color: c.$color-tertiary;
        }
    }

    @media (min-width: 1024px) {
        .about-container {
            padding-block: 4rem;
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
            background-color: c.$color-tertiary;
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

        .about-section p {
            line-height: 2.2rem;
        }

        .about-follow__handle-link {
            font-size: 24px;
            padding-right: 18px;
        }

        .about-follow__avatar {
            width: 110px;
            height: 110px;
            margin-right: 20px;
        }
    }
</style>