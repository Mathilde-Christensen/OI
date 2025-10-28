/*import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router*/

import { createRouter, createWebHistory } from 'vue-router'
import CalendarView from '../views/CalendarView.vue'
/*import AdminView from '../views/AdminView.vue'*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: CalendarView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
  ],
})

export default router
