// packages
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideHeader from 'containers/Header/SideHeader/SideHeader'
import TopHeader from 'containers/Header/TopHeader/TopHeader'

const Header = () => {
  const [isOpen, setOpen] = useState()
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  const clickOpen = useCallback(() => setOpen(!isOpen), [isOpen, setOpen])

  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <>
      <TopHeader
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
