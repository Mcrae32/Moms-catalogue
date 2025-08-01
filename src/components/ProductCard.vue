<script setup>

</script>

<template>
    <div class="product-card c-a-r-d cell">
        <div class="card__img">
            <button class="quick-view">Быстрый просмотр</button>
            <img src="/src/assets/images/assortment/1.png" alt="Продукт копчено-варёный из свинины.">
        </div>
        <div class="card__content">
            <p class="card__title">Продукт копчено-варёный из свинины.</p>
            <div class="card__info">
                <p class="card__weight">250 г</p>
                <p class="card__reviews">Описание карточки, состава</p>
            </div>
            <div class="card__footer">
                <span class="card__price">2000 &nbsp;₽</span>
                <button class="card__button"></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    p{
        margin-bottom: 0 !important;
    }
    .product-card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        &:hover, &:focus {            
            .card__content {
                background-color: #F5F6F8;
                border-color: #F1F0F5;
            }
        }

        @media (min-width: 1024px) {
            &:hover, &:focus {
                .card__img {
                    .quick-view {
                        display: block;
                        opacity: 1;
                    }
                }
                .card__content {
                    background-color: #F5F6F8;
                    border-color: #F1F0F5;
                }
            }
        }

        
    }
    .card__img {
        position: relative;
        z-index: 1;
        width: 108px;
        height: 108px;
        background-image: url(../assets/images/board.png);
        background-position-x: center;
        background-position-y: 0%;
        background-size: 95.45px;
        background-repeat: no-repeat;

        .quick-view {
            opacity: 0;
            display: none;
            position: absolute;
            z-index: 2;
            top: calc(50% - 24px); left: calc(50% - 69.5px);
            box-sizing: border-box;
            border-radius: 8px;
            border: 1px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffffffd1;
            color: #7c7c7c;
            font-size: 12px; font-weight: bold;
            padding: 10px;
            width: 142px;
            cursor: pointer;
            box-shadow: 0px 6px 12.8px 0px rgba(0, 0, 0, 0.13);
            transition: opacity 0.3s ease-in-out 0s;

            &:hover, &:focus {
                display: block;
                opacity: 100%;
                color: #333333;
                background-color: #ffffffeb;
                box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);
            }
        }

        &::after {
            position: absolute;
            top: calc(50% - 55px);
            left: calc(50% - 49px);
            content: '';
            display: block;
            width: 95.45px;
            height: 95.45px;
            border-radius: 50%;
            box-shadow: 4.96px 9px 13.75px 0px rgba(0, 0, 0, 0.16), 2.48px 2.48px 4.96px 0px rgba(0, 0, 0, 0.05);
            z-index: 0;
        }
    }
    .card__content {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 52px 14.87px 9.91px 14.87px;
        margin-top: -54px;
        border-radius: 24px;
        background-color: #ffffff;
        border: 2px solid #F1F0F5;
        color: #7c7c7c;
        font-size: 12px;
        font-weight: 500;
        line-height: 120%;
    }
    .card__title {
        font-size: 14px;
        font-weight: 600 !important;
        color: #333333;
        line-height: 110%;        
    }
    .card__weight {
        color: #b0b0b0;
    }
    .card__info {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .card__reviews {
        font-weight: 500 !important;
    }
    .card__footer {
        min-height: 30px;
        display: flex;
        align-items: center;
    }
    .card__price {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
    }
    .card__button {
    }
</style>
