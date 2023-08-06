import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'Login' },
      component: LoginView
    },
    {
      path: '/bankableChallenge/',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router
