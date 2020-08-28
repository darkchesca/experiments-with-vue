import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/experiments-home-view.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'experiments-home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/experiments-books-view.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
