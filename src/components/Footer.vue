<script setup>
import odenseIdraetspark from '../assets/images/ikoner/odense-idreatspark-logo.png'
//import odenseKommune from '../assets/images/ikoner/odense-kommune-logo.png'
import instagramBlack from '../assets/images/instagram_logo/black-glyph/instagram_glyph_black.png'
import facebookBlue from '../assets/images/facebook_logo/logo/primary-logo/Facebook_Logo_Primary.png'
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner">
      <div class="footer__logos">
        <img class="footer__logo footer__logo--idraetspark" :src="odenseIdraetspark" alt="Odense Idrætspark"/>

        <div class="footer__kommune" v-if="odenseKommune">
          <img class="footer__logo footer__logo--kommune" :src="odenseKommune" alt="Odense Kommune"/>
          <span class="footer__kommune-text" aria-hidden="true">
            ODENSE<br />KOMMUNE
          </span>
        </div>
      </div>

      <div class="footer__info">
        <h2 class="footer__title">Odense Idrætspark</h2>
        <p class="footer__subtitle">– en del af Odense Kommune</p>
        <p class="footer__line">By- og Kulturforvaltningen (Fritid og Kultur)</p>
        <p class="footer__line">Israels Plads 3, 5200 Odense V</p>
        <p class="footer__line">CVR: 35209115</p>
      </div>

      <div class="footer__contact">
        <a class="footer__link" href="mailto:kontakt@odense-idraetspark.dk">
          kontakt@odense-idraetspark.dk
        </a>
        <a class="footer__link" href="tel:+4566131372">+45 66 13 13 72</a>

        <div class="footer__social" aria-label="Sociale medier">
          <a
            class="footer__social-link" href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
            <span class="sr-only">Instagram</span>
            <img class="footer__social-img" :src="instagramBlack" alt="" />
          </a>

          <a
            class="footer__social-link" href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
            <span class="sr-only">Facebook</span>
            <img class="footer__social-img" :src="facebookBlue" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use './assets/_colors.scss' as c; 

.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0);
  border: 0;
}

.footer {
  background: c.$color-tertiary; 
  color: c.$color-primary;       
  padding: 32px 20px;

  &__inner {
    max-width: 1200px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr;
    gap: 24px;
    align-items: center;
  }

  &__logos {
    display: flex;
    align-items: center;
    gap: 28px;
    min-width: 0;
  }

  &__logo {
    display: block;
    height: 42px;
    width: auto;

    &--idraetspark { height: 40px; }
    &--kommune { height: 54px; }
  }

  &__kommune {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__kommune-text {
    line-height: 1.05;
    letter-spacing: 0.32em;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: c.$color-primary;
    white-space: nowrap;
  }

  &__info {
    line-height: 1.5;
    min-width: 0;
  }

  &__title {
    font-weight: 700;
    margin: 0 0 2px 0;
  }

  &__subtitle {
    margin: 0 0 10px 0;
    font-weight: 600;
  }

  &__line { margin: 0; }


  &__contact {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  &__link {
    color: c.$color-secondary; 
    font-weight: 600;
    text-decoration: none;

    &:hover, &:focus { text-decoration: underline; }
  }

  &__social {
    display: flex;
    gap: 14px;
    margin-top: 6px;
  }

  &__social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px; height: 34px;
    border-radius: 50%;
    background: c.$color-secondary; 
    text-decoration: none;

    &:hover, &:focus { opacity: 0.9; }
  }

  &__social-img {
    width: 18px; height: 18px;
  }
}

@media (max-width: 980px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .footer__contact { align-items: flex-start; }
  .footer__kommune-text { letter-spacing: 0.26em; font-size: 18px; }
}
</style>