import React from 'react'
import { useHistory } from 'react-router-dom'
import css from './backLink.module.scss'
import { MdArrowBack } from 'react-icons/md'

const BackLink = () => {
  const { goBack } = useHistory()

  return (
    <button onClick={goBack}>
      <MdArrowBack className={css.container} />
    </button>
  )
}
export default React.memo(BackLink)
