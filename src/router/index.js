import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

const Login = () =>
  import(/* webpackChunkName: 'Login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'Reg' */ '../views/Reg.vue')
const Forget = () =>
  import(/* webpackChunkName: 'Forget' */ '../views/Forget.vue')
const Index = () =>
  import(/* webpackChunkName: 'index' */ '../views/channels/Index.vue')
const Template1 = () =>
  import(/* webpackChunkName: 'template1' */ '../views/channels/Template1.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        component: Index
      },
      {
        path: '/index/:catalog',
        name: 'catalog',
        component: Template1
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  }
]

const router = new VueRouter({
  routes
})

export default router
