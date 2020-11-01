import React from 'react'
import css from './contactsBlock.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'

const contacts = [
  {
    title: 'Способ оплаты',
    value: 'Картой, онлайн'
  },
  {
    title: 'Время приема заказов',
    value: 'С 10:00 до 22:44'
  },
  {
    title: 'Рабочие дни',
    value: 'Пн, вт, ср, чт, пт, сб, вс'
  },
  {
    title: 'Доставка',
    value: 'г. Сыктывкар'
  },
  {
    title: 'Юридическая информация',
    value: 'ИП Мелихов Александр Александрович'
  }
]

// todo добавить в CMS

const ContactsBlock = ({ className }) => {
  return (
    <div className={cn(css.flex, className)}>
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
ContactsBlock.propTypes = {
  className: PropTypes.string
}
export default React.memo(ContactsBlock)
