import axios from '@/utils/request'
import qs from 'qs'
import store from '../store'

const getComents = (params) => {
  const token = store.state.token
  let headers = {}
  if (token) {
    headers = {
      Authorization: 'Bear' + token
    }
  }
  return axios.get('/public/comments?' + qs.stringify(params), headers)
}

const addComment = params => axios.post('/comments/reply', params)

const updateComment = params => axios.post('/comments/update', params)

const setCommentBest = params => axios.get('/comments/accept?' + qs.stringify(params))

const setHands = params => axios.get('/comments/hands?' + qs.stringify(params))

export {
  getComents,
  addComment,
  updateComment,
  setCommentBest,
  setHands
}
