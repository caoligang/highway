import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import machineInfo from "@/views/machineInfo.vue"
import projectdata from "@/views/projectdata.vue"
import data from "@/views/data.vue"
import completedata from "@/views/completedata.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
      path: '/machineInfo',
      name: 'machineInfo',
      component: () => import('@/views/machineInfo.vue')
    },
{
  path:'/projectdata',
    name:'projectdata',
    component:  () => import('@/views/projectdata.vue')
},
      {
        path:'/data',
        name:'data',
        component:()=>import('@/views/data.vue')
      },
      {
        path:'/completedata',
        name:'completedata',
        component:()=>import('@/views/completedata.vue')
      },
]
},

// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (About.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue')
// },
// {
//   path:'/hometest',
//   name: 'hometest',
//   component:()=>import('@/views/homtest.vue')
// }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

})

export default router
