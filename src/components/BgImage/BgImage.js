import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './BgImage.module.scss'

const BgImage = ({ img, className, children }) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    className={cn(css.container, className)}
  >
    {children}
  </div>
)
BgImage.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}
export default React.memo(BgImage)
