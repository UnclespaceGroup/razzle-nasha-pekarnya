// packages
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import _ from 'lodash'
import useDevice from 'hooks/useDevice'
import css from './rowCards.module.scss'

const RowCards = ({ className, items, children, renderChild, count }) => {
  const { currentDevice } = useDevice()

  return (
    <ul className={cn(className, css[currentDevice], css.row)}>
      {_.map(items, renderChild || ((item, key) => (
        <li
          className={cn(css.card, css[`card_${count}`])}
          key={key}
        >
          {React.cloneElement(children, item)}
        </li>
      )))}
    </ul>
  )
}
RowCards.defaultProps = {
  count: 3
}
RowCards.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  count: PropTypes.number
}
export default React.memo(RowCards)
