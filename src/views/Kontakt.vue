<script setup>
import KontaktInfo from '@/components/KontaktInfo.vue'

import Mail from '@/assets/images/ikoner/mail.webp'
import Mobil from '@/assets/images/ikoner/mobil.webp'
import Lokation from '@/assets/images/ikoner/placering.webp'
import Ur from '@/assets/images/ikoner/tid.webp'

</script>

<template>
    <div class="content">
        <div class="content_left">
            <div class="content_left_info">

                <h2>Administration</h2>

                
                <KontaktInfo
                    :icon="Mail"
                    text="Idraetspark@odense.dk"
                    href="mailto:Idraetspark@odense.dk"
                />

                <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 65 51 53 72"
                    href="tel:+4565515372"
                />

                <KontaktInfo
                    :icon="Lokation"
                    text="Israels Plads 3, 5200 Odense V"
                />

                <KontaktInfo
                    :icon="Ur"
                    text="Man-tor: kl. 08.30 - 15.30 fredag: kl. 08.30 - 13.00"
                />
                
            </div>

            <div class="content_left_info">

                <h2>Odense idrætshal</h2>

                <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 30 24 02 65 - Forplejning til arrangementer eller møder"
                    href="tel:+4530240265"
                />

                <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 65 51 53 77 - Vagttelefon Odense Idrætshal"
                    href="tel:+4565515377"
                />

                <p class="p_content">
                    OBS - vagttelefonen besvarer ikke henvendelser vedrørende NemBillet, Åbningstider, eller glemte sager.
                </p>

            </div>

            <div class="content_left_info">
                
                <h2>Odense Isstadion</h2>

                <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 65 51 53 77 - Vagten"
                    href="tel:+4565515377"
                />

                <KontaktInfo
                    :icon="Lokation"
                    text="Møllemarksvej 75, 5200 Odense V"
                />

                <p class="p_content">
                    Har du brug for information om firma-arrangementer eller Pay & Play, bedes du kontakte Odense Bulldogs
                </p>

                <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 69 96 05 50 - Odense Bulldogs "
                    href="tel:+4569960550"
                />
            </div>

            <div class="content_left_info">
                <h2>Thorvald Ellegaard Arena</h2>

                <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 40 90 32 06 - John Smed"
                    href="tel:+4540903206"
                />

                <KontaktInfo
                    :icon="Lokation"
                    text="Thorvalds Vænge 9, 5200 Odense V"
                />
            </div>

            <div class="content_left_info">
                <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 65 51 53 72"
                    href="tel:+4565515372"
                />

                <p class="p_content">
                    Adresser på de enkle anlæg kan finde under faciliteter også under svømmehaller
                </p>
            </div>

        </div>

        <div class="content_right">

            <div class="content_left_info">

                <h2>Ledere ved Odense Idrætspark</h2>
                
                <div class="left_info_ledere1">

                    <h3>Sekretariatsleder Maria Skovlund Herreborg</h3>

                    <KontaktInfo
                    :icon="Mail"
                    text="msher@odense.dk"
                    href="mailto:msher@odense.dk"
                    />

                    <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 21 72 99 51"
                    href="tel:+4565515372"
                    />
                </div>

                <div class="left_info_ledere">

                    <h3>Leder af svømmehallerne Lars Christensen</h3>

                    <KontaktInfo
                    :icon="Mail"
                    text="larch@odense.dk"
                    href="mailto:larch@odense.dk"
                    />

                    <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 29 11 86 22"
                    href="tel:+4529118622"
                    />
                </div>

                <div class="left_info_ledere">

                    <h3>Leder af Odense Idrætspark og teknisk afdeling</h3>

                    <KontaktInfo
                    :icon="Mail"
                    text="danfl@odense.dk"
                    href="mailto:danfl@odense.dk"
                    />

                    <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 61 37 25 31"
                    href="tel:+4561372531"
                    />
                </div>

                <div class="left_info_ledere">

                    <h3>Chef for Fritid, Park og Vej  Anders Skovgaard</h3>

                    <KontaktInfo
                    :icon="Mail"
                    text="ansm@odense.dk"
                    href="mailto:ansm@odense.dk"
                    />

                    <KontaktInfo
                    :icon="Mobil"
                    text="+ 45 40 48 36 19"
                    href="tel:+4540483619"
                    />
                </div>

            </div>

        </div>


    </div>


</template>

<style lang="scss">
h2 {
    font-weight: 900;
    margin-bottom: 20px;
}

h3 {
    margin-bottom: 20px;
}

.p_content {
    margin-bottom: 20px;
    margin-left: 5px;
}

.content_left_info {
    margin-top: 40px;
    margin-left: 0px;
}

.left_info_ledere {
    margin-top: 40px;
}

.left_info_ledere1 {
    margin-top: 20px;
}
</style>