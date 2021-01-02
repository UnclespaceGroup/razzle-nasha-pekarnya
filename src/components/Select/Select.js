import React, { useCallback, useMemo } from 'react'
import _ from 'lodash'
import cn from 'classnames'
import css from './Select.module.scss'
import Label from 'components/Label/Label'
import ReactSelect from 'react-select'
import './Select.scss'

const Select = ({
  label,
  input,
  prompt,
  className,
  meta,
  type,
  options,
  ...props
}) => {
  const { error, touched } = meta

  const handleChange = useCallback(data => {
    input.onChange(data.value)
  }, [input])

  const value = useMemo(() =>
    _.find(options, item => item.value === input?.value)
  , [options, input])

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
        <ReactSelect
          classNamePrefix='react-select'
          {...input}
          {...props}
          options={options}
          type={type}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className={css.prompt}>
        {(error && touched) ? <span className={css.error}>{error}</span> : prompt}
      </div>
    </div>
  )
}
export default React.memo(Select)
