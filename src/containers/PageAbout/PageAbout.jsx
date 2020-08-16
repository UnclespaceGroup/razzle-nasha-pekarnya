// packages
import React from 'react'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_ABOUT from 'api/fetch/FETCH_ABOUT'
import ContentConstructor from 'components/СontentConstructor/СontentConstructor'
import Header from 'containers/Header/Header'

const PageAbout = () => {
  const {
    response: {
      contents
    } = {}
  } = useRemoteData(FETCH_ABOUT)

  return (
    <div>
      <Header />
      <ContentConstructor items={contents} />
    </div>
  )
}
export default React.memo(PageAbout)
