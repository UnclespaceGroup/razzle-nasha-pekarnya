// packages
import React from 'react'
import useDevice from 'hooks/useDevice'
import cn from 'classnames'
import css from './topBanner.module.scss'
import Container from 'components/Container/Container'
import BgImage from 'components/BgImage/BgImage'
import Button from 'components/Button/Button'
import { MdArrowForward } from 'react-icons/md'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { PAGE_PRODUCTS } from 'constants/routes'

const TopBanner = () => {
  const { currentDevice } = useDevice()

  return (
    <div className={cn(css[currentDevice], css.container)}>
      <Container>
        <div className={css.wrapper}>
          <div>
            <h1 className={css.title}>Наша пекарня</h1>
            <div className={css.text}>
              Описание этой невероятно жесткой акции, которая можетт быть на несколко строк
            </div>
          </div>
          <div>
            <Button to={PAGE_PRODUCTS}>
              Каталог товаров
              <span>
                <MdArrowForward />
              </span>
            </Button>
          </div>
        </div>
      </Container>
      <BgImage img='/api/image-home-banner.jpg' local className={css.img} />
      <span id='bannerBottom' />
    </div>
  )
}
export default React.memo(TopBanner)
