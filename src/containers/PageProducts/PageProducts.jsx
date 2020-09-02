// packages
import React from 'react'
import useDevice from 'hooks/useDevice'
import css from './pageProducts.module.scss'
import Header from 'containers/Header/Header'
import Bg from 'components/Bg/Bg'
// containers
import Categories from './Categories/Categories'
import Products from './Products/Products'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_META from 'api/fetch/FETCH_META'
import Helmet from 'components/Helmet/Helmet'

const PageProducts = () => {
  const { currentDevice } = useDevice()
  const {
    response: helmetData
  } = useRemoteData(FETCH_META({ page: 'products' }))

  return (
    <Bg color='grey' className={css[currentDevice]}>
      <Helmet {...helmetData} />
      <Header />
      <div className={css.wrapper}>
        <Categories />
        <Products />
      </div>
    </Bg>
  )
}
export default React.memo(PageProducts)
