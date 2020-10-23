import React from 'react'
import useDevice from 'hooks/useDevice'
import cn from 'classnames'
import Header from 'containers/Header/Header'
import News from 'containers/News/News'
import Bg from 'components/Bg/Bg'
import css from 'containers/PageHome/home.module.scss'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_META from 'api/fetch/FETCH_META'
import Helmet from 'components/Helmet/Helmet'
import HomeSimpleBanner from 'containers/PageHome/HomeSimpleBanner/HomeSimpleBanner'
import CardLink from 'components/CardLink/CardLink'
import { PAGE_NEWS } from 'constants/routes'
import Products from 'containers/Products/Products'
import HomeSlider from 'containers/PageHome/HomeSlider/HomeSlider'
import useMeta from 'api/hooks/useMeta'
import Categories from 'containers/Categories/Categories'

function Home () {
  const { currentDevice } = useDevice()
  const { mainPage: mainPageMeta } = useMeta()

  return (
    <Bg color='grey' className={cn(css[currentDevice], css.wrapper)}>
      <Helmet {...mainPageMeta} />
      <Header />
      <Categories />
      <HomeSlider />
      <div className={css.products}>
        <Products />
      </div>
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
