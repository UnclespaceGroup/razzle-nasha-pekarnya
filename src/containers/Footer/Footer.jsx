// packages
import React from 'react'
import BgImage from 'components/BgImage/BgImage'
import css from './footer.module.scss'
import Container from 'components/Container/Container'
import useDevice from 'hooks/useDevice'

const Footer = () => {
  const { currentDevice } = useDevice()
  return (
    <footer className={css[currentDevice]}>
      <BgImage local img='/api/footer-image.jpg'>
        <div className={css.wrapper}>
          <Container>
            <img className={css.logo} src='/images/logo-white.svg' />
            <div className={css.row}>
              <div className={css.nav}>Лвв</div>
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
