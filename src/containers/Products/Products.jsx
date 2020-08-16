// packages
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/Container/Container'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_PRODUCTS from 'api/fetch/FETCH_PRODUCTS'
import CardProduct from 'components/CardProduct/CardProduct'
import RowCards from 'components/RowCards/RowCards'
import Title from 'components/Title/Title'

const Products = ({ className, title }) => {
  const { response: products } = useRemoteData(FETCH_PRODUCTS, [])

  return (
    <Container className={className}>
      <Title>{title}</Title>
      <RowCards items={products}>
        <CardProduct />
      </RowCards>
    </Container>
  )
}
Products.propTypes = {
  className: PropTypes.string
}
export default React.memo(Products)
