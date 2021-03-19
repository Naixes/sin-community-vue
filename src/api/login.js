import axios from 'axios'

const getCaptcha = async () => {
  let result = null
  try {
    result = await axios.get('/getCaptcha')
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return result
}

const forget = async (params) => {
  let result = null
  try {
    result = await axios.post('/forget', {
      ...params
    })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return result
}

export { getCaptcha, forget }
