import React from 'react'
import useDevice from 'hooks/useDevice'
import cn from 'classnames'
import Header from 'containers/Header/Header'
import HomeProducts from 'containers/PageHome/HomeProducts/HomeProducts'
import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import Banner from 'components/Banner/Banner'
import News from 'containers/News/News'
import Bg from 'components/Bg/Bg'
import css from 'containers/PageHome/home.module.scss'
import { PAGE_NEWS, PAGE_PRODUCTS } from 'constants/routes'
import HomeTopBanner from 'containers/PageHome/HomeTopBanner/HomeTopBanner'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_META from 'api/fetch/FETCH_META'
import Helmet from 'components/Helmet/Helmet'
import HomeSimpleBanner from 'containers/PageHome/HomeSimpleBanner/HomeSimpleBanner'

function Home () {
  const { currentDevice } = useDevice()
  const {
    response: helmetData
  } = useRemoteData(FETCH_META({ page: 'home' }))

  return (
    <Bg color='grey' className={cn(css[currentDevice], css.wrapper)}>
      <Helmet {...helmetData} />
      <Header />
      <HomeTopBanner />
      <HomeProducts
        title='Популярные заказы'
        className={css.products}
      />
      <Container className={css.moreBtn}>
        <Button to={PAGE_PRODUCTS}>Показать все</Button>
      </Container>
      <HomeSimpleBanner className={css.banner} />
      <News title='Последние новости' limit={3} />
      <Container className={css.moreBtn}>
        <Button to={PAGE_NEWS}>Показать все</Button>
      </Container>
    </Bg>
  )
}

export default Home
