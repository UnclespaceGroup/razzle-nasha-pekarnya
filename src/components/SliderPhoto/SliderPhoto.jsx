// packages
import React from 'react'
import Swiper from 'react-id-swiper'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import BgImage from 'components/BgImage/BgImage'
import css from './sliderPhoto.module.scss'
import 'react-id-swiper/src/styles/css/swiper.css'

const params = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

const SliderPhoto = ({ className, items, slideClassName }) => {
  if (!items) return <div />
  return (
    <div className={cn(className, css.container)}>
      <Swiper {...params}>
        {_.map(items, (item, key) => (
          <span key={key}>
            <BgImage
              img={item}
              className={slideClassName}
            />
          </span>
        ))}
      </Swiper>
    </div>
  )
}
SliderPhoto.propTypes = {
  className: PropTypes.string,
  slideClassName: PropTypes.string,
  items: PropTypes.array
}
export default React.memo(SliderPhoto)
