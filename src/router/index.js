import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'
import jwt from 'jsonwebtoken'
import moment from 'moment'

const Login = () => import(/* webpackChunkName: 'Login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'Reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'Forget' */ '../views/Forget.vue')
const Index = () => import(/* webpackChunkName: 'index' */ '../views/channels/Index.vue')
const Template1 = () => import(/* webpackChunkName: 'template1' */ '../views/channels/Template1.vue')
const User = () => import(/* webpackChunkName: 'index' */ '../views/User.vue')
const Center = () => import(/* webpackChunkName: 'index' */ '../views/Center.vue')
const UserCenter = () => import(/* webpackChunkName: 'index' */ '../components/user/Center.vue')
const UserSetings = () => import(/* webpackChunkName: 'index' */ '../components/user/Settings.vue')
const MyInfo = () => import(/* webpackChunkName: 'index' */ '../components/user/common/Myinfo.vue')
const AvatarUpload = () => import(/* webpackChunkName: 'index' */ '../components/user/common/AvatarUpload.vue')
const Password = () => import(/* webpackChunkName: 'index' */ '../components/user/common/Password.vue')
const Account = () => import(/* webpackChunkName: 'index' */ '../components/user/common/Account.vue')
const UserMessage = () => import(/* webpackChunkName: 'index' */ '../components/user/Msg.vue')
const UserPosts = () => import(/* webpackChunkName: 'index' */ '../components/user/Posts.vue')
const MyPost = () => import(/* webpackChunkName: 'index' */ '../components/user/common/MyPost.vue')
const MyCollections = () => import(/* webpackChunkName: 'index' */ '../components/user/common/MyCollections.vue')
const UserOthers = () => import(/* webpackChunkName: 'index' */ '../components/user/Others.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Index',
        component: Index
      },
      {
        path: '/index/:catalog',
        name: 'Catalog',
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
  },
  {
    path: '/user/:id',
    props: true,
    name: 'User',
    component: User
  },
  {
    path: '/center',
    component: Center,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '',
        name: 'Center',
        component: UserCenter
      },
      {
        path: 'set',
        name: 'Settings',
        component: UserSetings,
        children: [
          {
            path: '',
            name: 'MyInfo',
            component: MyInfo
          },
          {
            path: 'avatar',
            name: 'AvatarUpload',
            component: AvatarUpload
          },
          {
            path: 'password',
            name: 'Password',
            component: Password
          },
          {
            path: 'account',
            name: 'Account',
            component: Account
          }
        ]
      },
      {
        path: 'massage',
        name: 'Message',
        component: UserMessage
      },
      {
        path: 'posts',
        name: 'Posts',
        component: UserPosts,
        children: [
          {
            path: '',
            name: 'MyPost',
            component: MyPost
          },
          {
            path: 'collections',
            name: 'MyCollections',
            component: MyCollections
          }
        ]
      },
      {
        path: 'others',
        name: 'Others',
        component: UserOthers
      }
    ]
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'layui-this',
  routes
})

// 全局路由守卫，校验登录信息
router.beforeEach((to, from, next) => {
  // 同步登录信息
  const token = localStorage.getItem('token')
  const userInfo = localStorage.getItem('userInfo')
  if (token !== '' && token !== null) {
    const payload = jwt.decode(token)
    // 判断token是否过期
    if (moment().isBefore(moment(payload.exp * 1000))) {
      store.commit('setToken', token)
      store.commit('setUserInfo', userInfo)
      store.commit('setIsLogin', true)
    } else {
      localStorage.clear()
    }
  }

  // 判断是否需要登录判断
  if (to.matched.some(record => record.meta.requireAuth)) {
    const isLogin = store.state.isLogin
    // 登录判断
    if (isLogin) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
