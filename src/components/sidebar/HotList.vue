<template>
  <div>
    <dl class="fly-panel fly-list-one">
      <dt class="fly-panel-title">本周热议</dt>
      <dd v-for="item in topWeek" :key="item._id">
        <a href="jie/detail.html">{{item.title}}</a>
        <span>
          <i class="iconfont icon-pinglun1"></i> {{item.answers}}
        </span>
      </dd>

      <!-- 无数据时 -->
      <!-- <div class="fly-none">没有相关数据</div> -->
    </dl>
  </div>
</template>

<script>
import { getTopWeek } from '@/api/content'

export default {
  name: 'hotlist',
  data () {
    return {
      topWeek: []
    }
  },
  mounted () {
    this._getTopWeek()
  },
  methods: {
    _getTopWeek () {
      getTopWeek().then(res => {
        if (res.code === 200) {
          this.topWeek = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
