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
            {
                path: 'FilterDemo',
                name: 'FilterDemo',
                component: () => import('@/components/branchJf/FilterDemo.vue'),
            },
            {
                path: 'ListDemo',
                name: 'ListDemo',
                component: () => import('@/components/branchJf/ListDemo.vue'),
            },
        ]
    },
    {
        path: '/practiceTim',
        name: 'practiceTim',
        redirect:'/practiceTim/timMenu',
        component: () => import('@/layer/PracticeTim.vue'),
        children: [
            {
                path: 'timMenu',
                name: 'timMenu',
                component: () => import('@/components/branchTim/Menu.vue'),
            },
            {
                path: 'timCounter',
                name: 'timCounter',
                component: () => import('@/components/branchTim/Counter.vue'),
            },
            {
                path: 'timSearch',
                name: 'timSearch',
                component: () => import('@/components/branchTim/Search.vue'),
            },
            {
                path: 'timFilterDemo',
                name: 'timFilterDemo',
                component: () => import('@/components/branchTim/FilterDemo.vue'),
            },
            {
                path: 'timListDemo',
                name: 'timListDemo',
                component: () => import('@/components/branchTim/ListDemo.vue'),
            },
            {
                path: 'timModalDemo',
                name: 'timModalDemo',
                component: () => import('@/components/branchTim/ModalDemo.vue'),
            },
            {
                path: 'timRegister',
                name: 'timRegister',
                component: () => import('@/components/branchTim/Register.vue'),
            },
            {
                path: 'timAjaxDemo',
                name: 'timAjaxDemo',
                component: () => import('@/components/branchTim/AjaxDemo.vue'),
            },
            {
                path: 'timRefDemo',
                name: 'timRefDemo',
                component: () => import('@/components/branchTim/RefDemo.vue'),
            },
            {
                path: 'timCounterWithState',
                name: 'timCounterWithState',
                component: () => import('@/components/branchTim/CounterWithState.vue'),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
