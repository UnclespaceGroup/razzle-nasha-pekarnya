import React from 'react'
import 'containers/PageHome/Home.scss'
import { useRemoteData } from '@aic/react-remote-data-provider'
import useDevice from 'hooks/useDevice'

function Home() {
  const { response } = useRemoteData({
    request: {
      url: 'http://unclespace.beget.tech/products'
    }
  })
  console.log(response)

  const device = useDevice()
  console.log(device)

  return (
    <div className="Home">
      <h2>Сборка Unclespace</h2>
    </div>
  )
}

export default Home;
