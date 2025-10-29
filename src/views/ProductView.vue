<script setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import PageSlider from '@/components/PageSlider.vue';
  import { store } from '../store.js';
  import 'swiped-events';
</script>
<template>
  <div v-if="productId">
    <Breadcrumb 
      :nameProduct="productItem.nameProduct" 
      v-show="(winWidth >= 1024)"
    />
    <div class="content__product-reviews product-reviews" :class="{ 'swiped': isSwiped }">
      <div class="product-reviews__column">
        <div>
          <h1 :class="{ 'is-skeleton': isLoading }">{{ productItem.nameProduct }}, {{ productItem.weight }} г</h1>      
          <!-- <p class="product-reviews__weight">{{ productItem.weight }} г</p> -->
          <div
            class="product-reviews-price product-price"
            :class="productItem.actionPrice ? 'price-action' : ''"
          >
            <p class="product-price__price" :class="{ 'is-skeleton': isLoading }">{{ productItem.cardPrice }} ₽</p>
            <span v-if="productItem.actionPrice" class="product-reviews__subprice">Акция</span>
          </div>
          <div class="product-reviews__text product-text">
            <div class="product-text__block">
              <h3>Описание</h3>
              <p v-for="(item, idx) in productItem.productReviews" :class="{ 'is-skeleton': isLoading }">
                {{ item }}
              </p>
            </div>
            <div class="product-text__block">
              <h3>Состав</h3>
              <p :class="{ 'is-skeleton': isLoading }">{{ productItem.cardReviews }}</p>
            </div>
            <div class="product-text__block">
              <h3>Годен</h3>
              <p>{{ productItem.expirationDate}}</p>
            </div>
            <div class="product-text__block">
              <h3>Вес/объем</h3>
              <p :class="{ 'is-skeleton': isLoading }">{{ productItem.weight }} г</p>
            </div>
            <div class="product-text__block">
              <h3>Условия хранения</h3>
              <p :class="{ 'is-skeleton': isLoading }">{{ productItem.storageСonditions }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product-reviews__column product-reviews__column_slider" :class="{ 'is-skeleton': isLoading }">
        <PageSlider
          :photosProduct="productItem.reviewsPhotosProduct"
          @swiped-down="handleSwipeDown"
        />
      </div>
      <div 
        class="product-reviews__bottom-close"         
        @click="hideReviews"
        @swiped-down="handleSwipeDown"                
      ></div>
      <div 
        class="product-reviews__bottom-close product-reviews__bottom-close_mobile"         
        @click="hideReviews"
        @swiped-down="handleSwipeDown"                
      ></div>
    </div>
    <div class="modal-background showIn" :class="animated ? 'active' : ''" @click="hideReviews"></div>     
  </div>
</template>
<script>
export default {
  data() {
    return {
      store,
      productAssortment: store.productAssortment,
      winWidth: window.innerWidth,
      isSwiped: false,
      animated: true,
      pageHeight: 0,
    }
  },
  props: ['productId'],
  components: {
    Breadcrumb
  },
  computed: {
    productItem() {      
      return this.productAssortment.find(product => product.id == this.productId);
    }
  },
  methods: {
    handleResize() {
      this.winWidth = widndow.innerWidth;
    },        
    hideReviews() {
      // this.$router.push('/assortment');
      this.isSwiped = true;      
      setTimeout(() => {
        this.$router.push('/assortment');
      }, 600);
      setTimeout(() => {
        this.isSwiped = false;        
      }, 700);

      
      setTimeout(() => {
          this.animated = !this.animated;                
      }, 300);
      setTimeout(() => {
          this.animated = !this.animated;                
      }, 700);      
    },
    
    handleSwipeDown(event) {
      // console.log('Смахнули вниз!', event);
      this.isSwiped = true;      
      setTimeout(() => {
        this.$router.push('/assortment');
      }, 600);
      setTimeout(() => {
        this.isSwiped = false;        
      }, 700);

      setTimeout(() => {
          this.animated = !this.animated;                
      }, 300);
      setTimeout(() => {
          this.animated = !this.animated;                
      }, 700);       
    },

    // updatePageHeight() {
    //   const containerHeight = this.$refs.page.clientHeight;
    //   this.pageHeight = containerHeight;
    // },
  },
  mounted() {
    window.onresize = () => {
      this.winWidth = window.innerWidth
    };     
    // this.updatePageHeight();
    // window.addEventListener('resize', this.updatePageHeight);
    // console.log("pageHeight - ", this.pageHeight);
  },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.updatePageHeight);
  // },
}
</script>

<style lang="scss" scoped>
  $heightImageSlider: 300px;
  $heightImageSliderMob: 160px;
  $heightImageSliderMob_2: 260px;

  .content__product-reviews {
    display: flex;
    gap: 32px;

    @media (max-width: 1150px) {
      flex-direction: column-reverse;
      align-items: center;

    }

    @media (max-width: 1023px) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      flex-direction: column-reverse;
      justify-content: flex-end;
      overflow: hidden;
      z-index: 101;        
      border-radius: 24px 0px 0px 24px;
      background-color: #ffffff;
      width: 480px;
      height: 100%;
      box-shadow: var(--box-shadow-container);          
      gap: 0px;   
      
        &.swiped {
          transform: translateX(100%);
          transition: transform 0.48s ease-in-out;
        }
    }

    @media (max-width: 599px) {
      // top: calc(10vh + 5%);
      top: 15px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      transform: none;
      // height: calc(90vh - 5%);
      height: calc(100% - 15px);
      width: 100%;
      border-radius: 24px 24px 0px 0px;
      
      // transition: transform 0.5s ease;

      transform: none;
      transform: translateY(0);

        &.swiped {
          transform: translateY(100%);
          transition: transform 0.48s ease-in-out;
        }      
    }    

    .product-reviews__column {

      @media (max-width: 1150px) {
        width: 100%;
      }
    }

    h1 {
      font-size: 2em;
      text-wrap: pretty;

      @media (max-width: 1199px) {
        font-size: 1.8em;
      }

      @media (max-width: 1023px) {
        font-size: 1.2em;
        margin-bottom: 20px;
        // grid-area: title;
      }
    }

    .product-reviews__text {
      @media (max-width: 1023px) {
        grid-area: reviews;
        overflow: auto;
      }
    }

    .product-reviews__weight {
      margin-bottom: 1.2em;

      @media (max-width: 1023px) {
        display: none;
      }
    }

    .product-reviews__column_slider {
      max-width: 480px;    

      @media (max-width: 1220px) {
        max-width: 400px;
      }  
      
      @media (max-width: 1150px) {
        max-width: 480px;
      }

      @media (max-width: 1023px) {
        padding: 0px;
        height: $heightImageSlider;
      }

      @media (max-width: 599px) {
        max-width: 100%;
      }

      @media (max-height: 699px) {
        height: $heightImageSliderMob_2;
      }

      @media (max-height: 450px) {
        height: $heightImageSliderMob;
      }
    }
  }

  .product-reviews__column {
    @media (max-width: 1023px) {
      padding: 20px;      
      
      & > div {
        // display: grid;
        // grid-template-areas: "title"
        //                     "reviews"
        //                     "price";
        height: 100%;
        overflow: auto;
      }
    }    
  }

  .product-reviews__column:first-child {
    @media (min-width: 1151px) {
      width: 68%;
    }

    @media (max-width: 1023px) {
      // height: calc(100vh - 340px);     
      height: calc(100dvh - ($heightImageSlider + 20px));        
      width: 100%;        
    }

    @media (max-height: 699px) {
      height: calc(100dvh - ($heightImageSliderMob_2));
    }

    @media (max-height: 450px) {
      height: calc(100dvh - ($heightImageSliderMob));
    }
  }

  .modal-background {
    background-color: rgba(0, 0, 0, 0.1882352941);
    z-index: 1;
    display: none;
    height: 100%;

    @media (max-width: 1023px) {
      display: block;
    }
  }
  
  .product-reviews-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 20px;

    @media (max-width: 1023px) {
      grid-area: price;
      // margin-bottom: 8px;
    }
  }

  .product-price__price {
    width: fit-content;
    font-size: 20px; font-weight: 600 !important;
    color: #333333;
    background-color: #EEEEEE;
    padding: 6px 8px;
    margin-bottom: 0 !important;
    border-radius: 7px;
    position: relative;    

    &::before, &::after {
      content: '';
      display: block;
      background-color: #ffffff;
      width: 8px; height: 8px;
      border-radius: 4px;
      position: absolute;
      top: calc(50% - 4px);
    }

    &::before {
      left: -4px;
    }

    &::after {
      right: -4px;
    }
  }

  .price-action {
    .product-price__price {
      color: #ffffff;
      background-color: #4BC6EF;
    }
  }
  .product-reviews__subprice {
    font-size: 12px;
    font-weight: 600 !important;
  }
  .price-action {
    .product-reviews__subprice {
      color: #4BC6EF;
    }
  }

  .product-text__block {
    margin-bottom: 8px;

    h3 {
      font-size: 16px; 
      font-weight: 600;
      margin-bottom: 4px;

      @media (max-width: 1023px) {
        // font-size: 14px;        
        color: #333333;
        line-height: 110%;
      }
    }

    p {
      line-height: 120%;
      padding-bottom: 8px;
      margin-bottom: 0 !important;

      @media (max-width: 1023px) {
        font-weight: normal;
        color: #7c7c7c;
        line-height: 120%;
      }
    }
  }

  .product-reviews__bottom-close {
    display: none;
    position: absolute;
    top: 16px;
    bottom: unset;    
    left: 16px;
    width: 30px;
    height: 30px;
    background-image: url(../assets/images/icons/other/slider-arrows.svg);
    background-position-x: 100%;
    background-repeat: no-repeat;
    overflow: hidden;    
    z-index: 2;
    cursor: pointer;

    @media (max-width: 1023px) {
      display: block;
    }

    @media (max-width: 599px) {
      background-color: #333333;
      opacity: 0.7;
      background-image: unset;
      width: 54px;
      height: 8px;
      border-radius: 4px;
      left: calc(50% - 27px);
      top: 24px;
      border: 1px solid white;
    }

    &.product-reviews__bottom-close_mobile {
      display: none;

      @media (max-width: 599px) {
        display: block;
        top: 16px;
        left: 16px;
        width: 30px;
        height: 30px;
        background-image: url(../assets/images/icons/other/slider-arrows.svg);                
        border-radius: unset;
        border: unset;
        background-color: unset;
        opacity: 1;
        transform: rotate(90deg);
      }
    }
  }
</style>
