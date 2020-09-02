// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './loader.module.scss'

const Loader = ({ className, children, isEmpty, height }) => {
  if (isEmpty) {
    return (
      <div
        className={cn(css.loader, className)}
        style={{ height: `${height / 10}rem` }}
      />
    )
  }

  return children
}
Loader.propTypes = {
  className: PropTypes.string
}
export default React.memo(Loader)
