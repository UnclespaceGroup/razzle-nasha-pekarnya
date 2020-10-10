// packages
import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import Swiper from 'react-id-swiper'
import Container from 'components/Container/Container'
import css from './bannerSlider.module.scss'
import BgImage from 'components/BgImage/BgImage'
import useDevice from 'hooks/useDevice'
import Button from 'components/Button/Button'

const params = {
  autoplay: {
    delay: 5000
  },
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  loop: true,
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true
}

const BannerSlider = ({ items }) => {
  const { currentDevice } = useDevice()
  return (
    <span className={cn(css[currentDevice], css.container)}>
      <Swiper {...params}>
        {_.map(items, ({
          title,
          text,
          img,
          link
        }, key) => (
          <span key={key} className={css.slide}>
            <Container>
              <div className={css.wrapper}>
                <h2 className={css.title}>{title}</h2>
                <div className={css.text}>{text}</div>
                {link && <Button className={css.btn} to={link}>Подробнее</Button>}
              </div>
            </Container>
            <BgImage className={css.img} img={img} />
          </span>
        ))}
      </Swiper>
    </span>
  )
}

export default React.memo(BannerSlider)
