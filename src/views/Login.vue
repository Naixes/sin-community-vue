<!--  -->
<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">
            <router-link :to="{ name: 'Login' }">登录</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Reg' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <ValidationObserver ref="observer" v-slot="{ validate }">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <ValidationProvider
                    tag="div"
                    rules="required|email"
                    v-slot="{ errors }"
                    class="layui-form-item"
                  >
                    <label for="L_email" class="layui-form-label">用户名</label>
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="email"
                        v-model.trim="email"
                        placeholder="请输入"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <ValidationProvider
                    tag="div"
                    rules="required|min:4|max:16|"
                    v-slot="{ errors }"
                    class="layui-form-item"
                  >
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="password"
                        v-model.trim="password"
                        placeholder="请输入"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <ValidationProvider
                    ref="captchafield"
                    tag="div"
                    rules="required"
                    v-slot="{ errors }"
                    class="layui-form-item"
                  >
                    <label for="L_vercode" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="captcha"
                        v-model.trim="captcha"
                        placeholder="请输入"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <!-- 验证码 -->
                    <div>
                      <span class="svg" @click="_getCaptcha" v-html="svg"></span>
                    </div>
                    <div class="error layui-form-mid">
                      {{ errors[0] }}
                    </div>
                  </ValidationProvider>
                  <div class="layui-form-item">
                    <button @click="validate().then(submit)" class="layui-btn" type="button">
                      立即登录
                    </button>
                    <span style="padding-left: 20px">
                      <router-link :to="{ name: 'Forget' }">
                        忘记密码？
                      </router-link>
                    </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a
                      href=""
                      onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                      class="iconfont icon-qq"
                      title="QQ登入"
                    ></a>
                    <a
                      href=""
                      onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                      class="iconfont icon-weibo"
                      title="微博登入"
                    ></a>
                  </div>
                </form>
              </div>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { login, getCaptcha } from '@/api/login.js'
import { v4 as uuidv4 } from 'uuid'
export default {
  data () {
    return {
      svg: '',
      email: '',
      password: '',
      captcha: ''
    }
  },

  components: { ValidationProvider, ValidationObserver },

  mounted () {
    this._getCaptcha()
  },

  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      const params = {
        email: this.email,
        password: this.password,
        sid: this.$store.state.sid,
        captcha: this.captcha
      }
      login(params).then(res => {
        if (res.code === 200) {
          // 保存用户信息，和登录状态
          res.data.email = this.email
          this.$store.commit('setToken', res.token)
          this.$store.commit('setUserInfo', res.data)
          this.$store.commit('setIsLogin', true)

          this.email = ''
          this.password = ''
          this.captcha = ''
          requestAnimationFrame(() => {
            this.$refs.observer.reset()
          })
          // 跳转
          this.$router.push({ name: 'Index' })
        } else if (res.code === 401) {
          // 用户名或密码错误
          this.$alert(res.msg)
        } else if (res.code === 402) {
          // 验证码错误
          this.$refs.captchafield.setErrors([res.msg])
        }
      })
    },
    _getCaptcha () {
      let sid = ''
      if (localStorage.getItem('sid')) {
        sid = localStorage.getItem('sid')
      } else {
        sid = uuidv4()
        localStorage.setItem('sid', sid)
      }
      this.$store.commit('setSid', sid)
      getCaptcha(sid).then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.svg {
  position: relative;
}
.error {
  color: #c00;
}
</style>
