import cn from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import css from './textarea.module.scss'
import useDevice from 'hooks/useDevice'
import Label from 'components/Label/Label'

const TextArea = ({ label, input, prompt, className, meta, ...props }) => {
  const { active, error, touched } = meta
  const { value } = input
  const { currentDevice } = useDevice()

  return (
    <div
      className={cn(
        css.container,
        css[currentDevice],
        className
      )}
    >
      <Label>{label}</Label>
      <textarea
        className={cn(
          css.input,
          (active || value) && css.hasValue,
          active && css.active
        )}
        rows={4}
        {...input}
        {...props}
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
