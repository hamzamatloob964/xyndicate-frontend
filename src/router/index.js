import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/'

import Home from '../views/Home.vue'
import Job from '../views/Job.vue'
import Event from '../views/Event.vue'
import PersonalProfile from '../views/PersonalProfile.vue'
import Company from '../views/Company.vue'
import Newsfeed from '../views/Newsfeed.vue'
import CreateArticle from '../views/CreateArticle.vue'
import CreateEvent from '../views/CreateEvent.vue'
import PostJob from '../views/postJob/PostJob.vue'
import JobCreation from '../views/postJob/JobCreation.vue'
import EventCreation from '../views/postEvent/EventCreation.vue'
import CreateSyndicate from '../views/syndicate/CreateSyndicate.vue'
import JobListing from '../views/JobListing.vue'
import EventListing from '../views/EventListing.vue'
import ErrorPage from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/job/:id',
    name: 'job',
    component: Job
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobListing
  },
  {
    path: '/events',
    name: 'events',
    component: EventListing
  },
  {
    path: '/event/:id',
    name: 'event',
    component: Event
  },
  {
    path: '/profile',
    name: 'personal-profile',
    component: PersonalProfile,
    // beforeEnter: ifAuthenticated
  },
  {
    path: '/company/:id',
    name: 'company',
    component: Company
  },
  {
    path: '/feed',
    name: 'feed',
    component: Newsfeed
  },
  {
    path: '/post-job',
    name: 'postjob',
    component: PostJob
  },
  {
    path: '/job-creation',
    name: 'jobcreation',
    component: JobCreation
  },
  {
    path: '/event-creation',
    name: 'eventcreation',
    component: EventCreation
  },
  {
    path: '/create-article',
    name: 'createarticle',
    component: CreateArticle
  },
  {
    path: '/create-event',
    name: 'createevent',
    component: CreateEvent
  },
  {
    path: '/create-syndicate',
    name: 'createsyndicate',
    component: CreateSyndicate
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// function ifAuthenticated(to, from, next) {
//   console.log('check',store.getters['userStore/isAuthenticated']);

//   !store.getters['userStore/isAuthenticated'] ?
//   next('/') :
//   next();
// }


router.beforeEach((to, from, next) => {

  if(!store.state.authChecked) {
    next();
    return;
  }

  if(to.path !== '/') {
    !store.getters['userStore/isAuthenticated'] ?
    next('/') :
    next();
  }
  else {
    !store.getters['userStore/isAuthenticated'] ?
    next() :
    next('/profile');
  }
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {})
};

export default router
