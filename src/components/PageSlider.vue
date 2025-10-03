<template>
    <div class="product-rewiews__slider slider">
        <div class="slider__show-container">
            <swiper
                :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }"
                :pagination="{ 
                    el: '.swiper-pagination', 
                    type: 'fraction',                                     
                }"
                :navigation="{ prevEl: prev, nextEl: next }"
                :spaceBetween="10"                
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                :breakpoints="{                    
                    '923': {
                        spaceBetween: 0,
                    },
                    '1023': {
                        spaceBetween: 0,
                    },
                }"
                class="mySwiper2"
            >
                <swiper-slide
                    v-for="(photo, i) in photosProduct" :key="i"
                ><img :src="photo" alt="">
                </swiper-slide>
                
                <div ref="prev" class="swiper-button-prev"></div>
                <div ref="next" class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </swiper>
            
        </div>
        <div class="preview-swiper">
            <swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="10"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"                
                :modules="modules"
                class="mySwiper"                
            >
            <swiper-slide
                    v-for="(photo, i) in photosProduct" :key="i"
                ><img :src="photo" alt="">
                </swiper-slide>                
            </swiper>
        </div>
    </div>
</template>
<script>
  import { ref } from 'vue';  
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  // import required modules
  import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

  export default {
    props: ['photosProduct'],
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const thumbsSwiper = ref(null);
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
      const prev = ref(null);
      const next = ref(null);
      return {
        thumbsSwiper,
        setThumbsSwiper,
        modules: [FreeMode, Navigation, Thumbs, Pagination],        
        prev,
        next,
      };
    },
  };
</script>

<style lang="scss" scoped>
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
        box-sizing: content-box;

        // @media (max-width: 1023px) {
        //     max-height: 300px;
        // }
    }
        
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #444;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none
    }

    .swiper {
        width: 100%;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper-slide {
        background-size: cover;
        background-position: center;
    }

    .mySwiper2 {
        position: relative;
        height: 80%;
        max-height: 340px;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid #f7f7f7;        

        @media (max-width: 1023px) {
            border: none;
            border-radius: 0px;
            height: 100%;
            max-height: 300px;
        }

        .swiper-button-prev, .swiper-button-next {
            position: absolute;
            top: unset;
            bottom: 8px;
            width: 30px;
            height: 30px;
            background-image: url(../assets/images/icons/other/slider-arrows.svg);
            background-repeat: no-repeat;
            overflow: hidden;

            &::after {
                display: none;
            }

            @media (max-width: 1023px) {
                bottom: 16px;
            }
        }

        .swiper-button-prev {
            left: unset;
            right: 46px;

            @media (max-width: 1023px) {
                right: 54px;
            }
        }

        .swiper-button-next {
            right: 8px;
            background-position-x: 100%;

            @media (max-width: 1023px) {
                right: 16px;
            }
        }
    }

    .mySwiper {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;
    }

    .mySwiper .swiper-slide {
        background: #f7f7f7;
        width: 25%;
        height: 100%;
        opacity: 0.6;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid #f7f7f7;
        padding: 3px;
    }

    .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
        border-color: #FB5C5F;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;

        @media (max-width: 1023px) {
            border-radius: 0px;
        }
    }    

    .swiper-pagination {
        position: absolute;
        right: 8px;
        top: 8px;
        z-index: 1;
        font-size: 14px;
        letter-spacing: 1px;
        color: #ffffff;
        padding: 8px 12px;
        border-radius: 22px;
        background-color: #333333;
        opacity: 0.7;
        font-weight: 100;        
        border: 1px solid #ffffffc7;
        width: 68px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1023px) {
            top: 16px;
            right: 16px;
        }
    }

    .preview-swiper {
        @media (max-width: 1023px) {
            display: none;
        }
    }

    .slider__show-container,
    .product-rewiews__slider {
        @media (max-width: 1023px) {
            height: 100%;
            max-height: 300px;
        }
    }

    
    
</style>
