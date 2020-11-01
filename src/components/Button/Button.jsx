// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './button.module.scss'
import { Link } from 'react-router-dom'

const Button = ({ className, to, variant, ...props }) => {
  const Tag = to ? Link : 'button'

  return (
    <Tag
      className={cn(className,
        css.container,
        css[variant]
      )}
      to={to}
      {...props}
    />
  )
}
Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.any
}
export default React.memo(Button)
