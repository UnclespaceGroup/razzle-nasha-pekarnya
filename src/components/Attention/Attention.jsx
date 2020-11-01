import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './attention.module.scss'

const Attention = ({ variant, text }) => {
  return (
    <div className={cn(css.container, css[variant])}>
      {text}
    </div>
  )
}
Attention.propTypes = {
  variant: PropTypes.oneOf(['danger', 'success']),
  text: PropTypes.node
}
export default React.memo(Attention)
