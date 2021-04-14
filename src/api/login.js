import axios from '@/utils/request'

/**
 * 获取验证码接口
 * @params {} params
 */
const getCaptcha = async (sid) => {
  return axios.get('/public/getCaptcha', {
    params: { sid }
  })
}

/**
 * 登录接口
 * @params {} params
 */
const login = async (params) => {
  return axios.post('/login/login', {
    ...params
  })
}

/**
 * 找回密码接口
 * @params {} params
 */
const forget = async (params) => {
  return axios.post('/forget', {
    ...params
  })
}

export { getCaptcha, login, forget }
