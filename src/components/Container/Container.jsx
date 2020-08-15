// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './container.module.scss'
import useDevice from 'hooks/useDevice'

const Container = ({ className, children }) => {
  const { currentDevice } = useDevice()

  return (
    <div className={cn(className, css[currentDevice])}>
      {children}
    </div>
  )
}
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
export default React.memo(Container)
