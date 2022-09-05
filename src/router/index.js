import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from '../views/DataView.vue'
import ConditionView from '../views/ConditionView.vue'
import ParamsView from '../views/ParamsView.vue'
import ParamDetails from '../views/ParamDetails.vue'
import ChatApp from '../views/ChatApp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/data-binding',
    name: 'DataView',
    component: DataView
  },
  {
    path: '/conditional',
    name: 'ConditionView',
    component: ConditionView
  },
  {
    path: '/route-params',
    name: 'ParamsView',
    component: ParamsView
  },
  {
    path: '/params/:id',
    name: 'ParamDetails',
    component: ParamDetails,
    props:true
  },
  {
    path: '/chat-app',
    name: 'ChatApp',
    component: ChatApp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
