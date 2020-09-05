import React from 'react'
import useDevice from 'hooks/useDevice'
import cn from 'classnames'
import Header from 'containers/Header/Header'
import HomeProducts from 'containers/PageHome/HomeProducts/HomeProducts'
import News from 'containers/News/News'
import Bg from 'components/Bg/Bg'
import css from 'containers/PageHome/home.module.scss'
import HomeTopBanner from 'containers/PageHome/HomeTopBanner/HomeTopBanner'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_META from 'api/fetch/FETCH_META'
import Helmet from 'components/Helmet/Helmet'
import HomeSimpleBanner from 'containers/PageHome/HomeSimpleBanner/HomeSimpleBanner'
import CardLink from 'components/CardLink/CardLink'
import { PAGE_NEWS } from 'constants/routes'

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
      <HomeSimpleBanner className={css.banner} />
      <News
        title='Последние новости'
        limit={2}
        CardMoreComponent={
          <CardLink link={PAGE_NEWS} title='Показать все новости и предложения' />
        }
      />
    </Bg>
  )
}

export default Home
