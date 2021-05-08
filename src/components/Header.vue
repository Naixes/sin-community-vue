<!--  -->
<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <a class="fly-logo" href="/">
        <img class="logo-img" src="../assets/logo.png" alt="layui" />
      </a>
      <ul class="layui-nav fly-nav layui-hide-xs">
        <li class="layui-nav-item layui-this">
          <a href="/"><i class="iconfont icon-jiaoliu"></i>交流</a>
        </li>
        <li class="layui-nav-item">
          <a href="case/case.html"
            ><i class="iconfont icon-iconmingxinganli"></i>案例</a
          >
        </li>
        <li class="layui-nav-item">
          <a href="/" target="_blank"><i class="iconfont icon-ui"></i>框架</a>
        </li>
      </ul>

      <ul class="layui-nav fly-nav-user">
        <!-- 未登入的状态 -->
        <template v-if="!isLogin">
          <li class="layui-nav-item">
            <a
              class="iconfont icon-touxiang layui-hide-xs"
              href="../user/login.html"
            ></a>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{name: 'Login'}">登入</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{name: 'Reg'}">注册</router-link>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href=""
              onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
              title="QQ登入"
              class="iconfont icon-qq"
            ></a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href=""
              onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
              title="微博登入"
              class="iconfont icon-weibo"
            ></a>
          </li>
        </template>

        <!-- 登入后的状态 -->
        <li v-else @mouseover="show()" @mouseleave="hide()" class="layui-nav-item">
            <a class="fly-nav-avatar" href="javascript:;">
              <cite class="layui-hide-xs">{{userInfo.name}}</cite>
              <!-- <i class="iconfont icon-renzheng layui-hide-xs" title="认证信息：layui 作者"></i> -->
              <i class="layui-badge fly-badge-vip layui-hide-xs" v-show="userInfo.isVip && userInfo.isVip != 0">{{userInfo.isVip}}</i>
              <img :src="userInfo.avatar">
            </a>
            <dl class="layui-nav-child" :class="{'layui-show': isHover}">
            <dd><a href="user/set.html"><i class="layui-icon">&#xe620;</i>基本设置</a></dd>
            <dd><a href="user/message.html"><i class="iconfont icon-tongzhi" style="top: 4px;"></i>我的消息</a></dd>
            <dd><a href="user/home.html"><i class="layui-icon" style="margin-left: 2px; font-size: 22px;">&#xe68e;</i>我的主页</a></dd>
            <hr style="margin: 5px 0;">
            <dd><a @click="logout" href="javascript: void(0)" style="text-align: center;">退出</a></dd>
            </dl>
        </li>
        <div class="fly-nav-msg" v-show="num.message && num.message !== 0">{{num.message}}</div>
        <transition name="fade">
          <div class="layui-layer-tips" v-show="hasMsg">
            <div class="layui-layer-content">
              您有{{num.message}}条未读消息
              <i class="layui-layer-TipsG layui-layer-TipsB"></i>
            </div>
          </div>
        </transition>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isHover: false,
      hoverControl: {},
      hasMsg: false
    }
  },

  components: {},

  watch: {
    num (newval, oldval) {
      if (newval.type && newval !== oldval) {
        // 判断消息数量
        if (newval.message && newval.message > 0) {
          this.hasMsg = true
          setTimeout(() => {
            this.hasMsg = false
          }, 2000)
        }
      }
    }
  },

  computed: {
    ...mapState({
      num: (state) => state.num
    }),
    isLogin () {
      return this.$store.state.isLogin
    },
    userInfo () {
      return this.$store.state.userInfo || {
        name: '',
        avatar: '',
        isVip: 0
      }
    }
  },

  mounted: {},

  methods: {
    logout () {
      this.$confirm('确定退出登录吗？', () => {
        localStorage.clear()
        this.store.commit('setToken', '')
        this.store.commit('setUserInfo', {})
        this.store.commit('setIsLogin', false)
        // 防止重复导航的报错
        this.$router.push('/', () => {})
      }, () => {})
    },
    show () {
      clearTimeout(this.hoverControl)
      this.hoverControl = setTimeout(() => {
        this.isHover = true
      }, 500)
    },
    hide () {
      clearTimeout(this.hoverControl)
      this.hoverControl = setTimeout(() => {
        this.isHover = false
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.logo-img {
  width: 40px;
}
.layui-layer-tips {
  position: absolute;
  white-space: nowrap;
  right: 0;
  top: 60px;
  z-index: 2000;
}
</style>
