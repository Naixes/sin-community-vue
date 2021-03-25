import axios from '@/utils/request'

const getCaptcha = async () => {
  return axios.get('/getCaptcha')
}

const forget = async (params) => {
  return axios.post('/forget', {
    ...params
  })
}

export { getCaptcha, forget }
