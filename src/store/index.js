import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录验证码的sid
    sid: '',
    userInfo: {},
    token: '',
    isLogin: false
  },
  mutations: {
    setSid (state, value) {
      state.sid = value
    },
    setToken (state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    setUserInfo (state, value) {
      state.userInfo = value
      localStorage.setItem('userInfo', value)
    },
    setIsLogin (state, value) {
      state.isLogin = value
      localStorage.setItem('isLogin', value)
    }
  },
  actions: {},
  modules: {}
})
