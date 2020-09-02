// packages
import React from 'react'
import _ from 'lodash'
import BgImage from 'components/BgImage/BgImage'
import css from './footer.module.scss'
import Container from 'components/Container/Container'
import useDevice from 'hooks/useDevice'
import { items } from 'constants/navigation'
import { Link } from 'react-router-dom'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'
import { MdLocationOn, MdMail } from 'react-icons/md'

const Footer = () => {
  const { currentDevice } = useDevice()
  const {
    response: {
      phone,
      email,
      address
    } = {}
  } = useRemoteData(FETCH_CONTACTS)

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
              <div className={css.contacts}>
                {email && <a href={`mailto:${email}`} className={css.contact}><MdMail />{email}</a>}
                {address && <div className={css.contact}><MdLocationOn />{address}</div>}
                {phone && <a href={`tel:${phone}`} className={css.phone}>{phone}</a>}
              </div>
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
