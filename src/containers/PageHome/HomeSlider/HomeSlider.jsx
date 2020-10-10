// packages
import React from 'react'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_HOME_PAGE from 'api/fetch/FETCH_HOME_PAGE'

const HomeSlider = () => {
  const {
    response: {
      slider: items
    } = {}
  } = useRemoteData(FETCH_HOME_PAGE, [])

  return (
    <BannerSlider
      items={items}
    />
  )
}
export default React.memo(HomeSlider)
