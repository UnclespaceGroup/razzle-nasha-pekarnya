// packages
import React from 'react'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_HOME_PAGE from 'api/fetch/FETCH_HOME_PAGE'
import Banner from 'components/Banner/Banner'

const HomeSimpleBanner = (props) => {
  const {
    response: {
      banner
    } = {}
  } = useRemoteData(FETCH_HOME_PAGE)

  return (
    <Banner
      {...banner}
      {...props}
    />
  )
}
export default React.memo(HomeSimpleBanner)
