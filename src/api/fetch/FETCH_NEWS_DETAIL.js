import { axiosInstance } from 'api/axios/instance'

const FETCH_NEWS_DETAIL = (slug) => ({
  axiosInstance,
  request: {
    url: '/actions',
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
export default FETCH_NEWS_DETAIL
