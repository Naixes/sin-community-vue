// 封装axios
// 统一数据格式
// 统一错误处理
import axios from 'axios'

import errorHandle from './errorHandle'

class HttpRequest {
  constructor (baseURL) {
    this.baseURL = baseURL
  }

  getInsideOptions () {
    const options = {
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 1000
      // 携带cookie
      // withCredentials: false
    }
    return options
  }

  interceptors (instance) {
    instance.interceptors.request.use(function (config) {
      console.log(config)
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      console.log('res' + res)
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, error => {
      errorHandle(error)
      return Promise.reject(error)
    })
  }

  request (options) {
    const newOptions = Object.assign(this.getInsideOptions(), options)
    const instance = axios.create()
    this.interceptors(instance)
    // 相当于instance.request(newOptions)
    return instance(newOptions)
  }

  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url
    }, config)
    return this.request(options)
  }

  post (url, data) {
    const options = Object.assign({
      method: 'post',
      url,
      data
    })
    return this.request(options)
  }
}

export default HttpRequest
