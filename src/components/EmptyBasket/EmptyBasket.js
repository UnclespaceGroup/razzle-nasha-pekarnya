import React from 'react'
import css from 'components/EmptyBasket/emptyBasket.module.scss'
import BgImage from 'components/BgImage/BgImage'
import { PAGE_HOME } from 'constants/ROUTES'
import Button from 'components/Button/Button'

const EmptyBasket = () => {
  return (
    <div className={css.container}>
      <BgImage local img='/images/empty-basket-icon.png' className={css.basket} />
      <h2 className={css.title}>Ваша корзина пуста</h2>
      <div className={css.text}>
      Добавьте товары, и они окажутся здесь
      </div>
      <Button to={PAGE_HOME}>В каталог</Button>
    </div>
  )
}
export default React.memo(EmptyBasket)
