import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../views/AboutView.vue')
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/bloques',
      name: 'Bloques',
      component: () => import('../views/BloquesView.vue')
    },
    {
      path: '/users/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/users/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router