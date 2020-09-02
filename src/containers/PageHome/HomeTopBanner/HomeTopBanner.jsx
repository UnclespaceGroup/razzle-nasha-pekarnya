// packages
import React from 'react'
import TopBanner from 'components/TopBanner/TopBanner'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_HOME_PAGE from 'api/fetch/FETCH_HOME_PAGE'

const HomeTopBanner = () => {
  const {
    response
  } = useRemoteData(FETCH_HOME_PAGE)

  return (
    <TopBanner {...response} />
  )
}
export default React.memo(HomeTopBanner)
