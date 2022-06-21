const routerJeffrey = {
    path: '/practiceCombination',
    name: 'practiceCombination',
    redirect:'/practiceCombination/menus',
    component: ()=> import('@/layer/PracticeCombination.vue'),
    children: [
        {
            path: 'menus',
            name: 'menus',
            component: () => import('@/components/combination/Menu.vue')
        },
        {
            path: 'counter',
            name: 'counter',
            component: () => import('@/components/combination/Counter.vue'),
        },
        {
            path: 'search',
            name: 'search',
            component: () => import('@/components/combination/Search.vue'),
        },
        {
            path: 'filterDemo',
            name: 'filterDemo',
            component: () => import('@/components/combination/FilterDemo.vue'),
        },
        {
            path: 'listDemo',
            name: 'listDemo',
            component: () => import('@/components/combination/ListDemo.vue'),
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('@/components/combination/Register.vue'),
        },
        {
            path: 'modalDemo',
            name: 'modalDemo',
            component: () => import('@/components/combination/ModalDemo.vue'),
        },
        {
            path: 'ajaxDemo',
            name: 'ajaxDemo',
            component: () => import('@/components/combination/AjaxDemo.vue'),
        },
        {
            path: 'carouselDemo',
            name: 'carouselDemo',
            component: () => import('@/components/combination/CarouselDemo.vue'),
        },
        {
            path: 'refDemo',
            name: 'refDemo',
            component: () => import('@/components/combination/RefDemo.vue'),
        },
        {
            path: 'counterWithState',
            name: 'counterWithState',
            component: () => import('@/components/combination/CounterWithState.vue'),
        },
    ]
}
export default routerJeffrey