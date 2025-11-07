// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestM from '../views/TestM.vue'
import TestK from '../views/TestK.vue'
import Calendar from '../views/Calendar.vue'
import Events from '../views/Events.vue'
import Header from '@/components/Header.vue'
import AktivitetsOversigt from '@/views/AktivitetsOversigt.vue'
import HeroSlideshow from '@/components/HeroSlideshow.vue'
import MiniCalendar from '@/components/MiniCalendar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/testpage',
      name: 'testm', 
      component: TestM,
    },
    { path: '/testing',
      name: 'testk', 
      component: TestK,
    },
    { path: '/calendar',
      name: 'calendar',
      component: Calendar, 
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/header',
      name: 'header',
      component: Header,
    },
    {
      path: '/aktivitetsoversigt',
      name: 'aktivitetsoversigt',
      component: AktivitetsOversigt,
    },
    {
      path: '/heroslide',
      name: 'heroslide',
      component: HeroSlideshow,
    },
    {
      path: '/minicalendar',
      name: 'minicalendar',
      component: MiniCalendar,
    }
  ],
})

export default router

