export const required = value => (value ? undefined : 'Поле обязательно')

export const mustBeNumber = value => (isNaN(value) ? 'Только числа' : undefined)

export const minValue = (min, message) => value =>
  isNaN(value) || value > min ? undefined : (message || `Должно быть больше, чем ${min}`)

export const maxValue = (max, message) => value =>
  isNaN(value) || value <= max ? undefined : (message || `Должно быть меньше чем ${max}`)

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
