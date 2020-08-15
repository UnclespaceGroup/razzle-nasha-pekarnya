import React from 'react'
import css from 'containers/PageHome/Home.module.scss'
import { useRemoteData } from '@aic/react-remote-data-provider'
import useDevice from 'hooks/useDevice'
import FETCH_PRODUCTS from 'api/fetch/FETCH_PRODUCTS'

function Home () {
  const { response } = useRemoteData(FETCH_PRODUCTS, [])
  console.log(response)

  const { currentDevice } = useDevice()

  return (
    <div className={css[currentDevice]}>
      <h2>Сборка Unclespace</h2>
    </div>
  )
}

export default Home
