<script setup>
  import { RouterView } from 'vue-router'
  import LogoDesctop from './components/LogoDesctop.vue'
  import NavigationDesctop from './components/NavigationDesctop.vue'
  import NavigationTablet from './components/NavigationTablet.vue'
  import LogoMobile from './components/LogoMobile.vue'  
</script>

<template>
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
        <RouterView />
      </div>
    </div>
    <NavigationTablet />
  </div>  
</template>
<script>
  export default {
    provide(){
      return {
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
        ],
        // openItem: false,
      }
    },
    data() {
      return {
        // openPageProduct: false,        
      }
    },
    methods: {
      openCard() {
        // this.openPageProduct = true;
      }
    },
    components: {
      LogoDesctop,
      NavigationDesctop,
      NavigationTablet,
      LogoMobile
    },
  }
</script>
<style scoped>

</style>
