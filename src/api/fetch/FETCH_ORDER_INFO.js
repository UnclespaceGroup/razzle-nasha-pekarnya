import { axiosInstance } from 'api/axios/instance'

const FETCH_ORDER_INFO = {
  axiosInstance,
  request: {
    url: '/info-o-zakazes'
  },
  requestFunctions: {
    transformResponse: data => {
      return JSON.parse(data)
    }
  }
}
export default FETCH_ORDER_INFO
