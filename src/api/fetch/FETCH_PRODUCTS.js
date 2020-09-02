import { axiosInstance } from 'api/axios/instance'
import _ from 'lodash'
import { PAGE_PRODUCTS } from 'constants/routes'

const FETCH_PRODUCTS = ({ limit }) => ({
  axiosInstance,
  request: {
    url: '/products',
    params: {
      _limit: limit
    }
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)

      return _.map(parsedData, item => ({
        ...item,
        subtitle: item.category?.title,
        to: PAGE_PRODUCTS + item.id
      }))
    }
  }
})
export default FETCH_PRODUCTS
