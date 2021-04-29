import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'
import jwt from 'jsonwebtoken'
import moment from 'dayjs'

const Login = () => import(/* webpackChunkName: 'Login' */ '../views/Login.vue')
const Confirm = () => import(/* webpackChunkName: 'Confirm' */ '../views/Confirm.vue')
const Reset = () => import(/* webpackChunkName: 'Reset' */ '../views/Reset.vue')
const Reg = () => import(/* webpackChunkName: 'Reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'Forget' */ '../views/Forget.vue')
const Index = () => import(/* webpackChunkName: 'Index' */ '../views/channels/Index.vue')
const Template1 = () => import(/* webpackChunkName: 'template1' */ '../views/channels/Template1.vue')
const User = () => import(/* webpackChunkName: 'User' */ '../views/User.vue')
const Center = () => import(/* webpackChunkName: 'Center' */ '../views/Center.vue')
const UserCenter = () => import(/* webpackChunkName: 'UserCenter' */ '../components/user/Center.vue')
const UserSetings = () => import(/* webpackChunkName: 'UserSetings' */ '../components/user/Settings.vue')
const MyInfo = () => import(/* webpackChunkName: 'MyInfo' */ '../components/user/common/Myinfo.vue')
const AvatarUpload = () => import(/* webpackChunkName: 'AvatarUpload' */ '../components/user/common/AvatarUpload.vue')
const Password = () => import(/* webpackChunkName: 'Password' */ '../components/user/common/Password.vue')
const Account = () => import(/* webpackChunkName: 'Account' */ '../components/user/common/Account.vue')
const UserMessage = () => import(/* webpackChunkName: 'UserMessage' */ '../components/user/Msg.vue')
const UserPosts = () => import(/* webpackChunkName: 'UserPosts' */ '../components/user/Posts.vue')
const MyPost = () => import(/* webpackChunkName: 'MyPost' */ '../components/user/common/MyPost.vue')
const MyCollections = () => import(/* webpackChunkName: 'MyCollections' */ '../components/user/common/MyCollections.vue')
const UserOthers = () => import(/* webpackChunkName: 'UserOthers' */ '../components/user/Others.vue')
const Add = () => import(/* webpackChunkName: 'Add' */ '../components/contents/Add.vue')
const Detail = () => import(/* webpackChunkName: 'Add' */ '../components/contents/Detail.vue')
const NotFound = () => import(/* webpackChunkName: 'NotFound' */ '../views/404.vue')

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
  // 邮箱修改确认邮件
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
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
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
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
        path: '/set',
        name: 'Settings',
        component: UserSetings,
        children: [
          {
            path: '',
            name: 'MyInfo',
            component: MyInfo
          },
          {
            path: '/avatar',
            name: 'AvatarUpload',
            component: AvatarUpload
          },
          {
            path: '/password',
            name: 'Password',
            component: Password
          },
          {
            path: '/account',
            name: 'Account',
            component: Account
          }
        ]
      },
      {
        path: '/massage',
        name: 'Message',
        component: UserMessage
      },
      {
        path: '/posts',
        name: 'Posts',
        component: UserPosts,
        children: [
          {
            path: '',
            name: 'MyPost',
            component: MyPost
          },
          {
            path: '/collections',
            name: 'MyCollections',
            component: MyCollections
          }
        ]
      },
      {
        path: '/others',
        name: 'Others',
        component: UserOthers
      },
      {
        path: '/404',
        name: '404',
        component: NotFound
      },
      {
        path: '*',
        redirect: '/404'
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
