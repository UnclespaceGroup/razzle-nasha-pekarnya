import React from 'react'
import css from 'containers/PageHome/home.module.scss'
import { useRemoteData } from '@aic/react-remote-data-provider'
import useDevice from 'hooks/useDevice'
import FETCH_PRODUCTS from 'api/fetch/FETCH_PRODUCTS'
import Header from 'containers/Header/Header'

function Home () {
  const { response } = useRemoteData(FETCH_PRODUCTS, [])
  console.log(response)

  const { currentDevice } = useDevice()

  return (
    <div className={css[currentDevice]}>
      <Header />
    </div>
  )
}

export default Home
