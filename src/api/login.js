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
const login = async (params) => axios.post('/login/login', params)
/**
 * 注册接口
 * @params {} params
 */
const reg = async (params) => axios.post('/login/reg', params)
/**
 * 找回密码接口
 * @params {} params
 */
const forget = async (params) => axios.post('/forget', params)

export { getCaptcha, login, reg, forget }
