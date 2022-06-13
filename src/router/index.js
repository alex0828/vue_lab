import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('../views/PracticeView.vue')
  },
  {
    path: '/counter',
    name: 'Item2View',
    component: () => import('../views/Item2View.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router