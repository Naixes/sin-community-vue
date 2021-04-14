import PopupComponent from './Popup.vue'

const Popup = {}
Popup.install = (Vue) => {
  const PopupConstructor = Vue.extend(PopupComponent)
  const instance = new PopupConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  //   alert
  Vue.prototype.$alert = (msg) => {
    instance.type = 'alert'
    instance.msg = msg
    instance.isVisible = true
  }

  //   confrim
  Vue.prototype.$confirm = (msg, confirm, cancel) => {
    instance.type = 'confirm'
    instance.msg = msg
    if (typeof confirm === 'function') {
      instance.confirm = confirm
    }
    if (typeof cancel === 'function') {
      instance.cancel = cancel
    }
    instance.isVisible = true
  }
}

export default Popup
