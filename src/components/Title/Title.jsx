// packages
import React from 'react'
import PropTypes from 'prop-types'
import useDevice from 'hooks/useDevice'
import cn from 'classnames'
import css from './title.module.scss'

const Title = ({ className, Tag, ...props }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={cn(className, css[currentDevice])}>
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
