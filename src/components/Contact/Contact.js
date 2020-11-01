import React from 'react'
import css from './contacts.module.scss'

const Contacts = ({ className, contacts }) => {
  return (
    <div className={className}>
      {
        contacts.map(({ title, value }, key) => (
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
export default React.memo(Contacts)
