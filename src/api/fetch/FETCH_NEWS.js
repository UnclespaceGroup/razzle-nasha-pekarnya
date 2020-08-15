import { axiosInstance } from 'api/axios/instance'

const FETCH_NEWS = {
  axiosInstance,
  request: {
    url: '/actions'
  },
  requestFunctions: {
    transformResponse: data => {
      return JSON.parse(data)
    }
  }
}
export default FETCH_NEWS
