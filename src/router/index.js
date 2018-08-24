import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* App */
// import App from '../App'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index') },
  { path: '/404', component: () => import('@/views/errorPage/404') },
  { path: '/', component: () => import('@/views/home/index') },
  { path: '/productList', component: () => import('@/views/productList/productList') },
  { path: '*', name: '404', redirect: '/404' },
  { path: '/componDemo', component: () => import('@/components/componDemo/index') },
  { path: '/componDemo/button', component: () => import('@/components/componDemo/Button') },
  { path: '/componDemo/selectNumber', component: () => import('@/components/componDemo/SelectNumber') },
  { path: '/home/overview', component: () => import('@/views/home/overview') },
  { path: '/home/approval', component: () => import('@/views/home/approval') },
  { path: '/home/work', component: () => import('@/views/home/work') },
  { path: '/home/message', component: () => import('@/views/home/message') },
  { path: '/home/mine', component: () => import('@/views/home/mine') }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
