// packages
import React from 'react'
import PropTypes from 'prop-types'
import css from './cardNews.module.scss'
import BgImage from 'components/BgImage/BgImage'
import { Link } from 'react-router-dom'

const CardNews = ({ className, img, text, title, to }) => {
  const Tag = to ? Link : 'span'

  return (
    <BgImage img={img} className={css.container}>
      <Tag to={to} className={css.wrapper}>
        <h3 className={css.title}>
          {title}
        </h3>
        <div className={css.text}>{text}</div>
      </Tag>
    </BgImage>
  )
}
CardNews.propTypes = {
  className: PropTypes.string
}
export default React.memo(CardNews)
