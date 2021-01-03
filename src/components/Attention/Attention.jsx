import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './attention.module.scss'

const Attention = ({ variant, text, title }) => {
  return (
    <div className={cn(css.container, css[variant])}>
      {title && <b>{title}</b>}
      <div>{text}</div>
    </div>
  )
}
Attention.propTypes = {
  variant: PropTypes.oneOf(['danger', 'success']),
  text: PropTypes.node
}
export default React.memo(Attention)
