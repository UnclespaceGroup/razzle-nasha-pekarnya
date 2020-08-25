// packages
import React from 'react'
import useDevice from 'hooks/useDevice'
import css from './page404.module.scss'
import Container from 'components/Container/Container'
import Header from 'containers/Header/Header'

const Page404 = () => {
  const { currentDevice } = useDevice()

  return (
    <>
      <Header />
      <Container className={css[currentDevice]}>
        <div className={css.code}>
        404
        </div>
        <h1 className={css.title}>
        Страница не найдена
        </h1>
      </Container>
    </>
  )
}
export default React.memo(Page404)
