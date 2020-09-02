import { axiosInstance } from 'api/axios/instance'

export const FETCH_META = ({ page }) => ({
  axiosInstance,
  request: {
    url: '/metas',
    params: {
      page
    }
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)
      return parsedData?.[0]
    }
  }
})
export default FETCH_META
