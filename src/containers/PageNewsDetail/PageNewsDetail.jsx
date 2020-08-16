// packages
import React from 'react'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_NEWS_DETAIL from 'api/fetch/FETCH_NEWS_DETAIL'
import { useParams } from 'react-router-dom'
import Header from 'containers/Header/Header'
import ContentConstructor from 'components/СontentConstructor/СontentConstructor'
import BackLink from 'components/BackLink/BackLink'

const PageNewsDetail = () => {
  const { slug } = useParams()

  const {
    response: {
      dimanic
    } = {}
  } = useRemoteData(FETCH_NEWS_DETAIL(slug))
  return (
    <div style={{ marginTop: '3.2rem' }}>
      <Header />
      <BackLink />
      <ContentConstructor items={dimanic} />
    </div>
  )
}
export default React.memo(PageNewsDetail)
