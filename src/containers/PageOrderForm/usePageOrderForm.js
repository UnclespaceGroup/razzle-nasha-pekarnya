import { useMemo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFullPrice } from 'utils/priceUtils'
import axios from 'axios'
import { useHistory } from 'react-router'
import { PAGE_ORDER_RESULT } from 'constants/ROUTES'
import { botUrl } from 'api/axios/instance'
import { FORM_ERROR } from 'final-form'
import useSearchValues from 'utils/useSearchValues'

const usePageOrderForm = () => {
  const { orderId } = useSearchValues()
  const history = useHistory()

  const basket = useSelector(state => state.basket)

  const dispatch = useDispatch()

  const price = useMemo(() => getFullPrice(basket), [basket])
  const userData = useSelector(state => state.userData)

  // Запрос на бота и редирект на страницу успеха
  const getBotRequest = useCallback(async () => {
    try {
      const orders = Object.values(basket)

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
      console.log(e)
    }
  }, [orderId, userData])

  // Если в параметре есть orderId - надо сделать запрос на бота и перейти на страницу успешной оплаты
  useEffect(() => {
    if (orderId) {
      getBotRequest()
    }
  }, [orderId])

  const onSubmit = useCallback(async userData => {
    try {
      dispatch({
        type: 'ADD_USER_DATA',
        payload: userData
      })

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
