<script setup>
  import { store } from '../store.js'
</script>
<template>
    <!-- <RouterLink to="/" class="btn" @click="store.openPosition = false"> -->
    <RouterLink to="/" class="btn" @click="goToAssortment">
        <div class="logo logo-wrap">
            <div class="logo__heading"></div>
            <div class="logo__title">Мясные деликатесы</div>
            <div class="logo__subtitle">Вкусно и полезно!</div>
        </div>
    </RouterLink>
</template>

<script>
    export default {
        data() {
            return {
                store
            }
        },
        methods: {
            goToAssortment() {
                this.store.openPosition = false;
                this.$router.push('/assortment');
            }
        }
    }
</script>

<style lang="scss" scoped>
    a:hover, a:focus {
        text-decoration: none;
    }
</style>