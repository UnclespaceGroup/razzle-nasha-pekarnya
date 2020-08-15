// packages
import React from 'react'
import PropTypes from 'prop-types'
import css from './cardNews.module.scss'
import useDevice from 'hooks/useDevice'
import BgImage from 'components/BgImage/BgImage'

const CardNews = ({ className, img, text, title }) => {
  const { currentDevice } = useDevice()

  return (
    <BgImage img={img} className={css[currentDevice]}>
      <div className={css.wrapper}>
        <h3 className={css.title}>
          {title}
        </h3>
        <div className={css.text}>{text}</div>
      </div>
    </BgImage>
  )
}
CardNews.propTypes = {
  className: PropTypes.string
}
export default React.memo(CardNews)
