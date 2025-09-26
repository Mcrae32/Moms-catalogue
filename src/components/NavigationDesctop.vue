<script setup>
    import { RouterLink } from 'vue-router'
    import {store} from '../store'
</script>

<template>
  <nav>
    <!-- <button class="btn active">
        <div class="btn__wrap">
            <i class="btn__icon ri-home-7-line"></i> Главная
        </div>
    </button> -->
    <!-- <RouterLink to="/assortment" class="btn" @click="$emit('open-card')"> -->
    <RouterLink to="/assortment" class="btn" @click="store.openPosition = false">
    <!-- <RouterLink to="/assortment" class="btn"> -->
        <div class="btn__wrap">
            <i class="btn__icon ri-book-open-line"></i> 
            Ассортимент
        </div>
    </RouterLink>
    <RouterLink to="/about" class="btn">
        <div class="btn__wrap">
            <i class="btn__icon ri-building-2-line"></i> 
            О нас
        </div>
    </RouterLink>
    <!-- <button class="btn">
        <div class="btn__wrap">
            <i class="btn__icon ri-contacts-line"></i> Контакты
        </div>
    </button>     -->
  </nav>
</template>
<script>
    export default {
        data() {
            return {
                store
                // openPageProduct: false,        
            }
        },
        // inject: ['openItem'],
        components: {
            RouterLink
        },
        // emits: ['open-card'],
       
        // methods: {
        //     openCard() {
        //         this.openItem = true;
        //         console.log("openItem - ", this.openItem);
        //     }
        // }
    }
</script>
<style lang="scss" scoped>
    nav {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 16px;
    }
    .btn {
        // transition: all 0.5s ease-in-out 0.5s; 
        color: #333333;   
        text-decoration: none;   

        .btn__wrap {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            font-size: 14px;   
            color: #333333;         
            height: 48px;
            width: 172px;
            border-radius: 37px;
            transition: all 0.5s ease-in-out 0s;

            i.btn__icon {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #ffffff;
                border: 1px solid #F1F0F5;
                color: #333333;
                font-size: 26px;
                padding-bottom: 2px;
                transition: background-color 0.5s ease-in-out;

                &.ri-book-open-line {
                    padding-bottom: 0;
                }
            }

            a {
                
            }

            a:hover, a:focus {
                text-decoration: none;
            }
        }

        &:hover, &:focus {
            i.btn__icon {
                background-color: #FB5559;
                background: linear-gradient(120deg, rgba(254, 129, 129, 1) 0%, rgba(252, 83, 86, 1) 100%);
                color: #ffffff;
                position: relative;
                z-index: 1;
            
                &::after {
                    position: absolute;
                    content: '';
                    z-index: -1;
                    bottom: -3px;
                    left: calc(50% - 20px);
                    display: block;
                    width: 40px;
                    height: 28px;
                    border-radius: 12px;
                    background-color: #F48280;
                    filter: blur(10.6px)
                }
            }
        }
    }

    .btn.router-link-active {   
        position: relative;
        z-index: 1;
    
        &::after {
            position: absolute;
            content: '';
            z-index: -1;
            bottom: -3px;
            left: calc(50% - 80px);
            display: block;
            width: 160px;
            height: 38px;
            border-radius: 12px;
            background-color: #F48280;
            filter: blur(10.6px)
        }

        .btn__wrap {
            background: #FE8181;
            background: linear-gradient(120deg, rgba(254, 129, 129, 1) 0%, rgba(252, 83, 86, 1) 100%);
            color: #ffffff;

            i.btn__icon {
                color: #ffffff;
                background-color: #FB5559;
                box-shadow: inset 0px 0px 10.4px 0px rgba(251, 118, 119, 1);
                border-color: #f1f0f57d;
            }
        }

        &:hover, &:focus {
            cursor: default;

            i.btn__icon {
                position: relative;
                z-index: 0;
                background: #FB5559;
            
                &::after {
                    position: absolute;
                    content: '';
                    display: none;
                    
                }
            }
        }
    }

    @font-face {
        font-family: "remixicon";
        src: url('../assets/images/icons/menu/'); /* IE9*/
        src: url('../assets/images/icons/menu/#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url("../assets/images/icons/menu/remixicon.woff2?t=1753795691465") format("woff2"),
        url("../assets/images/icons/menu/remixicon.woff?t=1753795691465") format("woff"),
        url('../assets/images/icons/menu/remixicon.ttf?t=1753795691465') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('../assets/images/icons/menu/remixicon.svg?t=1753795691465#remixicon') format('svg'); /* iOS 4.1- */
        font-display: swap;
    }

    [class^="ri-"], [class*="ri-"] {
        font-family: 'remixicon' !important;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .ri-lg { font-size: 1.3333em; line-height: 0.75em; vertical-align: -.0667em; }
    .ri-xl { font-size: 1.5em; line-height: 0.6666em; vertical-align: -.075em; }
    .ri-xxs { font-size: .5em; }
    .ri-xs { font-size: .75em; }
    .ri-sm { font-size: .875em }
    .ri-1x { font-size: 1em; }
    .ri-2x { font-size: 2em; }
    .ri-3x { font-size: 3em; }
    .ri-4x { font-size: 4em; }
    .ri-5x { font-size: 5em; }
    .ri-6x { font-size: 6em; }
    .ri-7x { font-size: 7em; }
    .ri-8x { font-size: 8em; }
    .ri-9x { font-size: 9em; }
    .ri-10x { font-size: 10em; }
    .ri-fw { text-align: center; width: 1.25em; }

    .ri-home-7-line:before { content: "\ee23"; }
    .ri-book-open-line:before { content: "\eadb"; }
    .ri-contacts-line:before { content: "\ebd2"; }
    .ri-building-2-line:before { content: "\eb09"; }

</style>
