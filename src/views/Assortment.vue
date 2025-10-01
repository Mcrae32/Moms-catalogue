<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
  import Filter from '../components/Filter.vue'
  import ProductCard from '../components/ProductCard.vue'
  import { RouterView } from 'vue-router'
  import { store } from '../store.js'
</script>

<template>
  <template v-if="$route.path === '/assortment' || $route.path === '/'"> 
    <div class="content__filter">
      <Filter @filterChanged="updateFilter" />            
    </div>
    <div class="content__catalogue catalogue">
      <div class="catalogue__position-filter filter">
        <span class="filter__position">
          {{ filterCategory === 'all' ? 'Все' : filterCategory === 'sausages' ? 'Колбасы' : filterCategory === 'sosiski' ? 'Сосиски' : filterCategory === 'chips' ? 'Чипсы' : 'Другое' }}
        </span>
        <span class="filter__count">{{ filteredProducts.length }}</span>
      </div>          
      <div class="catalogue__wrap">
        <div 
          class="grid"
          :class="gridStateClass"
        >
          <div
            class="product-item"
            v-for="product in filteredProducts"
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
      winWidth: window.innerWidth,
      openPosition: store.openPosition,
      productAssortment: store.productAssortment,
      filterCategory: 'all',
    }
  },
  computed: {
    gridStateClass() {
      return this.winWidth <= 422 ? 'is-gap-2 is-col-min-6' : 'is-gap-3 is-col-min-8';
    },
    filteredProducts() {
      if (this.filterCategory === 'all') {
        return this.productAssortment;
      } else {
        return this.productAssortment.filter(product => product.typeProduction === this.filterCategory);
      }
    },    
  },   
  methods: {
    handleResize() {
      this.winWidth = widndow.innerWidth;
    },    
    updateFilter(category) {
      this.filterCategory = category;
    },
  },
  mounted() {
    window.onresize = () => {
      this.winWidth = window.innerWidth
    };    
  },
  components: {
    Filter,
    ProductCard
  }
}
</script>