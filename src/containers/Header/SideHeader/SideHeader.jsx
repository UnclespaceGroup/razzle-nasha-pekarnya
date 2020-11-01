// packages
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import cn from 'classnames'
import { useRemoteData } from '@aic/react-remote-data-provider'
import { Link } from 'react-router-dom'
import { MdClose, MdPhone } from 'react-icons/md'
// styles
import css from './sideHeader.module.scss'
// constants
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'
import { items } from 'constants/navigation'

const SideHeader = ({ isOpen, onClose }) => {
  const {
    response: {
      phone
    } = {}
  } = useRemoteData(FETCH_CONTACTS)

  return (
    <div
      className={cn(css.container, isOpen && css.isOpen)}
    >
      <div
        className={css.wrapper}
        onClick={e => e.preventDefault()}
      >
        <div className={css.top}>
          <span>Меню сайта</span>
          <button onClick={onClose}>
            <MdClose />
          </button>
        </div>
        <div className={css.middle}>
          <ul>
            {_.map(items, (item, key) => (
              <li key={key}>
                <Link to={item.to} className={css.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <img src='/images/logo-brown.svg' alt='' />
        </div>
        <div className={css.bottom}>
          <MdPhone />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
      <div className={css.back} onClick={onClose} />
    </div>
  )
}
SideHeader.propTypes = {
  isOpen: PropTypes.bool
}
export default React.memo(SideHeader)
