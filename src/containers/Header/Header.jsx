// packages
import React from 'react'
import PropTypes from 'prop-types'
import useDevice from 'hooks/useDevice'
import css from './header.module.scss'
import { MdMenu } from 'react-icons/md'
import Container from 'components/Container/Container'

const Header = ({ className, isSmall }) => {
  const { currentDevice } = useDevice()

  return (
    <div className={css[currentDevice]}>
      <Container className={css.wrapper}>
        <div className={css.left}>
          <MdMenu className={css.burger} />
          <div className={css.text}>
            Доставка в Сыктывкаре<br />до 50 минут
          </div>
        </div>
        <img className={css.logo} src='/images/logo-brown.svg' alt='' />
        <div className={css.right}>
          <a href='tel:8 (800) 535 35 35' className={css.phone}>8 (800) 535 35 35</a>
        </div>
      </Container>
      <div className={css.bootom} />
    </div>
  )
}
Header.propTypes = {
  className: PropTypes.string
}
export default React.memo(Header)
