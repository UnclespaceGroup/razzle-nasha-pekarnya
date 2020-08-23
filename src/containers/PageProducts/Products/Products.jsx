// packages
import React from 'react'
import Container from 'components/Container/Container'
import CardProduct from 'components/CardProduct/CardProduct'
import RowCards from 'components/RowCards/RowCards'
import useProducts from 'hooks/useProducts'
import css from './products.module.scss'
import useDevice from 'hooks/useDevice'

const Products = () => {
  const { cards } = useProducts()
  const { currentDevice } = useDevice()

  return (
    <Container className={css[currentDevice]}>
      <RowCards items={cards}>
        <CardProduct />
      </RowCards>
    </Container>
  )
}
export default React.memo(Products)
