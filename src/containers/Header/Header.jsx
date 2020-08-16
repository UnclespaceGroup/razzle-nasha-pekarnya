// packages
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import useDevice from 'hooks/useDevice'
import css from './header.module.scss'
import { MdMenu, MdPhone } from 'react-icons/md'
import Container from 'components/Container/Container'
import DesktopOnly from 'utils/DesktopOnly'
import Button from 'components/Button/Button'

const Header = ({ className }) => {
  const { currentDevice, isSmall } = useDevice()

  return (
    <div className={cn(css.back, css[currentDevice])}>
      <div className={css.container}>
        <Container className={css.wrapper}>
          <div className={css.left}>
            <MdMenu className={css.burger} />
            <DesktopOnly>
              <div className={css.text}>
              Доставка в Сыктывкаре<br />до 50 минут
              </div>
            </DesktopOnly>
          </div>
          <img className={css.logo} src='/images/logo-brown.svg' alt='' />
          <div className={css.right}>
            <DesktopOnly>
              <a href='tel:8 (800) 535 35 35' className={css.phone}>
                {isSmall ? <MdPhone /> : '8 (800) 535 35 35'}
              </a>
            </DesktopOnly>
            <Button className={css.btnBasket}>
              15 000 руб
            </Button>
          </div>
        </Container>
        <div className={css.bootom} />
      </div>
    </div>
  )
}
Header.propTypes = {
  className: PropTypes.string
}
export default React.memo(Header)
