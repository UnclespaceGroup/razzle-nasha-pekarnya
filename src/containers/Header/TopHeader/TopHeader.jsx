// packages
import React from 'react'
import PropTypes from 'prop-types'
import css from './topHeader.module.scss'
import Container from 'components/Container/Container'
import { MdMenu } from 'react-icons/md/index'
import DesktopOnly from 'utils/DesktopOnly'
import Button from 'components/Button/Button'
import cn from 'classnames'
import useDevice from 'hooks/useDevice'
import { PAGE_BASKET, PAGE_HOME } from 'constants/routes'
import { Link } from 'react-router-dom'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'
import { MdShoppingBasket } from 'react-icons/md'

const TopHeader = ({ clickOpen, price }) => {
  const { currentDevice } = useDevice()
  const {
    response: {
      phone
    } = {}
  } = useRemoteData(FETCH_CONTACTS)

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
          <Link to={PAGE_HOME}>
            <img className={css.logo} src='/images/logo-brown.svg' alt='' />
          </Link>
          <div className={css.right}>
            <DesktopOnly>
              <a href={`tel:${phone}`} className={css.phone}>
                {phone}
              </a>
            </DesktopOnly>
            <Button className={css.btnBasket} to={PAGE_BASKET}>
              <span>{price}</span>
              <MdShoppingBasket />
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
