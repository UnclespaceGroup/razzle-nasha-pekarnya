import React from 'react'
import useDevice from 'hooks/useDevice'
import cn from 'classnames'
import Header from 'containers/Header/Header'
import TopBanner from 'components/TopBanner/TopBanner'
import Products from 'containers/Products/Products'
import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import Banner from 'components/Banner/Banner'
import ContainerNews from 'containers/News/News'
import Bg from 'components/Bg/Bg'
import css from 'containers/PageHome/home.module.scss'
import { PAGE_PRODUCTS } from 'constants/routes'

function Home () {
  const { currentDevice } = useDevice()

  return (
    <Bg color='grey' className={cn(css[currentDevice], css.wrapper)}>
      <Header />
      <TopBanner />
      <Products
        limit={6}
        title='Популярные заказы'
        className={css.products}
      />
      <Container className={css.moreBtn}>
        <Button to={PAGE_PRODUCTS}>Показать все</Button>
      </Container>
      <Banner className={css.banner} />
      <ContainerNews title='Последние новости' />
    </Bg>
  )
}

export default Home
