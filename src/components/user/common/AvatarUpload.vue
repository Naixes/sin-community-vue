<template>
  <!-- 上传头像 -->
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <div class="avatar-add">
        <p>建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB</p>
        <!-- label绑定input -->
        <label for="avatar" class="layui-btn upload-img">
          <i class="layui-icon">&#xe67c;</i>上传头像
        </label>
        <input
          id="avatar"
          type="file"
          name="file"
          accept="image/png, image/gif, image/jpg"
          @change="upload"
        />
        <img :src="avatar" />
        <span class="loading"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadImg } from '@/api/content'
import { updateUserBasic } from '@/api/user'
export default {
  name: 'avatar-upload',
  data () {
    return {
      // 判断 userInfo & avatar 是否存在
      avatar:
        this.$store.state.userInfo && this.$store.state.userInfo.avatar
          ? this.$store.state.userInfo.avatar
          : '/img/bear-200-200.jpg',
      formData: ''
    }
  },
  methods: {
    upload (e) {
      const file = e.target.files
      const formData = new FormData()
      if (file.length > 0) {
        formData.append('file', file[0])
        this.formData = formData
      }
      // 上传图片的之后 -> uploadImg
      uploadImg(formData).then((res) => {
        if (res.code === 200) {
          this.avatar = res.data
          // 更新用户基本资料 -> updateUserBasic
          updateUserBasic({ avatar: this.avatar }).then((res) => {
            if (res.code === 200) {
              // 修改 store 内的用户基础信息
              const user = this.$store.state.userInfo
              this.$set(this.$store.state.userInfo, 'avatar', this.avatar)
              this.$store.commit('setUserInfo', user)
              this.$alert('图片上传成功')
            }
          })
          // 清空
          document.getElementById('avatar').value = ''
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#avatar {
  display: none;
}
</style>
