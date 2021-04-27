import Vue from 'vue'
import { extend, localize } from 'vee-validate'
// eslint-disable-next-line
import { required, email, min, max, confirmed, length, is_not } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)
extend('max', max)
extend('length', length)
extend('confirmed', confirmed)
extend('is_not', is_not)

// 激活中文
localize('zh-CN')

// Install English and Arabic localizations.
localize({
  'zh-CN': {
    messages: {
      required: '请输入{_field_}',
      email: '请输入正确的{_field_}格式',
      min: (name, { length }) => `长度大于${length}`,
      max: (name, { length }) => `长度小于${length}`,
      length: (field, args) => field + '长度要求' + args,
      confirmed: '密码不匹配',
      is_not: (field, args) => '请选择{_field_}'
    },
    names: {
      email: '邮箱',
      password: '密码',
      repassword: '确认密码',
      oldpassword: '旧密码',
      name: '昵称',
      code: '验证码',
      title: '标题',
      catalog: '分类'
    },
    // 针对不同的name，定义不同的message消息
    fields: {
      // catalog: {
      //   is_not: '请选择{_field_}'
      // }
    }
  }
})

let LOCALE = 'zh-CN'

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, 'locale', {
  get () {
    return LOCALE
  },
  set (val) {
    LOCALE = val
    localize(val)
  }
})
