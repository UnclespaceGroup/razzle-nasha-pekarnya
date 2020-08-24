import { axiosInstance } from 'api/axios/instance'
import _ from 'lodash'
import { PAGE_NEWS } from 'constants/routes'

const FETCH_NEWS = ({ limit } = {}) => ({
  axiosInstance,
  request: {
    url: '/actions',
    params: {
      _limit: limit
    }
  },
  requestFunctions: {
    transformResponse: data => {
      const parsedData = JSON.parse(data)
      return _.map(parsedData, item => ({
        ...item,
        to: PAGE_NEWS + item.id
      }))
    }
  }
})
export default FETCH_NEWS
