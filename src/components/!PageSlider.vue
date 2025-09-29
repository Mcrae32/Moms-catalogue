<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css'

    export default {
        components: {
            Swiper, SwiperSlide,
        },
        emits: ['close-modal'],
        props: {
            stateModal: { type: Boolean, required: true, },
            id: { type: Number, },
        },
        data() {
            return {
            modalState: this.stateModal
            }
        },
        methods: {
        
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSlideChange, onSwiper,
            };
        },
    };
</script>

<template>
    <!-- <div class="product-rewiews__slider slider">
        <div class="slider__show-container">
            <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
        </div>
        <div class="slider__prew-container prew">
            <div class="prew__image is-action">
                <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
            </div>
            <div class="prew__image">
                <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
            </div>
            <div class="prew__image">
                <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
            </div>
        </div>
    </div> -->
    
    <div class="product-rewiews__slider slider">
        <div class="slider__show-container">
            <swiper
                :slides-per-view="1"
                :space-between="30"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :modules="modules"
            >
                <swiper-slide>
                    <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
                </swiper-slide>                                
            </swiper>
        </div>
        <div class="slider__prew-container prew">
            <div class="prew__image is-action">
                <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
            </div>
            <div class="prew__image">
                <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
            </div>
            <div class="prew__image">
                <img src="../assets/images/assortment/1/1-1.jpg" alt="Название продукта">
            </div>
            
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .product-rewiews__slider {
        display: flex;
        gap: 8px;
        width: 480px;

        @media (max-width: 1299px) {
            width: 406px;
        }

        @media (max-width: 1199px) {
            width: 346px;
        }
    }    
    .slider__show-container {
        overflow: hidden;
        width: 406px;
        height: 310px;
        border-radius: 8px;

        @media (max-width: 1199px) {
            width: 100%;
            height: auto;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    .slider__prew-container {
        width: 66px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        @media (max-width: 1299px) {
            display: none;
        }
    }
    .prew__image {
        width: 66px;
        height: 66px;
        border-radius: 8px;
        border: 1px solid #fff;
        padding: 4px;
        background-color: #fff;
        overflow: hidden;

        &.is-action {
            border-color: #FB5C5F;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 8px;
        }
    }
</style>