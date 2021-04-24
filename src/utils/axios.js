// 封装axios
// 统一数据格式
// 统一错误处理
import axios from 'axios'

import errorHandle from './errorHandle'
import store from '@/store'
import _config from '@/config'

const CancelToken = axios.CancelToken
class HttpRequest {
  constructor (baseURL) {
    this.baseURL = baseURL
    // 正在进行的请求
    this.pending = {}
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

  removePending (key, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
    }
    delete this.pending[key]
  }

  interceptors (instance) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      let isPublic = false
      _config.publicPath.map(path => {
        isPublic = isPublic || path.test(config.url)
      })
      const token = store.state.token
      if (token && !isPublic) {
        config.headers.Authorization = 'Bear' + store.state.token
      }

      // 避免重复请求
      const key = config.method + '&' + config.url
      // 取消重复请求，删除请求pending
      this.removePending(key, true)
      // 添加到pending
      config.cancelToken = new CancelToken(c => {
        this.pending[key] = c
      })
      return config
    }, error => {
      errorHandle(error)
      return Promise.reject(error)
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
      const key = res.method + '&' + res.url
      // 删除请求pending，防止内存溢出，防止拦截正常请求
      this.removePending(key)
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

  get (url, params) {
    const options = Object.assign({
      method: 'get',
      url
    }, params)
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
