// packages
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_PRODUCTS from 'api/fetch/FETCH_PRODUCTS'
import CardProduct from 'components/CardProduct/CardProduct'
import RowCards from 'components/RowCards/RowCards'
import Container from 'components/Container/Container'
import Title from 'components/Title/Title'

const ContainerProducts = ({ className, title }) => {
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
ContainerProducts.propTypes = {
  className: PropTypes.string
}
export default React.memo(ContainerProducts)
