<script setup>
  import { store } from './store.js'
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
    data() {
      return {
        store        
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
