import config from '@/config'
import HttpRequest from './axios'

const baseURL = process.env.NODE_ENV !== 'prod'
  ? config.baseURL.dev
  : config.baseURL.prod

const axios = new HttpRequest(baseURL)

export default axios
