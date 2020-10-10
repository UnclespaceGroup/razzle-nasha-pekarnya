// packages
import React from 'react'
import css from './pageNews.module.scss'
import News from 'containers/News/News'
import useDevice from 'hooks/useDevice'
import Header from 'containers/Header/Header'
import Bg from 'components/Bg/Bg'
import Title from 'components/Title/Title'
import Container from 'components/Container/Container'
import useMeta from 'api/hooks/useMeta'
import Helmet from 'components/Helmet/Helmet'

const PageNews = () => {
  const { currentDevice } = useDevice()
  const { news: newsMeta } = useMeta()

  return (
    <Bg color='grey' className={css[currentDevice]}>
      <Helmet {...newsMeta} />
      <Header />
      <Container>
        <Title>Новости и Акции</Title>
      </Container>
      <News />
    </Bg>
  )
}
export default React.memo(PageNews)
