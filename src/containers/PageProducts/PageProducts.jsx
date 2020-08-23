// packages
import React from 'react'
import useDevice from 'hooks/useDevice'
import css from './pageProducts.module.scss'
import Header from 'containers/Header/Header'
import Bg from 'components/Bg/Bg'
// containers
import Categories from './Categories/Categories'
import Products from './Products/Products'

const PageProducts = () => {
  const { currentDevice } = useDevice()

  return (
    <Bg color='grey' className={css[currentDevice]}>
      <Header />
      <div className={css.wrapper}>
        <Categories />
        <Products />
      </div>
    </Bg>
  )
}
export default React.memo(PageProducts)
