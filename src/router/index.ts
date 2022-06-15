import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/layer/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/layer/About.vue')
    },
    {
        path: '/Another',
        name: 'Another',
        component: () => import('@/layer/Another.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
