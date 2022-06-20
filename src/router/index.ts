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
        redirect:'/practiceJeffrey/menus',
        component: ()=> import('@/layer/practiceJeffrey.vue'),
        children: [
            {
                path: 'menus',
                name: 'menus',
                component: () => import('@/components/branchJf/Menu.vue'),
            },
            {
                path: 'counter',
                name: 'counter',
                component: () => import('@/components/branchJf/Counter.vue'),
            },
            {
                path: 'search',
                name: 'search',
                component: () => import('@/components/branchJf/Search.vue'),
            },
            {
                path: 'filterDemo',
                name: 'filterDemo',
                component: () => import('@/components/branchJf/FilterDemo.vue'),
            },
            {
                path: 'listDemo',
                name: 'listDemo',
                component: () => import('@/components/branchJf/ListDemo.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('@/components/branchJf/Register.vue'),
            },
            {
                path: 'modalDemo',
                name: 'modalDemo',
                component: () => import('@/components/branchJf/ModalDemo.vue'),
            },
            {
                path: 'ajaxDemo',
                name: 'ajaxDemo',
                component: () => import('@/components/branchJf/AjaxDemo.vue'),
            },
            {
                path: 'carouselDemo',
                name: 'carouselDemo',
                component: () => import('@/components/branchJf/CarouselDemo.vue'),
            },
            {
                path: 'refDemo',
                name: 'refDemo',
                component: () => import('@/components/branchJf/RefDemo.vue'),
            },
            {
                path: 'counterWithState',
                name: 'counterWithState',
                component: () => import('@/components/branchJf/CounterWithState.vue'),
            },
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
