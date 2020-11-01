// packages
import React from 'react'
import PropTypes from 'prop-types'
import BgImage from 'components/BgImage/BgImage'
import css from './cardProduct.module.scss'
import Picker from 'components/Picker/Picker'
import { Link } from 'react-router-dom'
import LabelTag from 'components/LabelTag/LabelTag'
import Loader from 'components/Loader/Loader'
import { MdArrowForward } from 'react-icons/md'

const CardProduct = ({ className, to, cardImg, title, price, discountPrice, discount, loaderProps, subtitle, ...pickerProps }) => {
  const Tag = to ? Link : 'div'
  const oldPrice = discount && price

  return (
    <Loader height={380} {...loaderProps}>
      <Tag to={to} className={css.container}>
        <BgImage img={cardImg} className={css.img}>
          {discount && <LabelTag title={`скидка ${discount}%`} />}
        </BgImage>
        <div className={css.picker}>
          <Picker {...pickerProps} />
        </div>
        <div className={css.wrapper}>
          <div>
            <div className={css.subtitle}>{subtitle}</div>
            <h3 className={css.title}>{title}</h3>
          </div>
          <div className={css.priceBlock}>
            {discountPrice && <span className={css.price}>{discountPrice} руб.</span>}
            {oldPrice && <span className={css.oldPrice}>{oldPrice} руб.</span>}
          </div>
          <MdArrowForward className={css.arrow} />
        </div>
      </Tag>
    </Loader>
  )
}
CardProduct.propTypes = {
  className: PropTypes.string,
  loaderProps: PropTypes.object
}
export default React.memo(CardProduct)
