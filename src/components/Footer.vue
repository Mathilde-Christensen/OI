<script setup>
import odenseIdraetspark from '../assets/images/ikoner/odense-idreatspark-logo.png'
import odenseKommune from '../assets/images/ikoner/kommunelogo.webp'
import instagramBlack from '../assets/images/instagram_logo/black-glyph/instagram_glyph_black.png'
import facebookBlue from '../assets/images/facebook_logo/logo/primary-logo/Facebook_Logo_Primary.png'
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner">
      <div class="footer__logos">
        <img class="footer__logo footer__logo--idraetspark" :src="odenseIdraetspark" alt="Odense Idrætspark" />
        <img v-if="odenseKommune" class="footer__logo footer__logo--kommune" :src="odenseKommune" alt="Odense Kommune" />
      </div>

      <div class="footer__info">
        <h2 class="footer__title">Odense Idrætspark</h2>
        <p class="footer__subtitle">– en del af Odense Kommune</p>
        <p class="footer__line">By- og Kulturforvaltningen (Fritid og Kultur)</p>
        <p class="footer__line">Israels Plads 3, 5200 Odense V</p>
        <p class="footer__line">CVR: 35209115</p>
      </div>

      <div class="footer__contact">
        <h2 class="footer__heading">Kontakt</h2>
        <a class="footer__link" href="mailto:kontakt@odense-idraetspark.dk">kontakt@odense-idraetspark.dk</a>
        <a class="footer__link" href="tel:+4566131372">+45 66 13 13 72</a>

        <div class="footer__social" aria-label="Sociale medier">
          <a class="footer__social-link" href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
            <span class="sr-only">Instagram</span>
            <img class="footer__social-img" :src="instagramBlack" alt="" />
          </a>
          <a class="footer__social-link" href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
            <span class="sr-only">Facebook</span>
            <img class="footer__social-img" :src="facebookBlue" alt="" />
          </a>
        </div>
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

        &__logo--kommune    { 
            height: 56px; 
        }

        &__info { 
            line-height: 1.6; 
            min-width: 0; 
        }

        &__title    { 
            margin: 0 0 6px; 
            font-weight: 700; 
            font-size:0.9rem;
        }

        &__subtitle {
            margin: 0 0 12px;
            font-size: 0.5rem;
            font-weight: 400;
        }

        &__line {
            margin: 0 0 6px;
            font-size: 0.7rem;
        }

        &__contact { 
            display: flex; 
            flex-direction: column; 
            gap: 20px; 
            align-items: flex-start; 
        }

        &__heading { 
            margin: 0; 
            font-size: 0.9rem; 
            font-weight: 700; 
        }

        &__link {
            color: c.$color-primary; 
            font-weight: 400; 
            text-decoration: none;
            font-size: 0.7rem;

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
            width: 34px; 
            height: 34px; 
            border-radius: 50%; 
            background: transparent; 
            text-decoration: none;
        }


        &__social-img { 
            width: 22px; 
            height: 22px; 
        }
    }

    @media (min-width: 600px) {
        .footer__inner {
            align-items: flex-start;
            max-width: 1000px;
            padding: 32px 24px;
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 48px;
        }
    
        .footer__logos { 
            flex-direction:row; 
            gap: 28px; 
            align-items: center; 
        }

        .footer__logo--idraetspark { 
            height: 56px; 
        }
        .footer__logo--kommune    { 
            height: 64px; 
        }

        .footer__logos   { order: 1; grid-column: 1; }
        .footer__info    { order: 2; grid-column: 1; margin-top: -25px;}
        .footer__contact { order: 3; grid-column: 2; margin-top: -18px; }
        .footer__heading { font-size: 1rem; }
        .footer__title { font-size: 1rem;}
        .footer__line{ font-size: 0.8rem;}
        .footer__link{ font-size: 0.8rem;}
        .footer__subtitle{ font-size:0.6rem;}
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
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 32px;
            margin-bottom: 18px;
        }

        .footer__logo--idraetspark { height: 64px; }
        .footer__logo--kommune    { height: 72px; }
        .footer__logos   { order: 1; grid-column: 1; }
        .footer__info    { order: 2; grid-column: 1; margin-top: -35px;}
        .footer__contact { order: 3; grid-column: 2; margin-top: -28px;}
        .footer__heading { font-size: 1.2rem;}
        .footer__title{ font-size: 1.2rem;}
        .footer__line{ font-size: 1rem;}
        .footer__link{ font-size: 1rem;}
        .footer__subtitle{ font-size:0.8rem;}
    }
</style>