// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './label.module.scss'
import useDevice from 'hooks/useDevice'

const Label = ({ className, children }) => {
  const { currentDevice } = useDevice()
  return (
    <label className={cn(className, css.label, css[currentDevice])}>
      {children}
    </label>
  )
}
Label.propTypes = {
  className: PropTypes.string
}
export default React.memo(Label)
