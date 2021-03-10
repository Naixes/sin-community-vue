<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
        <ValidationProvider
          rules="required|email"
          v-slot="{ errors }"
          class="layui-form-item"
        >
          <label class="layui-form-label">邮箱</label>
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
          rules="required|min:4"
          v-slot="{ errors }"
          class="layui-form-item"
        >
          <label class="layui-form-label">密码</label>
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
          rules="required"
          v-slot="{ errors }"
          class="layui-form-item"
        >
          <label class="layui-form-label">验证码</label>
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
          <div class="error layui-form-mid">{{ errors[0] }}</div>
          <div
            class="layui-form-mid svg"
            @click="getCaptcha"
            v-html="svg"
          ></div>
        </ValidationProvider>
        <!-- 按钮 -->
        <button type="button" class="layui-btn" @click="checkForm">
          点击登陆
        </button>
        <a class="imooc-link" href="http://www.layui.com">忘记密码？</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      svg: "",
      email: "",
      password: "",
      captcha: "",
      errorMsg: []
    };
  },
  mounted() {
    this.getCaptcha();
  },
  methods: {
    checkForm() {
      this.errorMsg = [];
      // regEx email
      if (!this.email) {
        this.errorMsg.push("登录名为空！");
      }
      if (!this.password) {
        this.errorMsg.push("密码不得为空！");
      }
      if (!this.code) {
        this.errorMsg.push("验证码为空！");
      }
    },
    getCaptcha() {
      axios.get("http://localhost:3000/getCaptcha").then(res => {
        if (res.status === 200) {
          const result = res.data;
          if (result.code === 200) {
            this.svg = result.data;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
}
input {
  width: 190px;
}
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
.svg {
  position: relative;
  top: -15px;
}
</style>
