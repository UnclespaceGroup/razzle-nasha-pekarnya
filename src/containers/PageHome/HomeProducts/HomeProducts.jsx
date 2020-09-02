// packages
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/Container/Container'
import CardProduct from 'components/CardProduct/CardProduct'
import RowCards from 'components/RowCards/RowCards'
import Title from 'components/Title/Title'
import useProducts from 'hooks/useProducts'

const HomeProducts = ({ className, title }) => {
  const { cards, loaderProps } = useProducts({ limit: 6 })

  return (
    <Container className={className}>
      <Title>{title}</Title>
      <RowCards items={cards} loaderProps={loaderProps}>
        <CardProduct />
      </RowCards>
    </Container>
  )
}
HomeProducts.propTypes = {
  className: PropTypes.string
}
export default React.memo(HomeProducts)
