import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './Input.module.scss'
import Label from 'components/Label/Label'

const Input = ({ label, input, prompt, className, meta, type, ...props }) => {
  const { active, error, touched } = meta

  return (
    <div
      className={cn(
        css.container,
        className
      )}
    >
      <div
        className={cn(
          css.wrapper
        )}
      >
        <Label>{label}</Label>
        <input
          className={cn(
            css.input,
            active && css.active,
            (error && touched) && css.hasError
          )}
          {...input}
          {...props}
          type={type}
        />
      </div>
      <div className={css.prompt}>
        {(error && touched) ? <span className={css.error}>{error}</span> : prompt}
      </div>
    </div>
  )
}
Input.propTypes = {
  label: PropTypes.node,
  input: PropTypes.any,
  prompt: PropTypes.node,
  className: PropTypes.string,
  meta: PropTypes.any,
  type: PropTypes.any
}
export default React.memo(Input)
