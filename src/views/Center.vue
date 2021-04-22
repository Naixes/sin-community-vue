<!-- 用户中心 -->
<template>
  <div class="layui-container fly-marginTop fly-user-main">
        <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li v-for="item in lists" :key="item.icon" class="layui-nav-item">
                <router-link :to="{name: item.path}" :active-class="item.activeClass">
                    <i class="layui-icon" :class="`layui-icon-${item.icon}`"></i>
                    {{item.name}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          name: '我的主页',
          icon: 'home',
          path: 'UserCenter'
        },
        {
          name: '用户中心',
          icon: 'friends',
          path: 'Center'
        },
        {
          name: '基本设置',
          icon: 'set',
          path: 'MyInfo',
          activeClass: 'layui-this'
        },
        {
          name: '我的帖子',
          icon: 'form',
          path: 'Posts',
          activeClass: 'layui-this'
        },
        {
          name: '我的消息',
          icon: 'dialogue',
          path: 'Message'
        },
        {
          name: '其他设置',
          icon: 'component',
          path: 'Others'
        }
      ]
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
