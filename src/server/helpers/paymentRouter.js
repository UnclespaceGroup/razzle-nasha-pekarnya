import axios from 'axios'
import express from 'express'
// constants
import {
  SBER_LOGIN,
  SBER_PASSWORD,
  SBER_PAYMENT_URL
} from 'constants/payment'

const router = express.Router()

const paymentRouter = router.get('/', (req, res) => {
  const {
    query: {
      amount
    } = {}
  } = req

  axios.get(SBER_PAYMENT_URL, {
    params: {
      userName: SBER_LOGIN,
      password: SBER_PASSWORD,
      amount,
      orderNumber: Math.random(), // todo придумать логику для создания ключа
      returnUrl: 'http://localhost:3000/order-form'
    }
  }).then(response => {
    res.send({
      text: 'Все прошло',
      ...response.data
    })
  })
})

export default paymentRouter
