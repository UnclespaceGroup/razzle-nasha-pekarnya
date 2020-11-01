// packages
import React from 'react'
import cn from 'classnames'
import css from './topBanner.module.scss'
import Container from 'components/Container/Container'
import BgImage from 'components/BgImage/BgImage'
import Button from 'components/Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { PAGE_PRODUCTS } from 'constants/routes'

const TopBanner = ({ title, text, img }) => {
  return (
    <div className={cn(css.container)}>
      <Container>
        <div className={css.wrapper}>
          <div>
            <h1 className={css.title}>{title}</h1>
            <div className={css.text}>
              {text}
            </div>
          </div>
          <div>
            <Button to={PAGE_PRODUCTS}>
              <span>Каталог товаров</span>
              <MdKeyboardArrowRight />
            </Button>
          </div>
        </div>
      </Container>
      <BgImage img={img} className={css.img} />
    </div>
  )
}
export default React.memo(TopBanner)
