import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    component: () => import('../views/Catalog.vue'),
    name: 'catalog',
  },
  {
    name: "edit",
    path: "/edit/:id",
    component: () => import('../views/Edit.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
