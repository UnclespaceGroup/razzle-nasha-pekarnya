import React from 'react'
import css from 'containers/PageHome/home.module.scss'
import useDevice from 'hooks/useDevice'
import cn from 'classnames'
import Header from 'containers/Header/Header'
import TopBanner from 'components/TopBanner/TopBanner'
import ContainerProducts from 'containers/ContainerProducts/ContainerProducts'
import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import Banner from 'components/Banner/Banner'
import ContainerNews from 'containers/ContainerNews/ContainerNews'

function Home () {
  const { currentDevice } = useDevice()

  return (
    <div className={cn(css[currentDevice], css.wrapper)}>
      <Header />
      <TopBanner />
      <ContainerProducts
        title='Популярные заказы'
        className={css.products}
      />
      <Container className={css.moreBtn}>
        <Button>Показать все</Button>
      </Container>
      <Banner className={css.banner} />
      <ContainerNews title='Последние новости' />
    </div>
  )
}

export default Home
