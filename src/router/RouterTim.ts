
const routerTim = {
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
}

export default routerTim