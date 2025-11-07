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
        </div>

            <div class="footer__social" aria-label="Sociale medier">
                <h2 class="footer__follow">Følg os</h2>
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
    </footer>
</template>

<style lang="scss" scoped>
    @use '../assets/_colors.scss' as c;

.footer {
  background: c.$color-tertiary;
  color: c.$color-primary;

  &__inner {
    /* Mobil først: én kolonne – rækkefølgen: logos → info → kontakt → følg */
    display: grid;
    gap: 28px;
    padding: 24px 20px 28px;
    max-width: 1200px;
    margin-inline: auto;

    grid-template-columns: 1fr;
    grid-template-areas:
      "logos"
      "info"
      "contact"
      "follow";
  }

  /* Knyt områder til dine eksisterende sektioner */
  &__logos   { grid-area: logos; display: flex; align-items: center; gap: 28px; }
  &__info    { grid-area: info; line-height: 1.6; min-width: 0; }
  &__contact { grid-area: contact; display: flex; flex-direction: column; gap: 12px; }
  &__social  { grid-area: follow; display: grid; grid-template-rows: auto auto; gap: 12px; align-content: start; }

  /* Typografi/ikoner (mobil baseline) */
  &__logo--idraetspark { height: 56px; }
  &__logo--kommune     { height: 64px; }
  &__title     { margin: 0 0 6px; font-weight: 700; font-size: 1rem; }
  &__subtitle  { margin: 0 0 8px;  font-weight: 400; font-size: .9rem; }
  &__line      { margin: 0 0 6px;  font-size: .95rem; }
  &__heading,
  .footer__follow { margin: 0; font-weight: 700; font-size: 1rem; }

  &__link {
    color: c.$color-primary;
    text-decoration: none;
    &:hover, &:focus { text-decoration: underline; }
  }

  &__social-link {
    grid-row: 2; /* ikoner under overskrift */
    display: inline-flex; align-items: center; justify-content: center;
    inline-size: 38px; block-size: 38px; border-radius: 999px;
  }
  &__social-img { inline-size: 22px; block-size: 22px; }

  /* Tablet (≥ 600px): lidt større spacing/ikoner */
  @media (min-width: 600px) {
    &__inner { gap: 34px; padding: 32px 24px; }
    &__logo--idraetspark { height: 60px; }
    &__logo--kommune     { height: 70px; }
    &__social-link { inline-size: 40px; block-size: 40px; }
  }

  /* Desktop (≥ 1024px): 3 tydelige sektioner i én række.
     Første kolonne er “Odense Idrætspark”: logos øverst, info under.
     Midterste: Kontakt. Højre: Følg os. */
  @media (min-width: 1024px) {
    &__inner {
      padding: 40px 32px;
      gap: 48px;
      grid-template-columns: 1.4fr 1fr .9fr; /* venstre bredest */
      grid-template-areas:
        "logos   contact follow"
        "info    contact follow";
      align-items: start;
    }

    /* Finpuds størrelser */
    &__logo--idraetspark { height: 64px; }
    &__logo--kommune     { height: 72px; }
    &__title     { font-size: 1.25rem; }
    &__heading,
    .footer__follow { font-size: 1.2rem; }
    &__line     { font-size: 1rem; }
    &__social-link { inline-size: 42px; block-size: 42px; }
    &__social-img { inline-size: 24px; block-size: 24px; }
  }
}

/* Skærmlæser-hjælpere (behold din eksisterende hvis du har den allerede) */
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); border: 0;
}
</style>