import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/Home.vue'
import DefaultLayout from '@/layouts/default.vue'

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/download',
          name: 'download',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/pages/Download.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/pages/Contact.vue')
        }
      ]
    }
  ]
})

export default router
