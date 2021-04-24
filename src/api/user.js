import axios from '@/utils/request'

const userSign = () => axios.get('/user/sign')

const updateUserInfo = (params) => axios.post('/user/sign', params)

export {
  userSign,
  updateUserInfo
}
