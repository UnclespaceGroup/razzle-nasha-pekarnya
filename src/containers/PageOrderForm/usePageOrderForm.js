import { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFullPrice } from 'utils/priceUtils'
import axios from 'axios'
import { useHistory } from 'react-router'
import { PAGE_ORDER_RESULT } from 'constants/ROUTES'
import { botUrl } from 'api/axios/instance'
import { FORM_ERROR } from 'final-form'

const usePageOrderForm = () => {
  const history = useHistory()

  const basket = useSelector(state => state.basket)

  const dispatch = useDispatch()

  const price = useMemo(() => getFullPrice(basket), [basket])

  const onSubmit = useCallback(async userData => {
    try {
      const orders = Object.values(basket)

      const {
        data: {
          formUrl
        } = {}
      } = await axios.get('/payment', {
        params: {
          amount: 3000,
          orderNumber: Math.random()
        }
      })

      if (formUrl) {
        document.location.href = formUrl
      }

      await axios.post(botUrl, {
        orders,
        userData,
        price
      })
      dispatch({
        type: 'CLEAR'
      })
      history.push(PAGE_ORDER_RESULT, {
        orders,
        price,
        data: userData
      })
    } catch (e) {
      return { [FORM_ERROR]: 'error' }
    }
  }, [])

  return {
    onSubmit,
    price
  }
}
export default usePageOrderForm
