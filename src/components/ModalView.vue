<script>
  export default {
    emits: ['closeModal'],
    props: {
      state: {
        type: Boolean,
      },
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      weight: {
        type: Number,
      },
      price: {
        type: Number,
      },
      reviews: {
        type: String,
      }
    },
    data() {
        return {
            state: this.state
        }
    },
    methods: {
        // open() {
        //     this.stateKey = !this.stateKey;
        // }
    }
};
</script>

<template>
  <div 
    v-if="state"
    class="modal"
    :class="state ? 'is-active' : ''"
    >
    <div class="modal-background" @click="$emit('closeModal')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <div class="modal-card-head__slider">
          <img src="../assets/images/assortment/1/1-1.jpg" alt="Название позиции">
        </div>
        <div class="modal-card-head__text">
          <div class="modal-card-head__right-block">
            <p class="modal-card-title">{{ name }}</p>
            <p class="madal-card-weight">{{ weight }} г</p>
            <div class="modal-card-price product-price price-action">
              <p class="product-price__price">{{ price }} ₽</p>
              <span class="product-price__subprice">Акция</span>
            </div>
            <a class="modal-card-head__link" href="/">Перейти в карточку товара</a>
          </div>
          <button class="delete" aria-label="close"></button>
        </div>
      </header>
      <section class="modal-card-body reviews">
        <div class="reviews__block">
          <h6>Описание</h6>
          <p>{{ reviews }}</p>
        </div>
        <div class="reviews__block">
          <h6>Состав</h6>
          <p>Свинина, говядина, курица или даже дичь.</p>
        </div>
        <div class="reviews__block">
          <h6>Годен</h6>
          <p>10 суток</p>
        </div>
        <div class="reviews__block">
          <h6>Вес/объем</h6>
          <p>250 - 500 г</p>
        </div>
        <div class="reviews__block">
          <h6>Условия хранения</h6>
          <p>Хранить при температуре от 2.0 °С до 6.0 °С</p>
        </div>
      </section>      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal {
    @media (max-width: 1023px) {
      display: none;
      opacity: 0;
    }
  }
  .modal-background {
    background-color: #00000030;
  }

  .modal-card {
    background-color: #ffffff;
    border: 3.45px solid #f1f0f5;
    border-radius: 20px;
    padding: 16px;
    gap: 20px;
    width: 700px;
    height: 529px;
  }

  .modal-card-head {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 330px 1fr;
    padding: 0px;
    box-shadow: none;
    gap: 20px;
    align-items: flex-start;
  }

  .modal-card-head__slider {
    max-width: 330px;
    border-radius: 8px;

      img {
        width: 100%;
        height: auto;
      }
  }

  .modal-card-head__text {
    display: grid;
    grid-template-columns: 1fr 30px;
  }

  .modal-card-title {
    font-size: 20px; font-weight: bold !important;
    color: #333333;
    margin-bottom: 16px;
  }

  .madal-card-weight {
    font-size: 14px; font-weight: normal;
    color: #7c7c7c;
    margin-bottom: 16px;
  }

  .modal-card-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 20px;
  }
  .product-price__price {
    width: fit-content;
    font-size: 20px; font-weight: 600 !important;
    color: #ffffff;
    background-color: #4BC6EF;
    padding: 6px 8px;
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
  .product-price__subprice {
    font-size: 12px; font-weight: 600 !important;
  }
  .price-action {
    .product-price__subprice {
      color: #4BC6EF;
    }
  }

  .modal-card-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
  }
  .reviews__block {
    h6 {
      font-size: 14px; font-weight: 600;
      margin-bottom: 4px;
      color: #333333;
      line-height: 110%;
    }
    p {
      font-size: 14px; font-weight: normal;
      color: #7c7c7c;
      line-height: 120%;
    }
  }
</style>