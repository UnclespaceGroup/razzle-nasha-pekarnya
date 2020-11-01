import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './checkBox.module.scss'

const CheckBox = ({ input, label, meta = {}, prompt }) => {
  const { error, touched } = meta

  return (
    <div>
      <label className={cn(css.container, (error && touched) && css.hasError)}>
        <input type='checkbox' {...input} />
        <div className={css.label}>{label}</div>
      </label>
      <div className={css.prompt}>
        {(error && touched) ? <span className={css.error}>{error}</span> : prompt}
      </div>
    </div>
  )
}
CheckBox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.node,
  meta: PropTypes.object,
  prompt: PropTypes.node
}
export default React.memo(CheckBox)
