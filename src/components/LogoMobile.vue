<template>
    <div class="logo logo-wrap logo-wrap_mobile">
        <div class="logo__heading"></div>
        <div class="logo__text-mobile">
            <div class="logo__title">Мясные деликатесы</div>
            <div class="logo__subtitle">Вкусно и полезно!</div>
        </div>
    </div>
</template>

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

        .logo__heading {
            height: 64px;
            width: 64px;
            margin-bottom: 0px;
            background-size: contain;
        }

        .logo__title {
            margin-bottom: 5px;

            @media (max-width: 422px) {
                font-size: 22px;
            }
        }

        @media (max-width: 1023px) {
            display: flex;
        }
    }
</style>