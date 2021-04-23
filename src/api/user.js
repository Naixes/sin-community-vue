import axios from '@/utils/request'

import store from '@/store'

const userSign = () => {
  const headers = {
    Authorization: 'Bear' + store.state.token,
    'Content-Type': 'application/json'
  }
  return axios.get('/user/sign', {
    headers
  })
}

export {
  userSign
}
