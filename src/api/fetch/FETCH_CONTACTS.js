import { axiosInstance } from 'api/axios/instance'

export const FETCH_CONTACTS = {
  axiosInstance,
  request: {
    url: '/contacts'
  },
  requestFunctions: {
    transformResponse: data => {
      return JSON.parse(data)
    }
  }
}
export default FETCH_CONTACTS
