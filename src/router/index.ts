import { createRouter, createWebHistory } from 'vue-router'
import routerJeffrey from './RouterJf'
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
    routerJeffrey,
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
