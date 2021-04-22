<!--  -->
<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{ name: 'Login' }">登录</router-link></li>
          <li class="layui-this">
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
                      name="email"
                      rules="required|email"
                      v-slot="{ errors }"
                      class="layui-form-item"
                    >
                      <label for="L_email" class="layui-form-label">邮箱</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          id="L_email"
                          name="email"
                          v-model.trim="email"
                          placeholder="请输入"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid layui-word-aux">
                        将会成为您唯一的登入名
                      </div>
                      <div class="error layui-row">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <ValidationProvider
                    tag="div"
                    name="name"
                    rules="required"
                    v-slot="{ errors }"
                    class="layui-form-item"
                  >
                    <label for="L_name" class="layui-form-label">昵称</label>
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        id="L_name"
                        name="name"
                        v-model.trim="name"
                        placeholder="请输入"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-row">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <ValidationProvider
                    tag="div"
                    name="password"
                    rules="required|min:4|max:16|confirmed:confirmation"
                    v-slot="{ errors }"
                    class="layui-form-item"
                  >
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        id="L_pass"
                        name="password"
                        v-model="password"
                        placeholder="请输入"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid layui-word-aux">4-16个字符</div>
                    <div class="error layui-row">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <ValidationProvider
                    tag="div"
                    name="password"
                    class="layui-form-item"
                    vid="confirmation"
                    v-slot="{ errors }"
                  >
                    <label for="L_repass" class="layui-form-label"
                      >确认密码</label
                    >
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        id="L_repass"
                        name="repass"
                        v-model="repassword"
                        placeholder="请输入"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-row">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <ValidationProvider
                    tag="div"
                    name="captcha"
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
                    <div class="error layui-row">
                      {{ errors[0] }}
                    </div>
                  </ValidationProvider>
                  <div class="layui-form-item">
                    <button @click="validate().then(submit)" class="layui-btn" type="button">
                      立即注册
                    </button>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者直接使用社交账号快捷注册</span>
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
import { reg, getCaptcha } from '@/api/login.js'
import { v4 as uuidv4 } from 'uuid'

export default {
  data () {
    return {
      svg: '',
      password: '',
      repassword: '',
      captcha: '',
      email: '',
      name: ''
    }
  },

  components: { ValidationProvider, ValidationObserver },

  mounted () {
    let sid = ''
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuidv4()
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid)
    this._getCaptcha(sid)
  },

  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        // ABORT!!
        return
      }
      const params = {
        email: this.email,
        password: this.password,
        name: this.name,
        captcha: this.captcha,
        sid: this.$store.state.sid
      }
      reg(params).then(res => {
        if (res.code === 200) {
          this.email = ''
          this.password = ''
          this.repassword = ''
          this.name = ''
          this.captcha = ''
          requestAnimationFrame(() => {
            this.$refs.observer.reset()
          })
          // 跳转到登录界面，让用户登录
          this.$alert('注册成功')
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        } else {
          this.$refs.observer.setErrors(res.msg)
        }
      })
    },
    _getCaptcha (sid) {
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
.error {
  color: #c00;
}
</style>
