// packages
import React from 'react'
import useDevice from 'hooks/useDevice'
import css from './pageProducts.module.scss'
import Products from 'containers/Products/Products'
import Header from 'containers/Header/Header'
import Bg from 'components/Bg/Bg'

const PageProducts = () => {
  const { currentDevice } = useDevice()
  return (
    <Bg color='grey' className={css[currentDevice]}>
      <Header />
      <Products />
    </Bg>
  )
}
export default React.memo(PageProducts)
