import axios from '@/utils/request'

const userSign = () => axios.get('/user/sign')

const updateUserBasic = (params) => axios.post('/user/updateUserBasic', params)
const updateEmail = (params) => axios.get('/user/updateEmail', params)
const changePasswd = (params) => axios.post('/user/changePassword', params)

export {
  userSign,
  updateUserBasic,
  updateEmail,
  changePasswd
}
