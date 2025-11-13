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
import SectionDarkBlue from '@/components/SectionDarkBlue.vue'
import FindActivity from '@/components/FindActivity.vue'
import OpeningHours from '@/components/OpeningHours.vue'

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
    },
    {
      path: '/sectiondarkblue',
      name: 'sectiondarkblue',
      component: SectionDarkBlue,
    },
    {
      path:'/findactivity',
      name: 'findactivity',
      component: FindActivity,
    },
    {
      path: '/openinghours',
      name: 'openinghours',
      component: OpeningHours,
    },
    {
      path: '/activities/movetraining',
      name: 'movetraining',
      component: () => import('@/views/MoveTraining.vue'),
    },
    {
      path: '/activities/ballandteam',
      name: 'ballandteam',
      component: () => import('@/views/BallAndTeam.vue'),
    },
    {
      path: '/activities/outdoornature',
      name: 'outdoornature',
      component: () => import('@/views/OutdoorNature.vue'),
    },
    {
      path: '/activities/creativityculture',
      name: 'creativityculture',
      component: () => import('@/views/CreativityCulture.vue'),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // hvis man klikker "tilbage"/"frem" i browseren
    if (savedPosition) {
      return savedPosition
    }
    // ellers: altid top
    return { left: 0, top: 0 }
  },
})

export default router

