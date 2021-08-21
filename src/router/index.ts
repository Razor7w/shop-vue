import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// Import Store
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    name: 'not-found',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "accesos" */ '@/views/Home.vue'),
    meta: { requiresAuth: false, layout: 'default', access: '1' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let denyAccess = false
    for (const rol in store.getters['SessionModule/getRoles']) {
      if (to.meta.access === rol && store.getters['SessionModule/getRoles'][rol] === 0) {
        denyAccess = true
      }
    }
    if (!store.getters['SessionModule/isAuth'] || denyAccess) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
