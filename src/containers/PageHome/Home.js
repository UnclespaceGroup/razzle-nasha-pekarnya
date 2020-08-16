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

function Home () {
  const { currentDevice } = useDevice()

  return (
    <Bg color='grey' className={cn(css[currentDevice], css.wrapper)}>
      <Header />
      <TopBanner />
      <Products
        title='Популярные заказы'
        className={css.products}
      />
      <Container className={css.moreBtn}>
        <Button>Показать все</Button>
      </Container>
      <Banner className={css.banner} />
      <ContainerNews title='Последние новости' />
    </Bg>
  )
}

export default Home
