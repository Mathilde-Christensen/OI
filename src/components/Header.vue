<script setup>
    import instagramBlack from '@/assets/images/instagram_logo/black-glyph/instagram_glyph_black.png'
    import facebookBloue from '@/assets/images/facebook_logo/logo/primary-logo/Facebook_Logo_Primary.png'
    import odenseIdreatspark from '@/assets/images/ikoner/odense-idreatspark-logo.png'
    import logIndIkon from '@/assets/images/ikoner/logind-ikon.png'
    import soeIkon from '@/assets/images/ikoner/soe-ikon.png'
    import dropdownPil from '@/assets/images/ikoner/dropdown_pil.png'

    import { ref } from 'vue'

    const activeIndex = ref(null) // number | null er fint i JS
    const toggle = (i) => {
    activeIndex.value = activeIndex.value === i ? null : i
}

</script>

<template>
    <header>
        <div class="top_header">
            <div class="top_header_some">
                <img :src="instagramBlack" alt="instagram logo" />
                <img :src="facebookBloue" alt="facebook logo" />
            </div>

            <div class="top_header_logo">
                <RouterLink to="/">
                    <img :src="odenseIdreatspark" alt="Odense Idrætspark" />
                </RouterLink>
            </div>

            <div class="top_header_actions">
                <div class="header_actions_login">
                    <p>Log Ind</p>
                    <img :src="logIndIkon" alt="Logind ikon" />
                </div>
                <img :src="soeIkon" alt="Soe ikon" />
            </div>
        </div>

        <nav class="bottom_header_nav">
            <ul class="header_nav_ul">
                <li>
                    <button @click="toggle(0)">Aktiviteter<img :src="dropdownPil" alt="dropdown pil" class="dropdown__arrow" :class="{ rotated: activeIndex === 0 }"></button>

                    <ul v-if="activeIndex === 0">
                        <li><RouterLink to="/aktivitetsoversigt">Aktivitets oversigt</RouterLink></li>
                        <li>Foreninger</li>
                    </ul>
                </li>

                <li>
                    <button @click="toggle(1)">Booking<img :src="dropdownPil" alt="dropdown pil" class="dropdown__arrow" :class="{ rotated: activeIndex === 1 }"></button>

                    <ul v-if="activeIndex === 1">
                        <li>Mine bookinger</li>
                        <li><RouterLink to="/events">Book hold</RouterLink></li>
                        <li>Book mødelokale</li>
                        <li>Lej udstyr</li>
                    </ul>
                </li>

                <li>
                    <button @click="toggle(2)">Faciliteter<img :src="dropdownPil" alt="dropdown pil" class="dropdown__arrow" :class="{ rotated: activeIndex === 2 }"></button>

                    <ul v-if="activeIndex === 2">
                        <li>Svømmehaller</li>
                        <li>Idrætshaller</li>
                        <li>Stadion og Arenaer</li>
                        <li>Friluftbad</li>
                        <li>Skøjtehal</li>
                    </ul>

                </li>

                <li>
                    <button @click="toggle(3)">Om os<img :src="dropdownPil" alt="dropdown pil" class="dropdown__arrow" :class="{ rotated: activeIndex === 3 }"></button>

                    <ul v-if="activeIndex === 3">
                        <li>Hvem er vi?</li>
                        <li>Ledige stillinger</li>
                        <li>Presse og udvikling</li>
                    </ul>
                </li>

                <li>
                    <button @click="toggle(4)">Åbningstider og Info<img :src="dropdownPil" alt="dropdown pil" class="dropdown__arrow" :class="{ rotated: activeIndex === 4 }"></button>

                    <ul v-if="activeIndex === 4">
                        <li>Generalle åbningstider</li>
                        <li>Priser og billetter</li>
                        <li>Regler og retningslinjer</li>
                        <li>Kontaktinformation</li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    .dropdown__arrow {
    width: 14px;
    height: 14px;
    margin-left: 8px;
    transition: transform 0.3s ease; // glidende rotation
    }

    .dropdown__arrow.rotated {
    transform: rotate(180deg);
    }
</style>