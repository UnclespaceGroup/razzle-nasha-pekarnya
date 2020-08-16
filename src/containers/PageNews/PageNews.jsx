// packages
import React from 'react'
import css from './pageNews.module.scss'
import News from 'containers/News/News'
import useDevice from 'hooks/useDevice'
import Header from 'containers/Header/Header'
import Bg from 'components/Bg/Bg'

const PageNews = () => {
  const { currentDevice } = useDevice()

  return (
    <Bg color='grey' className={css[currentDevice]}>
      <Header />
      <News />
    </Bg>
  )
}
export default React.memo(PageNews)
