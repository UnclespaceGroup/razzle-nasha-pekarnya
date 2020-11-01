// packages
import React from 'react'
import css from './page404.module.scss'
// components
import Container from 'components/Container/Container'
import Header from 'containers/Header/Header'

const Page404 = () => {
  return (
    <>
      <Header />
      <Container className={css.container}>
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
