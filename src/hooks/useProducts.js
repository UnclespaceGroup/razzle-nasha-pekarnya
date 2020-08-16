import React, { useCallback } from 'react'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { PAGE_PRODUCTS } from 'constants/routes'
import { getDiscountPrice } from 'utils/priceUtils'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_PRODUCTS from 'api/fetch/FETCH_PRODUCTS'

const useProducts = () => {
  const { response: items } = useRemoteData(FETCH_PRODUCTS, [])
  const [cards, setCards] = React.useState([])

  const dispatch = useDispatch()

  const basket = useSelector(state => state.basket) || []

  // Добавление товара в корзину
  // и обновление списка карточек, учитывая добавленный в корзине товар
  // @id - id выбранного товара
  // @count - количество, которое нужно присвоить старому
  const addBasket = useCallback((id, count) => {
    // Находим индекс выбранной карточки
    const index = cards.findIndex(item => item.id === id)

    // Создаём копию массива карточек
    const _cards = cards.slice()

    // Присваиваем количество выбранной карточке
    _cards[index].count = count

    // Обновляем состояние карточек
    setCards(_cards)

    // Если количество равно нулю, то удаляем из редакса карточку
    // Иначе присваиваем текущей новое количество
    if (count === 0) {
      dispatch({
        type: 'REMOVE',
        payload: id
      })
    } else {
      dispatch({
        type: 'ADD_PURCHASE',
        payload: _cards[index]
      })
    }
  }, [cards])

  // При получении карточек с сервера, записываем их в текущий state
  // Добавляем поля количества и цены по скидке
  React.useEffect(() => {
    const _cards = _.map(items, card => ({
      ...card,
      discountPrice: getDiscountPrice(card.price, card.discount),
      count: 0
    }))
    setCards(_cards)
  }, [items])

  // Добавляем обработчики полученным карточкам
  // Проверяем, есть ли она уже в редаксе корзины
  // Если да, то синхронизируем количество
  // При изменении корзины обновляем количество
  const _cards = React.useMemo(() =>
    cards.map(item => {
      const reduxItem = basket[item.id] || {}
      return ({
        ...item,
        onChange: count => addBasket(item.id, count),
        to: PAGE_PRODUCTS + item.id,
        count: reduxItem.count
      })
    })
  , [cards])

  return {
    cards: _cards,
    addBasket
  }
}
export default useProducts
