import cn from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import css from './textarea.module.scss'
import useDevice from 'hooks/useDevice'

const TextArea = ({ label, input, prompt, className, meta }) => {
  const { active, error, touched } = meta
  const { value } = input
  const { currentDevice } = useDevice()

  return (
    <div
      className={cn(
        css.container,
        (active || value) && css.hasValue,
        active && css.active,
        css[currentDevice],
        className
      )}
    >
      <label className={css.label}>{label}</label>
      <textarea
        className={css.input}
        rows={4}
        {...input}
      />
      <div className={css.prompt}>
        {(error && touched) ? <span className={css.error}>{error}</span> : prompt}
      </div>
    </div>
  )
}
TextArea.propTypes = {
  label: PropTypes.node,
  input: PropTypes.any,
  prompt: PropTypes.node,
  className: PropTypes.string,
  meta: PropTypes.any
}
export default React.memo(TextArea)
