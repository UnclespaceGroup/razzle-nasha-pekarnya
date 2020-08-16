// packages
import React from 'react'
import css from './pageNews.module.scss'
import News from 'containers/News/News'
import useDevice from 'hooks/useDevice'
import Header from 'containers/Header/Header'

const PageNews = () => {
  const { currentDevice } = useDevice()

  return (
    <div className={css[currentDevice]}>
      <Header />
      <News />
    </div>
  )
}
export default React.memo(PageNews)
