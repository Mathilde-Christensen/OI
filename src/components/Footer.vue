<script setup>
import odenseIdraetspark from '../assets/images/ikoner/odense-idreatspark-logo.webp'
import odenseKommune from '../assets/images/ikoner/kommunelogo.webp'
import instagramBlack from '../assets/images/instagram_logo/black-glyph/instagram_glyph_black.webp'
import facebookBlue from '../assets/images/facebook_logo/logo/primary-logo/Facebook_Logo_Primary.webp'
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner">
      <div class="footer__logos">
        <img
          class="footer__logo footer__logo--idraetspark"
          :src="odenseIdraetspark"
          alt="Odense Idrætspark"
        />
      </div>

      <div class="footer__contact">
        <a class="footer__link" href="tel:+4566131372">+45 66 13 13 72</a>
        <a class="footer__link" href="mailto:kontakt@odense-idraetspark.dk">
          kontakt@odense-idraetspark.dk
        </a>

        <div class="footer__social" aria-label="Sociale medier">
          <a
            class="footer__social-link"
            href="https://www.instagram.com/"
            target="_blank" rel="noopener"
            aria-label="Instagram"
          >
            <span class="sr-only">Instagram</span>
            <img class="footer__social-img" :src="instagramBlack" alt="" />
          </a>

          <a
            class="footer__social-link"
            href="https://www.facebook.com/"
            target="_blank" rel="noopener"
            aria-label="Facebook"
          >
            <span class="sr-only">Facebook</span>
            <img class="footer__social-img" :src="facebookBlue" alt="" />
          </a>
        </div>
      </div>

      <div class="footer__kommune" v-if="odenseKommune">
        <img
          class="footer__logo footer__logo--kommune"
          :src="odenseKommune"
          alt="Odense Kommune"
        />
      </div>

      <div class="footer__info">
        <h2 class="footer__title">Odense Idrætspark</h2>
        <p class="footer__subtitle">– en del af Odense Kommune</p>
        <p class="footer__line">By- og Kulturforvaltningen (Fritid og Kultur)</p>
        <p class="footer__line">Israels Plads 3, 5200 Odense V</p>
        <p class="footer__line">CVR: 35209115</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
    @use '../assets/_colors.scss' as c;

    .sr-only {
        position: absolute;
        width: 1px; 
        height: 1px;
        padding: 0; 
        margin: -1px;
        overflow: hidden; 
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    .footer {
        background: c.$color-tertiary;
        color: c.$color-primary;

        &__inner {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
            padding: 24px 20px 28px;
            max-width: 720px;      
            margin-inline: auto;
        }

        &__logos    { 
            order: 1; 
        }

        &__kommune  { 
            order: 2; 
        }

        &__info     { 
            order: 3; 
        }

        &__contact  { 
            order: 4; 
        }

        &__logos {
            display: flex;
            flex-direction: column; 
            align-items: flex-start;
            gap: 28px;
            margin-bottom: 6px;
        }
        &__logo { 
            display: block; 
            width: auto; 
        }
        &__logo--idraetspark { 
            height: 72px; 
        } 
        &__kommune {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        &__logo--kommune { 
            height: 56px; 
        }

        &__info {
            line-height: 1.6;
            min-width: 0;
        }
        &__title    { 
            margin: 0 0 6px; 
            font-weight: 700; 
        }
        &__subtitle { 
            margin: 0 0 12px; 
            font-weight: 600; 
        }
        &__line     { 
            margin: 0 0 6px; 
        }

        &__contact {
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: flex-start;
            margin-top: 8px;
        }
        &__link {
            color: c.$color-primary;
            font-weight: 700;
            text-decoration: none;

            &:hover, &:focus { 
                text-decoration: underline; 
            }
        }

        &__social { 
            display: flex; 
            gap: 16px; 
            margin-top: 4px; 
        }

        &__social-link {
            display: inline-flex;
            align-items: center; 
            justify-content: center;
            width: 34px; height: 34px;
            border-radius: 50%;
            background: transparent;
            text-decoration: none;
        }

        &__social-img { 
            width: 22px; 
            height: 22px; 
        }
    }

    @media (min-width: 1024px) {
        .footer__inner {
            max-width: 1200px;
            margin-inline: auto;
            padding: 40px 32px;
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            align-items: start;
            gap: 64px;
        }

        .footer__logos {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 32px;
            margin-bottom: 18px;
            flex-wrap: nowrap;
        }

        .footer__kommune {
            order: -1;
            display: inline-flex;
            align-items: center;
        }

        .footer__logo--idraetspark {
            height: 64px;
        }

        .footer__logo--kommune {
            height: 72px;
        }

        .footer__contact {
            align-items: flex-start;
            gap: 18px;
            margin-left: 0;
        }

        .footer__link {
            font-weight: 700;
        }

        .footer__social {
            display: flex;
            gap: 16px;
            margin-top: 6px;
        }

        .footer__social-img {
            width: 22px;
            height: 22px;
        }
    }

</style>