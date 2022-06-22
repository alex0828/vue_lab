const routerJeffrey = {
  path: '/practiceCombination',
  name: 'practiceCombination',
  redirect: '/practiceCombination/menus',
  component: () => import('@/layer/PracticeCombination.vue'),
  children: [
    {
      path: 'menus',
      name: 'menuscom',
      component: () => import('@/components/combination/Menu.vue')
    },
    {
      path: 'counter',
      name: 'counter',
      component: () => import('@/components/combination/CounterNumber.vue')
    },
    {
      path: 'search',
      name: 'combineSearch',
      component: () => import('@/components/combination/Search.vue')
    },
    {
      path: 'filterDemo',
      name: 'combineFilterDemo',
      component: () => import('@/components/combination/FilterDemo.vue')
    },
    {
      path: 'listDemo',
      name: 'combineListDemo',
      component: () => import('@/components/combination/ListDemo.vue')
    },
    {
      path: 'register',
      name: 'combineRegister',
      component: () => import('@/components/combination/Register.vue')
    },
    {
      path: 'modalDemo',
      name: 'combineModalDemo',
      component: () => import('@/components/combination/ModalDemo.vue')
    },
    {
      path: 'ajaxDemo',
      name: 'combineAjaxDemo',
      component: () => import('@/components/combination/AjaxDemo.vue')
    },
    {
      path: 'carouselDemo',
      name: 'combineCarouselDemo',
      component: () => import('@/components/combination/CarouselDemo.vue')
    },
    {
      path: 'refDemo',
      name: 'combineRefDemo',
      component: () => import('@/components/combination/RefDemo.vue')
    },
    {
      path: 'counterWithState',
      name: 'combineCounterWithState',
      component: () => import('@/components/combination/CounterWithState.vue')
    }
  ]
}
export default routerJeffrey
