import Vue from "vue";
import { extend, localize } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install email rule.
extend("min", min);

// 激活中文
localize("zh-CN");

// Install English and Arabic localizations.
localize({
  "zh-CN": {
    messages: {
      required: "请输入{_field_}",
      email: "请输入正确的{_field_}格式",
      min: (name, { length }) => `长度大于${length}`,
      length: (field, args) => field + "长度要求" + args
    },
    names: {
      email: "E-mail Address",
      password: "Password"
    }
  }
});

let LOCALE = "zh-CN";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
  get() {
    return LOCALE;
  },
  set(val) {
    LOCALE = val;
    localize(val);
  }
});
