import { axiosInstance } from 'api/axios/instance'

const FETCH_REGIONS = {
  axiosInstance,
  request: {
    url: '/regions'
  },
  requestFunctions: {
    transformResponse: data => {
      return JSON.parse(data)
    }
  }
}
export default FETCH_REGIONS
