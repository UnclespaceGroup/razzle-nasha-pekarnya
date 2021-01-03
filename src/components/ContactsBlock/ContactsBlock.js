import React from 'react'
import css from './contactsBlock.module.scss'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_ORDER_INFO from 'api/fetch/FETCH_ORDER_INFO'

const ContactsBlock = ({ className }) => {
  const {
    response
  } = useRemoteData(FETCH_ORDER_INFO, [])

  return (
    <div className={cn(css.flex, className)}>
      {
        _.map(response, ({ title, value }, key) => (
          <div className={css.contact} key={key}>
            <div className={css.title}>{title}</div>
            {
              Array.isArray(value)
                ? value.map((item, k) => (
                  <div className={css.value} key={k}>{item}</div>
                ))
                : <div className={css.value}>{value}</div>
            }
          </div>
        ))
      }
    </div>
  )
}
ContactsBlock.propTypes = {
  className: PropTypes.string
}
export default React.memo(ContactsBlock)
