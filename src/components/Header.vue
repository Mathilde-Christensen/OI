<script setup>
    import instagramBlack from '@/assets/images/instagram_logo/black-glyph/instagram_glyph_black.png'
    import facebookBloue from '@/assets/images/facebook_logo/logo/primary-logo/Facebook_Logo_Primary.png'
    import odenseIdreatspark from '@/assets/images/ikoner/odense-idreatspark-logo.png'
    import logIndIkon from '@/assets/images/ikoner/logind-ikon.png'
    import soeIkon from '@/assets/images/ikoner/soe-ikon.png'
    import dropdownPil from '@/assets/images/ikoner/dropdown_pil.png'
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const isOpen = ref(false)

    const closeMenu = (e) => {
    if (!e.target.closest('.dropdown')) {
        isOpen.value = false
    }
    }

    onMounted(() => document.addEventListener('click', closeMenu))
    onBeforeUnmount(() => document.removeEventListener('click', closeMenu))
</script>

<template>
    <header>
        <div class="top_header">
            <div class="top_header_some">
                <img :src="instagramBlack" alt="instagram logo" />
                <img :src="facebookBloue" alt="facebook logo" />
            </div>

            <div class="top_header_logo">
                <img :src="odenseIdreatspark" alt="Odense idraetspark" />
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
                <li></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>