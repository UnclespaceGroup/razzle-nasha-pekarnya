import React from 'react'
import PropTypes from 'prop-types'
import css from './Bg.module.scss'
import cn from 'classnames'

const Bg = ({ children, color, className }) => (
  <div
    className={cn(css[color], className)}
  >
    {children}
  </div>
)
Bg.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['white', 'grey'])
}
export default React.memo(Bg)
