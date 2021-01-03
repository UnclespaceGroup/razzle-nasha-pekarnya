import { useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getFullPrice } from 'utils/priceUtils'
import axios from 'axios'
import { composeValidators, maxValue, minValue, required } from 'utils/validators'
import { useHistory } from 'react-router'
import { PAGE_ORDER_RESULT } from 'constants/ROUTES'
import { botUrl } from 'api/axios/instance'
import { FORM_ERROR } from 'final-form'

const regionsOptions = [
  {
    value: 'В пределах города',
    label: 'В пределах города'
  },
  {
    value: 'Чов',
    label: 'Чов'
  },
  {
    value: 'Эжва',
    label: 'Эжва'
  }
]

const usePageOrderForm = () => {
  const history = useHistory()
  const formData = {
    name: {
      name: 'name',
      label: 'Ваше имя',
      placeholder: 'Иван Петров',
      validate: required
    },
    region: {
      name: 'region',
      label: 'Район',
      options: regionsOptions
    },
    street: {
      name: 'street',
      label: 'Улица',
      placeholder: 'Коммунистическая',
      prompt: 'Введите вашу улицу',
      validate: required
    },
    house: {
      name: 'house',
      label: 'Дом',
      placeholder: '24',
      prompt: '',
      validate: required
    },
    frontDoor: {
      name: 'frontDoor',
      label: 'Подъезд',
      placeholder: '2',
      prompt: '',
      type: 'number',
      validate: composeValidators(minValue(0), maxValue(15), required)
    },
    floor: {
      name: 'floor',
      label: 'Этаж',
      type: 'number',
      placeholder: '12',
      validate: composeValidators(minValue(0), maxValue(25), required)
    },
    flat: {
      name: 'flat',
      label: 'Квартира',
      type: 'number',
      placeholder: '144',
      validate: composeValidators(minValue(0), maxValue(1000), required)
    },
    agree: {
      name: 'agree',
      label: 'Я согласен с политикой конфиденциальности',
      validate: required
    },
    textarea: {
      name: 'textarea',
      placeholder: '',
      label: 'Комментарий к заказу'
    }
  }

  const basket = useSelector(state => state.basket)

  const price = useMemo(() => getFullPrice(basket), [basket])

  const onSubmit = useCallback(async userData => {
    try {
      const orders = Object.values(basket)

      await axios.post(botUrl, {
        orders,
        userData,
        price
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
    formData,
    onSubmit,
    price
  }
}
export default usePageOrderForm
