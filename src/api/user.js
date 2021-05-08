import axios from '@/utils/request'
import qs from 'qs'

const userSign = () => axios.get('/user/sign')

const updateUserBasic = (params) => axios.post('/user/updateUserBasic', params)
const updateEmail = (params) => axios.get('/user/updateEmail', params)
const changePasswd = (params) => axios.post('/user/changePassword', params)
const addCollect = params => axios.get('/user/setCollect?' + qs.stringify(params))
const getCollect = params => axios.get('/user/collect?' + qs.stringify(params))
// 获取发表的文章列表
const getPostListByUid = params => axios.get('/user/post?' + qs.stringify(params))
// 删除指定的文章
const deletePostByUid = params => axios.get('/user/deletePost?' + qs.stringify(params))
// 获取用户信息
const getInfo = (params) => axios.get('/user/info?' + qs.stringify(params))
// 获取未读消息
const getMsg = (params) => axios.get('/user/getmsg?' + qs.stringify(params))
const setMsg = (params) => axios.set('/user/setmsg?' + qs.stringify(params))

export {
  userSign,
  updateUserBasic,
  updateEmail,
  changePasswd,
  addCollect,
  getCollect,
  getPostListByUid,
  deletePostByUid,
  getInfo,
  getMsg,
  setMsg
}
