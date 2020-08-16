import { axiosInstance } from 'api/axios/instance'

const FETCH_ABOUT = {
  axiosInstance,
  request: {
    url: '/about'
  },
  requestFunctions: {
    transformResponse: data => {
      return JSON.parse(data)
    }
  }
}
export default FETCH_ABOUT
