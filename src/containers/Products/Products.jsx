// packages
import React, { useMemo } from 'react'
import _ from 'lodash'
import { useRemoteData } from '@aic/react-remote-data-provider'
// constants
import FETCH_CATEGORIES from 'api/fetch/FETCH_CATEGORIES'
// components
import Container from 'components/Container/Container'
import CardProduct from 'components/CardProduct/CardProduct'
import RowCards from 'components/RowCards/RowCards'
import Title from 'components/Title/Title'
// utils
import { getCategoryBlockId } from 'utils/getCategoryBlockId'
// styles
import css from './products.module.scss'
// hooks
import useProducts from 'hooks/useProducts'

const Products = () => {
  const { cards } = useProducts()

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
    <Container>
      {_.map(lists, ({ title, items, id }, key) => (
        <div id={getCategoryBlockId(id)} key={key} className={css.block}>
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
