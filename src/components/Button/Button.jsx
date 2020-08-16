// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import useDevice from 'hooks/useDevice'
import css from './button.module.scss'

const Button = ({ className, ...props }) => {
  const { currentDevice } = useDevice()
  return (
    <button
      className={cn(className, css.container, css[currentDevice])}
      {...props}
    />
  )
}
Button.propTypes = {
  className: PropTypes.string
}
export default React.memo(Button)
