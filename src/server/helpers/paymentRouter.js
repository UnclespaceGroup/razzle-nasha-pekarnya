import axios from 'axios'
import express from 'express'
import createHash from 'hash-generator'
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
      amount,
      returnUrl
    } = {}
  } = req

  const orderNumber = createHash(25)

  axios.get(SBER_PAYMENT_URL, {
    params: {
      userName: SBER_LOGIN,
      password: SBER_PASSWORD,
      orderNumber,
      amount: amount * 100, // В минимальных размерах валюты - копейки
      returnUrl: 'http://localhost:3000/order-form'
    }
  }).then(response => {
    const {
      errorCode
    } = response.data

    if (errorCode) {
      res.status(500)
    }

    res.send({
      text: 'Запрос в сбербанк прошёл',
      errorCode,
      ...response.data
    })
  })
})

export default paymentRouter
