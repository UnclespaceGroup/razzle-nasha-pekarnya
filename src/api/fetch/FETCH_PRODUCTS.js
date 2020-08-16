import { axiosInstance } from 'api/axios/instance'
import _ from 'lodash'
import { PAGE_PRODUCTS } from 'constants/routes'

const FETCH_PRODUCTS = {
  axiosInstance,
  request: {
    url: '/products'
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      return _.map(parsedData, item => ({
        ...item,
        to: PAGE_PRODUCTS + item.id
      }))
    }
  }
}
export default FETCH_PRODUCTS
