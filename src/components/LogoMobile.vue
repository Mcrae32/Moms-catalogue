<template>
    <div class="logo logo-wrap logo-wrap_mobile" :class="{scroll: scrollLogo}">
        <div class="logo__heading"></div>
        <div class="logo__text-mobile">
            <div class="logo__title">Мясные деликатесы</div>
            <div class="logo__subtitle">Вкусно и полезно!</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollLogo: false,
        }
    },
    methods: {
        scrollScreen() {
            this.scrollLogo = window.scrollY > 50;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollScreen);
    },
    unmounted() {
        window.removeEventListener('scroll', this.scrollScreen);
    },
}
</script>

<style lang="scss" scoped>
    .logo-wrap_mobile {
        display: none;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;
        height: 70px;
        padding: 3px;
        border: 1.2px solid #f1f0f5;
        border-radius: 35px;
        background-color: #ffffff;
        margin-bottom: 0;
        box-shadow: none;
        transition: all 0.25s ease-in-out 0.25s;

        &.scroll {
            height: 60px;
            top: 0px;
            left: 0px;
            width: 100%;            
            border-radius: 0px 0px 22px 22px;
            background-color: #ffffffc7;
            backdrop-filter: blur(4px);
            box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgb(0 0 0 / 0.01);

            .logo__heading {
                height: 54px;
                width: 54px;                
            }
        }

        .logo__heading {
            height: 64px;
            width: 64px;
            margin-bottom: 0px;
            background-size: contain;
            transition: all 0.25s ease-in-out 0.25s;
        }

        .logo__title {
            margin-bottom: 5px;

            @media (max-width: 422px) {
                font-size: 22px;
            }
        }

        @media (max-width: 1023px) {
            display: flex;
            position: fixed;
            top: 20px;
            left: 30px;
            width: calc(100% - 60px);
            z-index: 1;
        }
    }
</style>