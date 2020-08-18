import React from 'react'
import cn from 'classnames'
import { MdClose } from 'react-icons/md'
import PropTypes from 'prop-types'
import useDevice from 'hooks/useDevice'
import css from './Input.module.scss'

const Input = ({ label, input, prompt, className, meta, type }) => {
  const { active, error, touched } = meta
  const { value, onChange } = input
  const { currentDevice } = useDevice()

  return (
    <div
      className={cn(
        css.container,
        css[currentDevice],
        className)}
    >
      <div
        className={cn(
          css.wrapper,
          (active || value) && css.hasValue,
          active && css.active,
          (error && touched) && css.hasError
        )}
      >
        <label className={css.label}>{label}</label>
        <input
          className={css.input}
          {...input}
          type={type}
        />
        {value && <MdClose className={css.clear} onClick={() => onChange(undefined)} />}
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
