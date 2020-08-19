// packages
import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from 'components/LabelTag/labelTag.module.scss'
import useDevice from 'hooks/useDevice'

const LabelTag = ({ className, title, color }) => {
  const { currentDevice } = useDevice()

  return (
    <div
      style={{ backgroundColor: color }}
      className={cn(className, css.tag, css[currentDevice])}
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
