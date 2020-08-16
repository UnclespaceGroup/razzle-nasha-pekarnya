// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import BgImage from 'components/BgImage/BgImage'
import css from './cardProduct.module.scss'
import useDevice from 'hooks/useDevice'
import Picker from 'components/Picker/Picker'
import { Link } from 'react-router-dom'

const CardProduct = ({ className, to, img, title, price, ...pickerProps }) => {
  const { currentDevice } = useDevice()
  const Tag = to ? Link : 'div'

  return (
    <Tag to={to} className={cn(css[currentDevice], css.container)}>
      <BgImage img={img} className={css.img} />
      <div className={css.picker}>
        <Picker {...pickerProps} />
      </div>
      <div className={css.wrapper}>
        <h3 className={css.title}>{title}</h3>
        {price && <div className={css.price}>{price} руб.</div>}
      </div>
    </Tag>
  )
}
CardProduct.propTypes = {
  className: PropTypes.string
}
export default React.memo(CardProduct)
