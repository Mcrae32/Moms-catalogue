<script setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
<template>
  <Breadcrumb />
  <div class="content__product-reviews product-reviews">
    <div class="product-reviews__column">
      <h1>Название позиции, 250 - 500 г</h1>
      <p class="product-reviews__weight">250 - 500 г</p>
      <div class="product-reviews-price product-price price-action">
        <p class="product-price__price">2500 ₽</p>
        <span class="product-reviews__subprice">Акция</span>
      </div>
      <div class="product-reviews__text product-text">
        <div class="product-text__block">
          <h3>Описание</h3>
          <p>Это настоящая гастрономическая гордость, воплощение многовековых традиций и современных технологий. Каждый срез колбасы, будь то нежная докторская, пикантная сервелат или копчёная салями, – это маленькое произведение искусства.</p>
        </div>
        <div class="product-text__block">
          <h3>Состав</h3>
          <p>Свинина, говядина, курица или даже дичь.</p>
        </div>
        <div class="product-text__block">
          <h3>Годен</h3>
          <p>10 суток</p>
        </div>
        <div class="product-text__block">
          <h3>Вес/объем</h3>
          <p>250 - 500 г</p>
        </div>
        <div class="product-text__block">
          <h3>Условия хранения</h3>
          <p>Хранить при температуре от 2.0 °С до 6.0 °С</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Breadcrumb,
  },
}
</script>
<style lang="scss" scoped>
  .content__product-reviews {
    .content h1 {
      font-size: 2em;
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
  
  .product-reviews__text {
  }
  .product-text {
  }
  .product-text__block {
    h3 {
      font-size: 16px; font-weight: 600;
    }
  }
</style>
