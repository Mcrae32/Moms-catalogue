<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
  import Filter from '../components/Filter.vue'
  import ProductCard from '../components/ProductCard.vue'
  import { RouterView } from 'vue-router'
  import { store } from '../store.js'
</script>

<template>
  <template v-if="!store.openPosition">
  
    <div class="content__filter">
      <Filter />            
    </div>
    <div class="content__catalogue catalogue">
      <div class="catalogue__position-filter filter">
        <span class="filter__position">Все</span>
        <span class="filter__count">{{ productAssortment1.length }}</span>
      </div>          
      <div class="catalogue__wrap">
        <div 
          class="grid"
          :class="gridStateClass"
        >
          <div
            class="product-item"
            v-for="product in productAssortment1"
            :key="product.id"
          >
            <product-card
              :id="product.id"                
              :nameProduct="product.nameProduct"
              :weight="product.weight"
              :cardReviews="product.cardReviews"
              :cardPrice="product.cardPrice"
              :cardImage="product.cardImage"
              :modalState="product.modalState"                            
            ></product-card>
          </div>
        </div>
      </div>
    </div>
  </template>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      openItem: false,
      winWidth: window.innerWidth,
      openPosition: store.openPosition,
      productAssortment1: store.productAssortment,
    }
  },
  computed: {
    gridStateClass() {
      return this.winWidth <= 422 ? 'is-gap-2 is-col-min-6' : 'is-gap-3 is-col-min-8';
    }
  },   
  methods: {
    handleResize() {
      this.winWidth = widndow.innerWidth;
    },
    openCard() {
      this.openItem = true;
    },
    closeCard() {
      this.openItem = false;
    }
  },
  mounted() {
    window.onresize = () => {
      this.winWidth = window.innerWidth
    }
    // console.log("openPosition from store - ", this.openPosition)
  },
  components: {
    Filter,
    ProductCard
  }
}
</script>