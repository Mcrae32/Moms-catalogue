<script setup>
import { useRoute } from 'vue-router';
</script>

<!-- <template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="">Главная</a></li>
            <li><a href="">Ассортимент</a></li>
            <li class="is-active"><a href="">Название позиции</a></li>
        </ul>
    </nav>
</template> -->

<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <template
                v-for="(crumb, index) in breadcrumbs" 
                :key="index"
            >
                <li v-if="index < breadcrumbs.length - 1">
                    <router-link 
                        :to="crumb.path"                    
                    >{{ crumb.name }}</router-link>
                </li>
            </template>
            <li class="is-active"><a href="">{{ nameProduct }}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['nameProduct'],
    computed: {
        breadcrumbs() {
            const route = useRoute();
            const matcheRoutes = route.matched;
            return matcheRoutes.map((route) => ({
                name: route.meta.breadcrumb || route.name,
                path: route.path,
            })); 
        }
    },
    // mounted() {
    //     console.log(this.breadcrumbs);
    // }
}
</script>

<style lang="scss" scoped>
    .breadcrumb {
        margin-bottom: 24px;
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
