import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from 'components/Picker/Picker.module.scss'
import useDevice from 'hooks/useDevice'

const Picker = ({ className, count = 0, onChange, variant }) => {
  const { currentDevice } = useDevice()
  const addValue = e => {
    e.preventDefault()
    onChange(count + 1)
  }

  return (
    <div className={cn(css[variant], css[currentDevice], className)} onClick={e => e.preventDefault()}>
      {
        !count
          ? (
            <div className={css.plus} onClick={addValue}>+</div>
          )
          : (
            <div className={css.picker}>
              <button className={css.signMinus} onClick={() => onChange(count - 1)}>-</button>
              <div>{count}</div>
              <button className={css.signPlus} onClick={addValue}>+</button>
            </div>
          )
      }
    </div>
  )
}
Picker.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['black'])
}
export default React.memo(Picker)
