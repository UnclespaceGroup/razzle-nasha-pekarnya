import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './attention.module.scss'
import useDevice from 'hooks/useDevice'

const Attention = ({ variant, text }) => {
  const { currentDevice } = useDevice()

  return (
    <div className={cn(css.container, css[currentDevice], css[variant])}>
      {text}
    </div>
  )
}
Attention.propTypes = {
  variant: PropTypes.oneOf(['danger', 'success']),
  text: PropTypes.node
}
export default React.memo(Attention)
