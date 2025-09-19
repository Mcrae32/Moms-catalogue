<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
  import Filter from '../components/Filter.vue'
  import ProductCard from '../components/ProductCard.vue'
  // import { RouterView } from 'vue-router'
</script>

<template>
  <template v-if="!openItem">
  <!-- <template> -->
    <div class="content__filter">
      <Filter />            
    </div>
    <div class="content__catalogue catalogue">
      <div class="catalogue__position-filter filter">
        <span class="filter__position">Все</span>
        <span class="filter__count">{{ productAssortment.length }}</span>
      </div>          
      <div class="catalogue__wrap">
        <div 
          class="grid"
          :class="gridStateClass"
        >
          <div
            class="product-item"
            v-for="product in productAssortment"
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
              @open-card="openCard"                  
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
  // inject: ['productAssortment', 'openItem'],
  inject: ['productAssortment'],
  data() {
    return {
      openItem: false,
      winWidth: window.innerWidth,
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
  },
  components: {
    Filter,
    ProductCard
  }
}
</script>