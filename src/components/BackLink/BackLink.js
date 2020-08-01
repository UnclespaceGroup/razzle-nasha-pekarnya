import React from 'react'
import css from './backLink.module.scss'
import useDevice from 'hooks/useDevice'
import { MdArrowBack } from 'react-icons/md'

const BackLink = () => {
  const { goBack } = useHistory()
  const { currentDevice } = useDevice()

  return (
    <div onClick={goBack}>
      <MdArrowBack className={css[currentDevice]} />
    </div>
  )
}
export default React.memo(BackLink)