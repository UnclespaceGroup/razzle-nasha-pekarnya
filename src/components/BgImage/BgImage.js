import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './BgImage.module.scss'
import getImgName from 'utils/getImgName'

const BgImage = ({ img, className, children, local }) => {
  const imgUrl = useMemo(() => local ? img : getImgName(img), [img, local])

  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className={cn(css.container, className)}
    >
      {children}
    </div>
  )
}
BgImage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  local: PropTypes.bool,
  img: PropTypes.any
}
export default React.memo(BgImage)
