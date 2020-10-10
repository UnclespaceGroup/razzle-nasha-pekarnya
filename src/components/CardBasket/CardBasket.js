import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from 'components/CardBasket/cardBasket.module.scss'
import BgImage from 'components/BgImage/BgImage'
import { MdDelete } from 'react-icons/md'
import useDevice from 'hooks/useDevice'
import Picker from 'components/Picker/Picker'

const CardBasket = ({ cardImg, title, discountPrice, count, onChange, className }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={cn(css.container, css[currentDevice], className)}>
      <div className={css.left}>
        <BgImage img={cardImg} className={css.img} />
        <div>
          <div className={css.item}>
            <div className={css.title}>Наименование</div>
            <div className={css.value}>{title}</div>
          </div>
          <div className={css.item}>
            <div className={css.title}>Цена за одно</div>
            <div className={css.value}>{discountPrice} руб.</div>
          </div>
        </div>
      </div>
      <div className={css.right}>
        <Picker variant='black' count={count} onChange={onChange} />
        <button onClick={() => onChange(0)}>
          <MdDelete className={css.remove} />
        </button>
      </div>
    </div>
  )
}
CardBasket.propTypes = {
  img: PropTypes.any,
  title: PropTypes.node,
  discountPrice: PropTypes.node,
  count: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string
}
export default React.memo(CardBasket)
