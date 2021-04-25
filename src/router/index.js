import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // ###controller? dispatcher servlet 같은 역할 임.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/xxx',
    name: 'XXX',
    // ###controller? dispatcher servlet 같은 역할 임.
    component: () => import(/* webpackChunkName: "about" */ '../views/xxx.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
