<script setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import PageSlider from '@/components/PageSlider.vue';
  import { store } from '../store.js'
</script>
<template>
  <template v-if="productId">
  <Breadcrumb 
    :nameProduct="productItem.nameProduct" 
    v-show="(winWidth >= 1024)"
  />
  <div class="content__product-reviews product-reviews">
    <div class="product-reviews__column">
      <div>
        <h1>{{ productItem.nameProduct }}, {{ productItem.weight }} г</h1>      
        <p class="product-reviews__weight">{{ productItem.weight }} г</p>
        <div
          class="product-reviews-price product-price"
          :class="productItem.actionPrice ? 'price-action' : ''"
        >
          <p class="product-price__price">{{ productItem.cardPrice }} ₽</p>
          <span v-if="productItem.actionPrice" class="product-reviews__subprice">Акция</span>
        </div>
        <div class="product-reviews__text product-text">
          <div class="product-text__block">
            <h3>Описание</h3>
            <p>{{ productItem.modalReviews }}</p>
          </div>
          <div class="product-text__block">
            <h3>Состав</h3>
            <p>{{ productItem.cardReviews }}</p>
          </div>
          <div class="product-text__block">
            <h3>Годен</h3>
            <p>10 суток</p>
          </div>
          <div class="product-text__block">
            <h3>Вес/объем</h3>
            <p>250 - 500&nbsp;г</p>
          </div>
          <div class="product-text__block">
            <h3>Условия хранения</h3>
            <p>Хранить при температуре от 2.0 °С до 6.0 °С</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product-reviews__column product-reviews__column_slider">
      <PageSlider
        :photosProduct="productItem.reviewsPhotosProduct"
      />
    </div>
    <div class="product-reviews__bottom-close" @click="hideReviews"></div>
  </div>
  <div class="modal-background" @click="hideReviews"></div>
  </template>
  <!-- sdfg -->
</template>
<script>
export default {
  data() {
    return {
      store,
      productAssortment: store.productAssortment,
      winWidth: window.innerWidth,
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
      this.$router.push('/assortment');
    }
  },
  mounted() {
    window.onresize = () => {
      this.winWidth = window.innerWidth
    };    
  },
}
</script>
<style lang="scss" scoped>
  .content__product-reviews {
    display: flex;
    gap: 32px;

    @media (max-width: 1150px) {
      flex-direction: column;
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
      background: url(/src/assets/images/bg-pattern.jpg) center repeat #FCFDFF;        
      width: 480px;
      box-shadow: var(--box-shadow-container);          
      gap: 0px;    
    }

    @media (max-width: 599px) {
      top: 44px;
      left: 0px;
      width: 100%;
      border-radius: 24px 24px 0px 0px;
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
        height: 50%;
        max-height: 300px;
      }

      @media (max-width: 599px) {
        max-width: 100%;
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

      &:first-child {
        height: calc(100vh - 300px);

        @media (max-height: 699px) {
          height: calc(100vh - 54%);
        }

        @media (max-height: 599px) {
          height: calc(100vh - 50%);
        }
      }
    }

    
  }

  .modal-background {
    background-color: rgba(0, 0, 0, 0.1882352941);
    z-index: 1;
    display: none;

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
    padding: 6px 0px;
    margin-bottom: 0 !important;
  }

  .price-action {
    .product-price__price {
      width: fit-content;
      font-size: 20px; font-weight: 600 !important;
      color: #ffffff;
      background-color: #4BC6EF;
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
    margin-bottom: 16px;

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

      @media (max-width: 1023px) {
          // font-size: 14px;
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
  }
</style>
