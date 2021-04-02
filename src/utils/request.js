import config from '@/config'
import HttpRequest from './axios'

const baseURL = process.env.NODE_ENV !== 'prod'
  ? config.baseUrl.dev
  : config.baseUrl.prod

const axios = new HttpRequest(baseURL)

export default axios
