// packages
import React from 'react'
import PropTypes from 'prop-types'
import BgImage from 'components/BgImage/BgImage'
import css from './cardCategory.module.scss'
import useDevice from 'hooks/useDevice'

const CardCategory = ({ className, title, img, ...otherProps }) => {
  const { currentDevice } = useDevice()

  return (
    <BgImage img={img} className={css[currentDevice]} {...otherProps}>
      <div className={css.wrapper}>
        <div className={css.title}>
          {title}
        </div>
      </div>
    </BgImage>
  )
}
CardCategory.propTypes = {
  className: PropTypes.string
}
export default React.memo(CardCategory)
