import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { ValidationProvider } from "vee-validate";
import "./local/index";

Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

axios.defaults.baseURL =
  process.env.NODE_ENV !== "prod"
    ? "http://localhost:3000"
    : "http://url.domain.com";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
