import Vue from 'vue'
import Vuex from 'vuex'
import WebSocketClient from '../utils/websocket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录验证码的sid
    sid: '',
    userInfo: {},
    token: '',
    isLogin: false,
    ws: null,
    num: 0
  },
  mutations: {
    initWebSocket (state, config) {
      state.ws = new WebSocketClient(config)
      state.ws.init()
    },
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
    },
    setMessage (state, value) {
      state.num = value
    }
  },
  actions: {},
  modules: {}
})
