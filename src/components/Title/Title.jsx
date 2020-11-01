// packages
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './title.module.scss'

const Title = ({ className, Tag, ...props }) => {
  return (
    <div className={cn(className, css.container)}>
      <Tag
        {...props}
      />
    </div>
  )
}
Title.propTypes = {
  className: PropTypes.string
}
Title.defaultProps = {
  Tag: 'h2'
}
export default React.memo(Title)
