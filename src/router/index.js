/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/practice',
    name: 'practice',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/PracticeMain.vue')
      }
  },
  {
    path: '/counter',
    name: 'counter',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/counterPage.vue')
      }
  },
  {
    path: '/search',
    name: 'search',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/search.vue')
      }
  },
  {
    path: '/filterDemo',
    name: 'filterDemo',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/filterDemo.vue')
      }
  },
  {
    path: '/listDemo',
    name: 'listDemo',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/ListDemo.vue')
      }
  },
  {
    path: '/modalDemo',
    name: 'modalDemo',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/ModalDemo.vue')
      }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/RegisterPage.vue')
      }
  },
  {
    path: '/ajaxDemo',
    name: 'ajaxDemo',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/AjaxDemo.vue')
      }
  },
  {
    path: '/refDemo',
    name: 'refDemo',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/RefDemo.vue')
      }
  },
  {
    path: '/carouselDemo',
    name: 'carouselDemo',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/CarouselDemo.vue')
      }
  },
  {
    path: '/counterWithState',
    name: 'counterWithState',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/CounterWithState.vue')
      }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
