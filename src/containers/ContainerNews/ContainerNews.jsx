// packages
import React from 'react'
import PropTypes from 'prop-types'
import { useRemoteData } from '@aic/react-remote-data-provider'
import RowCards from 'components/RowCards/RowCards'
import Container from 'components/Container/Container'
import Title from 'components/Title/Title'
import FETCH_NEWS from 'api/fetch/FETCH_NEWS'
import CardNews from 'components/CardNews/CardNews'

const ContainerNews = ({ className, title }) => {
  const { response: items } = useRemoteData(FETCH_NEWS, [])

  return (
    <Container className={className}>
      <Title>{title}</Title>
      <RowCards items={items}>
        <CardNews />
      </RowCards>
    </Container>
  )
}
ContainerNews.propTypes = {
  className: PropTypes.string
}
export default React.memo(ContainerNews)
