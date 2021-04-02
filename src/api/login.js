import axios from '@/utils/request'

const getCaptcha = async (sid) => {
  return axios.get('/getCaptcha', { sid })
}

const forget = async (params) => {
  return axios.post('/forget', {
    ...params
  })
}

export { getCaptcha, forget }
