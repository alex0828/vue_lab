import { createRouter, createWebHistory } from 'vue-router'
import routerTim from './RouterTim'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/layer/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/layer/About.vue')
    },
    routerTim
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
