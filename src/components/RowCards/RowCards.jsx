// packages
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import _ from 'lodash'
import useDevice from 'hooks/useDevice'
import css from './rowCards.module.scss'
import CardLink from 'components/CardLink/CardLink'
import { PAGE_PRODUCTS } from 'constants/routes'

const RowCards = ({
  className,
  items,
  children,
  renderChild,
  count,
  loaderProps,
  cardClassName,
  CardMoreComponent
}) => {
  const { currentDevice } = useDevice()

  return (
    <ul className={cn(className, css[currentDevice], css.row)}>
      {_.map(items || _.times(6, () => {}),
        renderChild || ((item, key) => (
          <li
            className={cn(css.card, css[`card_${count}`], cardClassName)}
            key={key}
          >
            {React.cloneElement(children, { ...item, loaderProps })}
          </li>
        )))}
      {CardMoreComponent &&
      <li
        className={cn(css.card, css[`card_${count}`], cardClassName)}
      >
        {CardMoreComponent}
      </li>}
    </ul>
  )
}
RowCards.defaultProps = {
  count: 3
}
RowCards.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  count: PropTypes.number,
  loaderProps: PropTypes.object,
  CardMoreComponent: PropTypes.object
}
export default React.memo(RowCards)
