// packages
import React from 'react'
import { useFormState } from 'react-final-form'
import Attention from 'components/Attention/Attention'
import css from './delivery.module.scss'

const Delivery = () => {
  const {
    values: {
      delivery
    }
  } = useFormState()

  const text = delivery === 0 ? 'Доставка бесплатна' : `стоимость доставки ${delivery} руб.`

  return (
    <Attention
      className={css.wrapper}
      variant='success'
      text={text}
    />
  )
}
export default Delivery
