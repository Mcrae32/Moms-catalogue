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
          // path: ':assortmentId?',
          path: '/assortment0',
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
      component: () => import('../views/!AboutView.vue'),
    },
  ],
})

export default router
