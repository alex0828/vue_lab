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
            component: () => import('@/components/combinatoin/Counter.vue'),
        },
        {
            path: 'search',
            name: 'search',
            component: () => import('@/components/combinatoin/Search.vue'),
        },
        {
            path: 'filterDemo',
            name: 'filterDemo',
            component: () => import('@/components/combinatoin/FilterDemo.vue'),
        },
        {
            path: 'listDemo',
            name: 'listDemo',
            component: () => import('@/components/combinatoin/ListDemo.vue'),
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('@/components/combinatoin/Register.vue'),
        },
        {
            path: 'modalDemo',
            name: 'modalDemo',
            component: () => import('@/components/combinatoin/ModalDemo.vue'),
        },
        {
            path: 'ajaxDemo',
            name: 'ajaxDemo',
            component: () => import('@/components/combinatoin/AjaxDemo.vue'),
        },
        {
            path: 'carouselDemo',
            name: 'carouselDemo',
            component: () => import('@/components/combinatoin/CarouselDemo.vue'),
        },
        {
            path: 'refDemo',
            name: 'refDemo',
            component: () => import('@/components/combinatoin/RefDemo.vue'),
        },
        {
            path: 'counterWithState',
            name: 'counterWithState',
            component: () => import('@/components/combinatoin/CounterWithState.vue'),
        },
    ]
}
export default routerJeffrey