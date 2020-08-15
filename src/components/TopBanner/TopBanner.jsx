// packages
import React from 'react'
import PropTypes from 'prop-types'
import useDevice from 'hooks/useDevice'
import css from './topBanner.module.scss'
import Container from 'components/Container/Container'
import BgImage from 'components/BgImage/BgImage'
import Button from 'components/Button/Button'
import { MdArrowForward } from 'react-icons/md'

const TopBanner = ({ className }) => {
  const { currentDevice } = useDevice()

  return (
    <div className={css[currentDevice]}>
      <Container>
        <div className={css.wrapper}>
          <div>
            <h1 className={css.title}>Наша пекарня</h1>
            <div className={css.text}>
              Описание этой невероятно жесткой акции, которая можетт быть на несколко строк
            </div>
          </div>
          <div>
            <Button>
            Подробнее
              <MdArrowForward />
            </Button>
          </div>
        </div>
      </Container>
      <BgImage img='/api/image-home-banner.jpg' local className={css.img} />
    </div>
  )
}
TopBanner.propTypes = {
  className: PropTypes.string
}
export default React.memo(TopBanner)
