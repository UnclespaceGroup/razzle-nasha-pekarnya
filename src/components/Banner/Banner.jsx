// packages
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './banner.module.scss'
import useDevice from 'hooks/useDevice'
import Container from 'components/Container/Container'
import BgImage from 'components/BgImage/BgImage'

const Banner = ({ className, title, text, img, AsTitle }) => {
  const { currentDevice } = useDevice()

  return (
    <div className={cn(css[currentDevice], css.container, className)}>
      <Container>
        <div className={css.wrapper}>
          <AsTitle className={css.title}>{title}</AsTitle>
          <div className={css.text}>{text}</div>
        </div>
      </Container>
      <div className={css.side}>
        <BgImage className={css.img} img={img} />
      </div>
    </div>
  )
}
Banner.defaultProps = {
  AsTitle: 'h2'
}
Banner.propTypes = {
  className: PropTypes.string
}
export default React.memo(Banner)
