import { escapeHtml } from './escapeHtml'
import store from '@/store'

export default {
  // bind 和 update 时触发相同行为，update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
  // richtext (el, binding, vnode) {
  //   el.innerHTML = escapeHtml(binding.value)
  // },
  richtext: {
    bind: function (el, binding, vnode) {
      el.innerHTML = escapeHtml(binding.value)
    },
    componentUpdated: function (el, binding, vnode) {
      el.innerHTML = escapeHtml(binding.value)
    }
  },
  hasRole: {
    inserted: function (el, binding, vnode) {
      const roles = store.state.userInfo.roles || ['user']
      if (!roles.includes(binding.value)) {
        el.parentNode.removeChild(el)
      }
    }
  },
  hasPermission: {
    inserted: function (el, binding, vnode) {
      const types = vnode.context.$route.meta.types
      const values = binding.value
      let flag = true
      for (const v of values) {
        if (!types.includes(v)) {
          flag = false
        }
      }
      if (!flag) {
        el.parentNode.removeChild(el)
      }
    }
  }
}
