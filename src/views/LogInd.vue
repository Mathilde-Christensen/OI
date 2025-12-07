<script setup></script>

<template>
    <div class="login_background">
        <section class="login-card" role="region" aria-label="Vælg login-type">
            <h2 class="login_h2">Log ind som:</h2>

            <nav class="choices" aria-label="Login muligheder">
                <RouterLink class="choice" to="/">
                <span class="choice_label">Bruger</span>
                <span class="choice_hint">Til dig som privat person</span>
                </RouterLink>

                <RouterLink class="choice" to="/">
                <span class="choice_label">Forening</span>
                <span class="choice_hint">Til forenings konto</span>
                </RouterLink>

                <RouterLink class="choice" to="/admin">
                <span class="choice_label">Administrator</span>
                <span class="choice_hint">Til Administration</span>
                </RouterLink>
            </nav>
        </section>
    </div>
</template>

<style lang="scss">
    @use '../assets/_colors.scss' as c;
    @use '../assets/_fonts.scss' as f;


    .login_h2{
        margin-bottom: 10px;
    }

    .login-card {
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 250px;
        border: 0.5px solid rgba(c.$color-primary, 0.5);
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .choices {
        display: flex;
        flex-direction: column;
        align-items: center; 
        gap: 16px;           
        width: 100%;         
    }

    .choice {
        width: 80%;          
        text-align: center;
        border: 0.5px solid rgba(c.$color-primary, 0.5);
        border-radius: 10px;
        width: 200px;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .choice_label {
        font-weight: 800;
        font-size: 1rem;
        color: c.$color-primary;
    }

    .choice_hint {
        font-size: 0.8rem;
        opacity: 0.8;
        color: c.$color-primary;
    }

    .login_background {
        background-color: c.$color-secondary;
        height: 65vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>