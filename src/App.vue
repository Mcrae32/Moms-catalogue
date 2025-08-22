<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
  import LogoDesctop from './components/LogoDesctop.vue'
  import NavigationDesctop from './components/NavigationDesctop.vue'
  import NavigationTablet from './components/NavigationTablet.vue'
  import Filter from './components/Filter.vue'
  import ProductCard from './components/ProductCard.vue'
  import LogoMobile from './components/LogoMobile.vue'  
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <div class="wrapper-page page">
    <div class="sidebar page__left-block">
      <div class="sidebar__navigation">
        <LogoDesctop />
        <NavigationDesctop />
      </div>
    </div>
    <div class="page__right-block content">
      <LogoMobile />
      <div class="greetings">
        <h1 class="content__title">Приветствие из нескольких слов или одной фразы!</h1>
        <p class="content__subtitle">Подпись под приветствием</p>
      </div>

      <div class="content">
        <div class="content__filter">
          <Filter />            
        </div>
        <div class="content__catalogue catalogue">
          <div class="catalogue__position-filter filter">
            <span class="filter__position">Все</span><span class="filter__count">15</span>
          </div>          
          <div class="catalogue__wrap">
            <div 
              class="grid"
              :class="gridStateClass"
            >
              <ProductCard 
                v-for="(product, idx) in productAssortment"
                :id="idx"
                :nameProduct="product.nameProduct"
                :weight="product.weight"
                :cardReviews="product.cardReviews"
                :cardPrice="product.cardPrice"
                :cardImage="product.cardImage"
                :modalReviews="product.modalReviews"
                :modalState="product.modalState"
              />              
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavigationTablet />
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
          modalState: true,
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
    },
    // modalOpen() {
    //   openModal
    // }
  },
  mounted() {
    window.onresize = () => {
      this.winWidth = window.innerWidth
    }
  }
}
</script>

<style scoped>

</style>
