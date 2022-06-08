import { createRouter, createWebHistory } from 'vue-router'
// import Pratice from './pratice'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/HomeView')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/AboutView')
  },
  {
    path: '/pratice',
    name: 'MyPratice',
    component: () => import('@/components/praticies/MyPractice')
  },
  {
    path: '/pratice/project-1',
    name: 'ProjectOne',
    component: () => import('@/components/praticies/ProjectOne')
  },
  {
    path: '/pratice/counter',
    name: 'ProjectTwo',
    component: () => import('@/components/praticies/ProjectTwo')
  },
  {
    path: '/pratice/search',
    name: 'ProjectThree',
    component: () => import('@/components/praticies/ProjectThree')
  },
  {
    path: '/pratice/filterDemo',
    name: 'ProjectFour',
    component: () => import('@/components/praticies/ProjectFour')
  },
  {
    path: '/pratice/listDemo',
    name: 'ProjectFive',
    component: () => import('@/components/praticies/ProjectFive')
  },
  {
    path: '/pratice/project-6',
    name: 'ProjectSix',
    component: () => import('@/components/praticies/ProjectSix')
  },
  {
    path: '/pratice/modalDemo',
    name: 'ProjectSeven',
    component: () => import('@/components/praticies/ProjectSeven')
  },
  {
    path: '/pratice/register',
    name: 'ProjectEight',
    component: () => import('@/components/praticies/ProjectEight')
  },
  {
    path: '/pratice/ajaxDemo',
    name: 'ProjectNine',
    component: () => import('@/components/praticies/ProjectNine')
  },
  {
    path: '/pratice/project-10',
    name: 'ProjectTen',
    component: () => import('@/components/praticies/ProjectTen')
  },
  {
    path: '/pratice/project-11',
    name: 'ProjectEleven',
    component: () => import('@/components/praticies/ProjectEleven')
  },
  {
    path: '/pratice/project-12',
    name: 'ProjectTwelve',
    component: () => import('@/components/praticies/ProjectTwelve')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
