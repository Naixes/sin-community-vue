import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'

import { ValidationProvider } from 'vee-validate'
import './utils/veevalidate'
import Popup from './components/modules/Popup'

Vue.component('ValidationProvider', ValidationProvider)

Vue.use(Popup)

Vue.config.productionTip = false

// 改为在create中配置
// axios.defaults.baseURL =
//   process.env.NODE_ENV !== 'prod'
//     ? 'http://localhost:3000'
//     : 'http://192.168.1.7:12005'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
