// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './container.module.scss'

const Container = ({ className, children }) => {
  return (
    <div className={cn(className, css.container)}>
      {children}
    </div>
  )
}
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
export default React.memo(Container)
