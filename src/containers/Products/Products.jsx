// packages
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/Container/Container'
import CardProduct from 'components/CardProduct/CardProduct'
import RowCards from 'components/RowCards/RowCards'
import Title from 'components/Title/Title'
import useProducts from 'hooks/useProducts'

const Products = ({ className, title }) => {
  const { cards } = useProducts()

  return (
    <Container className={className}>
      <Title>{title}</Title>
      <RowCards items={cards}>
        <CardProduct />
      </RowCards>
    </Container>
  )
}
Products.propTypes = {
  className: PropTypes.string
}
export default React.memo(Products)
