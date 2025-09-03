<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
  import Filter from '../components/Filter.vue'
  import ProductCard from '../components/ProductCard.vue'
  import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- <main>
    <TheWelcome />
  </main> -->
  <div class="content__filter">
    <Filter />            
  </div>
  <div class="content__catalogue catalogue">
    <div class="catalogue__position-filter filter">
      <span class="filter__position">Все</span><span class="filter__count">{{ productAssortment.length }}</span>
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
          <RouterLink :to="'/assortment' + product.id">
          <!-- <RouterLink :to="/assortment"> -->
            <product-card
              :id="product.id"                
              :nameProduct="product.nameProduct"
              :weight="product.weight"
              :cardReviews="product.cardReviews"
              :cardPrice="product.cardPrice"
              :cardImage="product.cardImage"
              :modalState="product.modalState"                      
            ></product-card>
          </RouterLink>
        </div>
        
          <!-- <product-card
            v-for="product in productAssortment"
            :key="product.id"
            :id="product.id"                
            :nameProduct="product.nameProduct"
            :weight="product.weight"
            :cardReviews="product.cardReviews"
            :cardPrice="product.cardPrice"
            :cardImage="product.cardImage"
            :modalState="product.modalState"                      
          ></product-card> -->
              
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winWidth: window.innerWidth,
      productAssortment: [
        {
          id: 0,
          nameProduct: 'Продукт копчено-варёный из свинины',
          weight: 250,
          cardReviews: 'Описание карточки, состава',
          cardPrice: 2000,
          cardImage: '/src/assets/images/assortment/1.png',
          modalReviews: 'Это настоящая гастрономическая гордость, воплощение многовековых традиций и современных технологий. Каждый срез колбасы, будь то нежная докторская, пикантная сервелат или копчёная салями, – это маленькое произведение искусства.',
          modalState: false,
        },
        {
          id: 1,
          nameProduct: 'Свинина прессованная. Продукт варено-копченый из свинины',
          weight: 350,
          cardReviews: 'Описание карточки и состава',
          cardPrice: 2500,
          cardImage: '/src/assets/images/assortment/2.png',
          modalReviews: '',
          modalState: false,
        },
        {
          id: 2,
          nameProduct: 'Буженина. Продукт копчено-запеченая из свинины',
          weight: 350,
          cardReviews: 'Описание карточки и состава',
          cardPrice: 2500,
          cardImage: '/src/assets/images/assortment/1.png',
          modalReviews: '',
          modalState: false,
        },        
      ]
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