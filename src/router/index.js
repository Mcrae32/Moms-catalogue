import { createRouter, createWebHistory } from 'vue-router'
import Assortment from '@/views/Assortment.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/assortment',
      name: 'assortment',
      component: Assortment,
      alias: '/',
      children: [
        {
          path: ':productId?',
          component: ProductView,     
          props: true,
        }
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue'),
    },
    // {
    //   path: '/assortment0',
    //   name: 'assortment0',
    //   props: true,
    //   component: ProductView,
    // },
  ],
})

export default router
