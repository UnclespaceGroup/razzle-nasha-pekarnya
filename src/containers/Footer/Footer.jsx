// packages
import React from 'react'
import _ from 'lodash'
import BgImage from 'components/BgImage/BgImage'
import css from './footer.module.scss'
import Container from 'components/Container/Container'
import useDevice from 'hooks/useDevice'
import { items } from './data'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { currentDevice } = useDevice()
  return (
    <footer className={css[currentDevice]}>
      <BgImage local img='/api/footer-image.jpg'>
        <div className={css.wrapper}>
          <Container>
            <img className={css.logo} src='/images/logo-white.svg' />
            <div className={css.row}>
              <div className={css.nav}>
                {_.map(items, (item, key) => (
                  <Link key={key} to={item.to}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className={css.contacts}>выа</div>
            </div>
          </Container>
        </div>
      </BgImage>
      <div className={css.bottom}>
        <Container className={css.row}>
          <div>Разработано Unclespace group</div>
        </Container>
      </div>
    </footer>
  )
}
export default React.memo(Footer)
