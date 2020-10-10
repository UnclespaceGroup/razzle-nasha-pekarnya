import { axiosInstance } from 'api/axios/instance'

export const FETCH_META = {
  axiosInstance,
  request: {
    url: '/meta'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      return {
        ...parsedData
      }
    }
  }
}
export default FETCH_META
