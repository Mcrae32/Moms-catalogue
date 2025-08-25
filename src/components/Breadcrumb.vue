<script setup>
    
</script>

<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="">Главная</a></li>
            <li><a href="">Ассортимент</a></li>
            <li class="is-active"><a href="">Название позиции</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
  components: {
    
  },
}
</script>

<style lang="scss" scoped>
    .breadcrumb {
        ul {
            margin-inline-start: 0;

            li {
                margin-top: 0;

                a {
                    font-size: 1em;
                    color: #007ACC;
                }

                &.is-active a {
                    color: #7c7c7c;
                }
            }
        }
    }
</style>
