<!--  -->
<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{ name: 'Login' }">登录</router-link></li>
          <li class="layui-this">
            <router-link :to="{ name: 'Forget' }">找回密码</router-link
            ><!--重置密码-->
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <!-- 重置密码 -->
            <!--
          <div class="fly-msg">{{d.email}}，请重置您的密码</div>
          <div class="layui-form layui-form-pane"  style="margin-top: 30px;">
            <form action="/user/repass" method="post">
              <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                  <input type="password" id="L_pass" name="pass" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid layui-word-aux">6到16个字符</div>
              </div>
              <div class="layui-form-item">
                <label for="L_repass" class="layui-form-label">确认密码</label>
                <div class="layui-input-inline">
                  <input type="password" id="L_repass" name="repass" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
              </div>
              <div class="layui-form-item">
                <label for="L_vercode" class="layui-form-label">人类验证</label>
                <div class="layui-input-inline">
                  <input type="text" id="L_vercode" name="vercode" required lay-verify="required" placeholder="请回答后面的问题" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid">
                  <span style="color: #c00;">{{d.vercode}}</span>
                </div>
              </div>
              <div class="layui-form-item">
                <input type="hidden" name="email" value="{{d.email}}">
                <input type="hidden" name="email" value="{{d.email}}">
                <button class="layui-btn" alert="1" lay-filter="*" lay-submit>提交</button>
              </div>
            </form>
          </div>

          <div class="fly-error">该重置密码链接已失效，请重新校验您的信息</div>
          <div class="fly-error">非法链接，请重新校验您的信息</div>
          -->

            <div class="layui-form layui-form-pane">
              <form method="post">
                <ValidationProvider
                  tag="div"
                  rules="required|email"
                  v-slot="{ errors }"
                  class="layui-form-item"
                >
                  <label for="L_email" class="layui-form-label">邮箱</label>
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
                  <!-- type button防止跳转 -->
                  <button
                    type="button"
                    class="layui-btn"
                    alert="1"
                    @click="submit"
                  >
                    提交
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaptcha, forget } from '@/api/login.js'
export default {
  data () {
    return {
      email: '',
      svg: '',
      captcha: ''
    }
  },

  components: {},

  computed: {},

  mounted () {
    this._getCaptcha()
  },

  methods: {
    _getCaptcha () {
      getCaptcha().then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
    submit () {
      const params = {
        email: this.email,
        captcha: this.captcha
      }
      forget(params).then((res) => {
        if (res.code === 200) {
          alert(res.msg)
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
</style>
