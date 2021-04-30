import axios from '@/utils/request'
import qs from 'qs'

import store from '../store'

/**
 * 读取文章列表
 * @param {Object} options 读取文章列表接口参数
 */
const getList = (options) => axios.get('/public/postList?' + qs.stringify(options))

// 温馨提醒
const getTips = () => axios.get('/public/getTips')

// 本周热议
const getTopWeek = () => axios.get('/public/getTopWeek')

// 友情链接
const getLinks = () => axios.get('/public/getLinks')

// 图片上传
const uploadImg = (formData) => axios.post('/content/uploadImg', formData)

// 发帖
const addPost = params => axios.post('/content/add', params)

// 帖子详情
const getDetail = tid => {
  const token = store.state.token
  let headers = {}
  if (token) {
    headers = {
      Authorization: 'Bear' + token
    }
  }
  axios.get('/content/detail?tid' + tid, headers)
}

// 编辑帖子
const updatePost = params => axios.post('/content/update', params)

export {
  getList,
  getTips,
  getTopWeek,
  getLinks,
  uploadImg,
  addPost,
  getDetail,
  updatePost
}
