<script setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
  // import PageSlider from '@/components/PageSlider.vue';
</script>
<template>
  <template v-if="productId">
  <Breadcrumb />
  <div class="content__product-reviews product-reviews">
    <div class="product-reviews__column">
      <h1>{{ productItem.nameProduct }}, {{ productItem.weight }} г</h1>      
      <p class="product-reviews__weight">{{ productItem.weight }} г</p>
      <div class="product-reviews-price product-price price-action">
        <p class="product-price__price">{{ productItem.cardPrice }} ₽</p>
        <span class="product-reviews__subprice">Акция</span>
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
    <div class="product-reviews__column">
      <!-- <PageSlider /> -->
    </div>
  </div>
  </template>
  <!-- sdfg -->
</template>
<script>
export default {
  inject: ['productAssortment'],
  props: ['productId'],
  components: {
    Breadcrumb
  },
  computed: {
    // productItem() {
    //   return "1234"
    // },
    productItem() {      
      return this.productAssortment.find(product => product.id == this.productId);
      // console.log( this.productAssortment.find(product => product.id == this.productId) );
    }
  },
}
</script>
<style lang="scss" scoped>
  .content__product-reviews {
    display: flex;
    gap: 32px;

    // @media (max-width: 1199px) {
    //   flex-direction: column;
    // }

    h1 {
      font-size: 2em;
      text-wrap: pretty;

      @media (max-width: 1199px) {
        font-size: 1.8em;
      }
    }

    .product-reviews__weight {
      margin-bottom: 2em;
    }
  }
  
  .product-reviews-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 20px;
  }
  .product-price__price {
    width: fit-content;
    font-size: 20px;
    font-weight: 600 !important;
    color: #ffffff;
    background-color: #4BC6EF;
    padding: 6px 8px;
    border-radius: 7px;
    position: relative;
    margin-bottom: 2px !important;
  }

  .product-price__price::before, 
  .product-price__price::after {
    content: "";
    display: block;
    background-color: #ffffff;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    position: absolute;
    top: calc(50% - 4px);
  }

  .product-price__price::before {
    left: -4px;
  }

  .product-price__price::after {
    right: -4px;
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
      font-size: 16px; font-weight: 600;
      margin-bottom: 4px;
    }

    p {
      line-height: 120%;
    }
  }
</style>
