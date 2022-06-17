import { createRouter, createWebHistory } from 'vue-router'
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
    {
        path: '/practiceJeffrey',
        name: 'practiceJeffrey',
        redirect:'/practiceJeffrey/menu',
        component: ()=> import('@/layer/practiceJeffrey.vue'),
        children: [
            {
                path: 'menu',
                name: 'jeffreyMenus',
                component: () => import('@/components/branchJf/MenuJf.vue'),
            },
            {
                path: 'count',
                name: 'countOneJf',
                component: () => import('@/components/branchJf/CountOneJf.vue'),
            }
        ]
    },
    {
        path: '/practiceTim',
        name: 'practiceTim',
        component: () => import('@/layer/PracticeTim.vue'),
        children: [
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
