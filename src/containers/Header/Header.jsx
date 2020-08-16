// packages
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideHeader from 'containers/Header/SideHeader/SideHeader'
import TopHeader from 'containers/Header/TopHeader/TopHeader'
import { useSelector } from 'react-redux'
import { getFullPrice } from 'utils/priceUtils'

const Header = () => {
  const [isOpen, setOpen] = useState()
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  const clickOpen = useCallback(() => setOpen(!isOpen), [isOpen, setOpen])

  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  const basket = useSelector(state => state.basket) || {}
  const price = useMemo(() => getFullPrice(basket) || '~', [basket])

  return (
    <>
      <TopHeader
        price={price}
        clickOpen={clickOpen}
      />
      <SideHeader
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  )
}
export default React.memo(Header)
