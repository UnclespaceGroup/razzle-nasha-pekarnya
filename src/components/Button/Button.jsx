// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import useDevice from 'hooks/useDevice'
import css from './button.module.scss'
import { Link } from 'react-router-dom'

const Button = ({ className, to, ...props }) => {
  const { currentDevice } = useDevice()
  const Tag = to ? Link : 'button'

  return (
    <Tag
      className={cn(className, css.container, css[currentDevice])}
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
