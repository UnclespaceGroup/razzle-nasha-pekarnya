import { composeValidators, maxValue, minValue, required } from 'utils/validators'

const regionsOptions = [
  {
    value: 'В пределах города',
    label: 'В пределах города'
  },
  {
    value: 'Чов',
    label: 'Чов'
  },
  {
    value: 'Эжва',
    label: 'Эжва'
  }
]

export const fields = {
  name: {
    name: 'name',
    label: 'Ваше имя',
    placeholder: 'Иван Петров',
    // validate: required
  },
  region: {
    name: 'region',
    label: 'Район',
    options: regionsOptions
  },
  street: {
    name: 'street',
    label: 'Улица',
    placeholder: 'Коммунистическая',
    prompt: 'Введите вашу улицу',
    // validate: required
  },
  house: {
    name: 'house',
    label: 'Дом',
    placeholder: '24',
    prompt: '',
    // validate: required
  },
  frontDoor: {
    name: 'frontDoor',
    label: 'Подъезд',
    placeholder: '2',
    prompt: '',
    type: 'number',
    // validate: composeValidators(minValue(0), maxValue(15), required)
  },
  floor: {
    name: 'floor',
    label: 'Этаж',
    type: 'number',
    placeholder: '12',
    // validate: composeValidators(minValue(0), maxValue(25), required)
  },
  flat: {
    name: 'flat',
    label: 'Квартира',
    type: 'number',
    placeholder: '144',
    // validate: composeValidators(minValue(0), maxValue(1000), required)
  },
  agree: {
    name: 'agree',
    label: 'Я согласен с политикой конфиденциальности',
    // validate: required
  },
  textarea: {
    name: 'textarea',
    placeholder: '',
    label: 'Комментарий к заказу'
  }
}
