import React from 'react'
import PropTypes from 'prop-types'
import css from './Bg.module.scss'

const Bg = ({ children, color }) => (
  <div
    className={css[color]}
  >
    {children}
  </div>
)
Bg.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['white', 'grey'])
}
export default React.memo(Bg)
