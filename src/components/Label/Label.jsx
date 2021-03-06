// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './label.module.scss'

const Label = ({ className, children }) => {
  return (
    <label className={cn(className, css.label)}>
      {children}
    </label>
  )
}
Label.propTypes = {
  className: PropTypes.string
}
export default React.memo(Label)
