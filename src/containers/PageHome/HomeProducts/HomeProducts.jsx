// packages
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/Container/Container'
import CardProduct from 'components/CardProduct/CardProduct'
import RowCards from 'components/RowCards/RowCards'
import Title from 'components/Title/Title'
import useProducts from 'hooks/useProducts'
import CardLink from 'components/CardLink/CardLink'
import { PAGE_PRODUCTS } from 'constants/routes'

const HomeProducts = ({ className, title }) => {
  const { cards, loaderProps } = useProducts({ limit: 5 })

  return (
    <Container className={className}>
      <Title>{title}</Title>
      <RowCards
        items={cards}
        loaderProps={loaderProps}
        CardMoreComponent={
          <CardLink link={PAGE_PRODUCTS} title='Показать всю продукцию' />
        }
      >
        <CardProduct />
      </RowCards>
    </Container>
  )
}
HomeProducts.propTypes = {
  className: PropTypes.string
}
export default React.memo(HomeProducts)
