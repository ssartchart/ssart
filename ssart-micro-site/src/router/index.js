import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Documentation from '../views/Documentation.vue'
import Licensed from '../views/Licensed.vue'
import Contributing from '../views/Contributing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/licensed',
    name: 'Licensed',
    component: Licensed
  },
  {
    path: '/contributing',
    name: 'Contributing',
    component: Contributing
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/document',
    name: 'Documentation',
    component: Documentation
  },
  {
    path: '/document/bubble-chart',
    name: 'BubbleChartDoc',
    component: () => import(/* webpackChunkName: "BubbleChartDoc" */ '../views/documentations/BubbleChartDoc.vue')
  },
  {
    path: '/chart-wizard',
    name: 'ChartWizard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChartWizard.vue')
  },
  // {
  //   path: '/code-generator',
  //   name: 'CodeGenerator',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/CodeGenerator.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
