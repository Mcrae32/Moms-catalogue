<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navigation-tablet">
    <!-- <button class="btn active">
        <div class="btn__wrap">
            <i class="btn__icon ri-home-7-line"></i> <span>Главная</span>
        </div>
    </button> -->
    <RouterLink 
        to="/assortment" 
        class="btn" 
        custom
        v-slot="{ navigate, href }"       
    >
        <a href="#" @click="navigate" :class="{
          'router-link-active': $route.path.indexOf(href) !== -1 || $route.path === '/'
        }">
            <div class="btn__wrap">
                <i class="btn__icon ri-book-open-line"></i> 
                <span>Ассортимент</span>
            </div>
        </a>            
    </RouterLink>
    <!-- <button class="btn">
        <div class="btn__wrap">
            <i class="btn__icon ri-building-2-line"></i> <span>О нас</span>
        </div>
    </button>
    <button class="btn">
        <div class="btn__wrap">
            <i class="btn__icon ri-contacts-line"></i> <span>Контакты</span>
        </div>
    </button>     -->
  </nav>
</template>

<style lang="scss" scoped>
    nav.navigation-tablet {
        display: none;
        flex-direction: row;
        gap: 4px;
        justify-content: space-between;
        overflow: hidden;
        position: fixed;
        z-index: 100;
        bottom: 16px;
        // left: calc(50% - 252px);
        left: calc(50% - 80px);
        height: 50px;
        background-color: #ffffff;
        border: 1px solid #f1f0f5;
        border-radius: 24px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.08);

        @media (max-width: 1023px) {
            display: flex;
        }

        @media (max-width: 599px) {
            // left: calc(50% - 127px);
            left: calc(50% - 85px);
        }
    }

    .btn {
        // transition: all 0.5s ease-in-out 0.5s;    
        .btn__wrap {
            display: flex;
            align-items: center;
            gap: 0px;            
            color: #333333;
            height: 48px;            
            border-radius: 24px;   
            padding-right: 12px; 
            padding-bottom: 2px;   
            
            @media (max-width: 599px) {
                justify-content: center;
                padding: 0px 8px 2px;
            }

            i.btn__icon {
                width: 48px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: flex-start;                
                color: #333333;
                font-size: 26px;
                padding-left: 12px;
                padding-bottom: 2px;     
                
                &.ri-book-open-line {
                    padding-bottom: 0;
                }

                @media (max-width: 599px) {
                    justify-content: center;
                    padding: 0px 8px 2px;
                }
            }

            @media (max-width: 599px) {
                // span {
                //     display: none;
                // }
            }
        }

        &:hover, &:focus {
            text-decoration: none;
            .btn__wrap {
                background-color: #FB5559;
                background: linear-gradient(120deg, rgba(254, 129, 129, 1) 0%, rgba(252, 83, 86, 1) 100%);
                color: #ffffff;

                i.btn__icon {
                    color: #ffffff;
                    background-color: unset;
                    border-color: unset;
                }
            }            
        }
    }

    .btn.router-link-active {   
        position: relative;
        z-index: 1;
    
        &::after {
            display: none;
        }

        .btn__wrap {
            background: #FE8181;
            background: linear-gradient(120deg, rgba(254, 129, 129, 1) 0%, rgba(252, 83, 86, 1) 100%);
            color: #ffffff;

            i.btn__icon {
                color: #ffffff;
                background-color: unset;
                border-color: unset;
            }
        }

        &:hover, &:focus {
            cursor: default;
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
