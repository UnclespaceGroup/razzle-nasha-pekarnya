import { axiosInstance } from 'api/axios/instance'

const FETCH_PRODUCTS_DETAIL = (slug) => ({
  axiosInstance,
  request: {
    url: '/products',
    params: {
      id: slug
    }
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)
      return parsedData?.[0]
    }
  }
})
export default FETCH_PRODUCTS_DETAIL
