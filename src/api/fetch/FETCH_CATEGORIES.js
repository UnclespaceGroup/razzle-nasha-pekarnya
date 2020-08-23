import { axiosInstance } from 'api/axios/instance'
import _ from 'lodash'

const FETCH_CATEGORIES = {
  axiosInstance,
  request: {
    url: '/categories'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      return _.filter(parsedData, ({ products }) => _.size(products))
    }
  }
}
export default FETCH_CATEGORIES
