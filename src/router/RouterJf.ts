const routerJeffrey = {
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
            name: 'JFcounter',
            component: () => import('@/components/branchJf/Counter.vue'),
        },
        {
            path: 'search',
            name: 'JFsearch',
            component: () => import('@/components/branchJf/Search.vue'),
        },
        {
            path: 'filterDemo',
            name: 'JFfilterDemo',
            component: () => import('@/components/branchJf/FilterDemo.vue'),
        },
        {
            path: 'listDemo',
            name: 'JFlistDemo',
            component: () => import('@/components/branchJf/ListDemo.vue'),
        },
        {
            path: 'register',
            name: 'JFregister',
            component: () => import('@/components/branchJf/Register.vue'),
        },
        {
            path: 'modalDemo',
            name: 'JFmodalDemo',
            component: () => import('@/components/branchJf/ModalDemo.vue'),
        },
        {
            path: 'ajaxDemo',
            name: 'JFajaxDemo',
            component: () => import('@/components/branchJf/AjaxDemo.vue'),
        },
        {
            path: 'carouselDemo',
            name: 'JFcarouselDemo',
            component: () => import('@/components/branchJf/CarouselDemo.vue'),
        },
        {
            path: 'refDemo',
            name: 'JFrefDemo',
            component: () => import('@/components/branchJf/RefDemo.vue'),
        },
        {
            path: 'counterWithState',
            name: 'JFcounterWithState',
            component: () => import('@/components/branchJf/CounterWithState.vue'),
        },
    ]
}
export default routerJeffrey