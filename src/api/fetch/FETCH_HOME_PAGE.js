import { axiosInstance } from 'api/axios/instance'

export const FETCH_HOME_PAGE = {
  axiosInstance,
  request: {
    url: '/main-page'
  },
  requestFunctions: {
    transformResponse: data => {
      return JSON.parse(data)
    }
  }
}
export default FETCH_HOME_PAGE
