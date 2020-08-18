import React from 'react'
import cn from 'classnames'
import useDevice from 'hooks/useDevice'
import css from './contacts.module.scss'

const Contacts = ({ className, contacts }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={cn(className, css[currentDevice])}>
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
