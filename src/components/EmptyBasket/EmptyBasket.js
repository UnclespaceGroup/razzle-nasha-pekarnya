import React from 'react'
import cn from 'classnames'
import css from './emptyBasket.scss'
import BgImage from 'components/BgImage/BgImage'
import { PAGE_HOME } from 'constants/ROUTES'
import useDevice from 'hooks/useDevice'
import Button from 'components/Button/Button'

const EmptyBasket = () => {
  const { currentDevice } = useDevice()
  return (
    <div className={cn(css.container, css[currentDevice])}>
      <BgImage img='/images/empty-basket-icon.png' className={css.basket} />
      <h2 className={css.title}>Ваша корзина пуста</h2>
      <div className={css.text}>
      Добавьте товары, и они окажутся здесь
      </div>
      <Button to={PAGE_HOME}>В каталог</Button>
    </div>
  )
}
export default React.memo(EmptyBasket)
