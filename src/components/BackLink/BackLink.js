import React from 'react'
import { useHistory } from 'react-router-dom'
import css from './backLink.module.scss'
import useDevice from 'hooks/useDevice'
import { MdArrowBack } from 'react-icons/md'

const BackLink = () => {
  const { goBack } = useHistory()
  const { currentDevice } = useDevice()

  return (
    <button onClick={goBack}>
      <MdArrowBack className={css[currentDevice]} />
    </button>
  )
}
export default React.memo(BackLink)
