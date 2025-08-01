<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
  import LogoDesctop from './components/LogoDesctop.vue'
  import NavigationDesctop from './components/NavigationDesctop.vue'
  import NavigationTablet from './components/NavigationTablet.vue'
  import Filter from './components/Filter.vue'
  import ProductCard from './components/ProductCard.vue'
  import LogoMobile from './components/LogoMobile.vue'
  import ModalView from './components/ModalView.vue'
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
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavigationTablet />
  </div>

  <ModalView />
</template>

<script>
export default {
  data() {
    return {
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
    }
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
