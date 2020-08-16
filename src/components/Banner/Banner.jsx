// packages
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './banner.module.scss'
import useDevice from 'hooks/useDevice'
import Container from 'components/Container/Container'
import BgImage from 'components/BgImage/BgImage'

const Banner = ({ className }) => {
  const { currentDevice } = useDevice()

  return (
    <div className={cn(css[currentDevice], css.container, className)}>
      <Container>
        <div className={css.wrapper}>
          <h2 className={css.title}>Доставка бесплатно</h2>
          <div className={css.text}>При заказе от 400 рублей каждый четный четверг самого короткого месяца высокосного года</div>
        </div>
      </Container>
      <div className={css.side}>
        <BgImage local className={css.img} img='/api/image-home-banner.jpg' />
      </div>
    </div>
  )
}
Banner.propTypes = {
  className: PropTypes.string
}
export default React.memo(Banner)
