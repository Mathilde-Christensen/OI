<script setup>
import instaLogo from '@/assets/images/about/oiinsta.webp';
import havneImg  from '@/assets/images/about/havnebad.webp';
import nikoImg   from '@/assets/images/about/nikoline.webp';
import klosterImg from '@/assets/images/about/klosterbakke.webp';

const instaUrl = 'https://www.instagram.com/odenseidraetspark/';
</script>

<template>
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
</template>

<style scoped lang="scss">
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;
@use '../assets/_buttons.scss' as btn;

.about-section {
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

  h2 {
    font-family: f.$font-secondary;
    font-variation-settings: "wght" 400;
    margin: 20px 0;
  }

  p {
    max-width: 46rem;
    margin-bottom: 1rem;
    line-height: 1.5rem;

    @media (min-width: 1024px) {
      line-height: 2.2rem;
    }
  }
}

.about-container {
  margin: 0 auto;
  padding-block: 2rem;
  padding-inline: 4rem;
  font-family: f.$font-primary;
  color: c.$color-primary;

  @media (min-width: 600px) {
    padding-block: 3rem;
  }

  @media (min-width: 1024px) {
    padding-block: 4rem;
  }
}

/* FOLLOW BLOK */
.about-follow {
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

    @media (min-width: 1024px) {
      width: 110px;
      height: 110px;
      margin-right: 20px;
    }
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

    @media (min-width: 1024px) {
      font-size: 24px;
      padding-right: 18px;
    }
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

/* FEED */
.about-feed {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

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
</style>