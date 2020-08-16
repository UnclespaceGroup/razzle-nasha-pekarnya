// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import BgImage from 'components/BgImage/BgImage'
import css from './cardProduct.module.scss'
import useDevice from 'hooks/useDevice'

const CardProduct = ({ className, img, title, price }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={cn(css[currentDevice], css.container)}>
      <BgImage img={img} className={css.img} />
      <div className={css.wrapper}>
        <h3 className={css.title}>{title}</h3>
        {price && <div className={css.price}>{price} руб.</div>}
      </div>
    </div>
  )
}
CardProduct.propTypes = {
  className: PropTypes.string
}
export default React.memo(CardProduct)
