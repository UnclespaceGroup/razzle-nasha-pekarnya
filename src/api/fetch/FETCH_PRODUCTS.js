import { axiosInstance } from 'api/axios/instance'

const FETCH_PRODUCTS = {
  axiosInstance,
  request: {
    url: '/products'
  },
  requestFunctions: {
    transformResponse: data => {
      return JSON.parse(data)
    }
  }
}
export default FETCH_PRODUCTS
