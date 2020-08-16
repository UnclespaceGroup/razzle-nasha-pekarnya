// packages
import React from 'react'
import useDevice from 'hooks/useDevice'
import css from './pageProducts.module.scss'
import Products from 'containers/Products/Products'
import Header from 'containers/Header/Header'

const PageProducts = () => {
  const { currentDevice } = useDevice()
  return (
    <div className={css[currentDevice]}>
      <Header />
      <Products />
    </div>
  )
}
export default React.memo(PageProducts)
