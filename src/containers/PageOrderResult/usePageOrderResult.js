import { useLocation } from 'react-router'

const usePageOrderResult = () => {
  const { state: { price, orders = [], data = {} } = {} } = useLocation()

  const {
    floor, frontDoor, house, textarea, street, name
  } = data

  const contacts = [
    {
      title: 'Ваше имя',
      value: name
    },
    {
      title: 'Адрес',
      value: `г.Сыктывкар, ул. ${street}, д.${house}, кв.${floor} (${frontDoor}й подъезд)`
    },
    {
      title: 'Комментарий',
      value: textarea
    },
    {
      title: 'Ваш заказ',
      value: orders.map(item => `${item.title}, ${item.count}шт - ${item.discountPrice * item.count} руб.`)
    },
    {
      title: 'Оплата',
      value: 'По карте курьеру'
    }
  ]

  const priceData = { title: 'Итого', value: `${price}.00 руб.` }

  return {
    contacts,
    priceData
  }
}
export default usePageOrderResult
