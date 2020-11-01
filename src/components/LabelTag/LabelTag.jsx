// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './labelTag.module.scss'

const LabelTag = ({ className, title, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cn(className, css.tag)}
    >
      {title}
    </div>
  )
}
LabelTag.propTypes = {
  className: PropTypes.string
}
LabelTag.defaultProps = {
  color: '#EB5757'
}
export default React.memo(LabelTag)
