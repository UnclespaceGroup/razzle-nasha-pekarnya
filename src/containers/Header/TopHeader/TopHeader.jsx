// packages
import React from 'react'
import PropTypes from 'prop-types'
import css from './topHeader.module.scss'
import Container from 'components/Container/Container'
import { MdMenu, MdPhone } from 'react-icons/md/index'
import DesktopOnly from 'utils/DesktopOnly'
import Button from 'components/Button/Button'
import cn from 'classnames'
import useDevice from 'hooks/useDevice'

const TopHeader = ({ clickOpen, price }) => {
  const { currentDevice, isSmall } = useDevice()

  return (
    <header className={cn(css.back, css[currentDevice])}>
      <nav className={css.container}>
        <Container className={css.wrapper}>
          <div className={css.left}>
            <button onClick={clickOpen}>
              <MdMenu className={css.burger} />
            </button>
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
              {price}
            </Button>
          </div>
        </Container>
        <div className={css.bootom} />
      </nav>
    </header>
  )
}
TopHeader.propTypes = {
  clickOpen: PropTypes.func
}
export default React.memo(TopHeader)
