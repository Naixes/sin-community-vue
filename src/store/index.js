import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录验证码的sid
    sid: ''
  },
  mutations: {
    setSid (state, value) {
      state.sid = value
    }
  },
  actions: {},
  modules: {}
})
