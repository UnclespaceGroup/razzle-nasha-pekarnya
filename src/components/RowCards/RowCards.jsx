// packages
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import _ from 'lodash'
import useDevice from 'hooks/useDevice'
import css from './rowCards.module.scss'

const RowCards = ({ className, items, children, renderChild }) => {
  const { currentDevice } = useDevice()

  return (
    <ul className={cn(className, css[currentDevice], css.row)}>
      {_.map(items, renderChild || ((item, key) => (
        <li
          className={css.card}
          key={key}
        >
          {React.cloneElement(children, item)}
        </li>
      )))}
    </ul>
  )
}
RowCards.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array
}
export default React.memo(RowCards)
