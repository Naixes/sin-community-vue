<template>
  <div class="layui-container flex">
    <div class="layui-row font pb3">确定更新账号为：{{email}}吗？</div>
    <div class="layui-row">
      <button
        type="button"
        class="layui-btn"
        :class="{'layui-btn-disabled': isSend}"
        @click="validate().then(submit)"
      >确定更新</button>
      <router-link class="layui-btn layui-btn-primary" to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script>
import { updateEmail } from '@/api/user'
let obj = {}
export default {
  name: 'confirm',
  data () {
    return {
      email: '',
      isSend: false
    }
  },
  mounted () {
    // 将字符串参数转换为对象
    const queryStr = window.location.href.replace(/.*\?/, '')
    obj = Object.fromEntries(queryStr.split('&').map(v => v.split('=')))
    // 解码
    this.email = decodeURIComponent(obj.email)
  },
  methods: {
    submit () {
      obj.email = this.email
      updateEmail(obj).then((res) => {
        if (res.code === 200) {
          this.isSend = true
          this.$alert(res.msg)
          setTimeout(() => {
            this.$router.push('/')
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 260px;
}
.font {
  font-size: 16px;
  color: #333;
}
</style>
