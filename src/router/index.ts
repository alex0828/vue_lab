import { createRouter, createWebHistory } from 'vue-router'
import routerJeffrey from './RouterJf'
import routerTim from './RouterTim'
import routerCombination from './combination'

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
    routerTim,
    routerCombination
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
