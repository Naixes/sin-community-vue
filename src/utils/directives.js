import { escapeHtml } from './escapeHtml'

export default {
  // bind 和 update 时触发相同行为，update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
  richtext (el, binding, vnode) {
    el.innerHTML = escapeHtml(binding.value)
  }
  // richtext: {
  //   bind: function (el, binding, vnode) {
  //     el.innerHTML = escapeHtml(binding.value)
  //   },
  //   componentUpdated: function (el, binding, vnode) {
  //     el.innerHTML = escapeHtml(binding.value)
  //   }
  // }
}
