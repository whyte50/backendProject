import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import jwt from 'jsonwebtoken'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: async (to, from, next) => {
        const token = sessionStorage.getItem('token')
        if(token) {
          jwt.verify(token, store.state.userDetails.key)
          console.log('sucess')
          next()
        } else {
          next('/login')
        }
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
