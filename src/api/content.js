import axios from '@/utils/request'
import qs from 'qs'

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

export {
  getList,
  getTips,
  getTopWeek,
  getLinks
}
