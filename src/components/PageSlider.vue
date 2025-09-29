<template>
    <div class="product-rewiews__slider slider">
        <div class="slider__show-container">
            <swiper
                :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }"
                :navigation="{ prevEl: prev, nextEl: next }"
                :spaceBetween="10"                
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"                
                class="mySwiper2"
            >
                <swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
                ><swiper-slide
                ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
                /></swiper-slide>
                <div ref="prev" class="swiper-button-prev"></div>
                <div ref="next" class="swiper-button-next"></div>
            </swiper>
            
        </div>
        <div>
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
                ><img
                    src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
                ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
                ><swiper-slide
                ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
                /></swiper-slide>
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
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

  export default {
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
        modules: [FreeMode, Navigation, Thumbs],        
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
        }

        .swiper-button-prev {
            left: unset;
            right: 46px;
        }

        .swiper-button-next {
            right: 8px;
            background-position-x: 100%;
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
    }    
    
</style>
