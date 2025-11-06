<script setup>
    import instagramBlack from '@/assets/images/instagram_logo/black-glyph/instagram_glyph_black.png'
    import facebookBloue from '@/assets/images/facebook_logo/logo/primary-logo/Facebook_Logo_Primary.png'
    import odenseIdreatspark from '@/assets/images/ikoner/odense-idreatspark-logo.png'
    import logIndIkon from '@/assets/images/ikoner/logind-ikon.png'
    import soeIkon from '@/assets/images/ikoner/soe-ikon.png'
    import dropdownPil from '@/assets/images/ikoner/dropdown_pil.png'
    import './assets/main.scss'

    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import { useRouter } from 'vue-router'

    const activeIndex = ref(null) // number | null er fint i JS
    const toggle = (i) => {
    activeIndex.value = activeIndex.value === i ? null : i
    }

    const isMenuOpen = ref(false)
    const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }

    // Luk menu ved routeskift (når man klikker et link)
    const router = useRouter()
    router.afterEach(() => { isMenuOpen.value = false })

    // Luk ved klik udenfor
    const onDocClick = (e) => {
    if (!e.target.closest('.mobile_nav') && !e.target.closest('.hamburger')) {
        isMenuOpen.value = false
    }
    }
    onMounted(() => document.addEventListener('click', onDocClick))
    onBeforeUnmount(() => document.removeEventListener('click', onDocClick))

</script>

<template>
    <header>
        <div class="header_mobil">
            <div>
                <button class="hamburger" @click="toggleMenu" :aria-expanded="isMenuOpen">
            
                    <svg width="40" height="17" viewBox="0 0 55 24" fill="none">              
                        <rect id="streg_1" width="40" height="2" fill="#210700"></rect>         
                        <rect id="streg_2" y="11" width="40" height="2" fill="#210700"></rect>
                        <rect id="streg_3" y="22" width="40" height="2" fill="#210700"></rect>
                    </svg>  <!--størrelsen, højden og farven for mine streger - hamburgermenuen-->  

                </button>
            </div>

            <nav class="mobil_nav" :class="{ open: isMenuOpen }">
                <ul class="mobil_nav_ul" @click.stop>
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

                    <li>
                        <a href="https://www.instagram.com/odenseidraetspark/" target="_blank">
                            <img class="logo_mobil_some" :src="instagramBlack" alt="instagram logo" />
                        </a>

                        <a href="https://www.facebook.com/OdenseIdraetspark" target="_blank">
                            <img class="logo_mobil_some" :src="facebookBloue" alt="facebook logo" />
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="mobil_header_logo">
                <RouterLink to="/">
                    <img class="mobil_logo_img" :src="odenseIdreatspark" alt="Odense Idrætspark" />
                </RouterLink>
            </div>

            <div class="mobil_header_actions">
                <div class="header_actions_login">
                    <img class="mobil_ikon_img" :src="logIndIkon" alt="Logind ikon" />
                </div>
                <img class="mobil_ikon_img" :src="soeIkon" alt="Soe ikon" />
            </div>
        </div>

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
    
    .top_header {
        display: none;
    }
    
    .dropdown__arrow {
    width: 14px;
    height: 14px;
    margin-left: 8px;
    transition: transform 0.3s ease;
    }

    .dropdown__arrow.rotated {
    transform: rotate(180deg);
    }

    .bottom_header_nav {
        display: none;
    }

    .hamburger {
        margin-top: 20px;
        background-color: transparent;
        border: 0px;
    }

    .mobil_nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 60%;
    max-width: 320px;
    background: #F5F5F5;
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    padding: 2rem 1.5rem;
    color: $color-primary;

        &.open {
            transform: translateX(0);
        }

        &_ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                margin-bottom: 1rem;

                button,
                a {
                    background: none;
                    border: none;
                    font-size: 1.1rem;
                    color: #210700;
                    text-decoration: none;
                    width: 100%;
                    text-align: left;
                    cursor: pointer;
                }

                button {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .dropdown__arrow {
                    transition: transform 0.3s ease;
                        &.rotated {
                            transform: rotate(180deg);
                        }
                    }
                }

                ul {
                    margin-top: 0.5rem;
                    margin-left: 1rem;

                    li {
                    margin-bottom: 0.5rem;
                    }
                }
                
                ul {
                    list-style: none;
                    margin: 0.3rem 0 0 1rem;
                    padding: 0;

                    li {
                        padding: 0.4rem 0;
                        font-size: 1rem;
                        color: #210700;
                    }
                }
            }
        }
    }




    .logo_mobil_some {
        width: 30px;
        margin: 5px;
    }

    .header_mobil {
        display: flex;
        justify-content: space-around;
    }

    .mobil_ikon_img {
        width: 20px;
        height: 20px;
        margin: 10px;
    }

    .mobil_logo_img {
        width: 130px;
    }

    .mobil_header_actions {
        display: flex;
        margin-top: 10px;
    }

    .mobil_nav_ul {
        position: absolute;
    }


    @media (min-width: 600px) {

    }

    @media (min-width: 1024px) {
        .hamburger { 
            display: none; 
        }
    }
</style>