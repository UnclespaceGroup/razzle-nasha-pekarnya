// packages
import React, { useMemo } from 'react'
import _ from 'lodash'
import Container from 'components/Container/Container'
import CardProduct from 'components/CardProduct/CardProduct'
import RowCards from 'components/RowCards/RowCards'
import useProducts from 'hooks/useProducts'
import css from './products.module.scss'
import useDevice from 'hooks/useDevice'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CATEGORIES from 'api/fetch/FETCH_CATEGORIES'
import Title from 'components/Title/Title'

const Products = () => {
  const { cards } = useProducts()
  const { currentDevice } = useDevice()

  const {
    response: categories
  } = useRemoteData(FETCH_CATEGORIES)

  const lists = useMemo(() =>
    _.map(categories, item => ({
      title: item.title,
      id: item.id,
      items: _.filter(cards, ({ category }) => category?.id === item.id)
    })
    ), [cards, categories])

  return (
    <Container className={css[currentDevice]}>
      {_.map(lists, ({ title, items, id }, key) => (
        <div key={key} className={css.block}>
          <Title>{title}</Title>
          <RowCards items={items}>
            <CardProduct />
          </RowCards>
        </div>
      ))}
    </Container>
  )
}
export default React.memo(Products)
