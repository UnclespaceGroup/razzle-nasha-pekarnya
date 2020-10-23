// packages
import React from 'react'
import css from './categories.module.scss'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CATEGORIES from 'api/fetch/FETCH_CATEGORIES'
import _ from 'lodash'
import Container from 'components/Container/Container'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { getCategoryBlockId } from 'utils/getCategoryBlockId'
import useDevice from 'hooks/useDevice'
import cn from 'classnames'

const Categories = () => {
  const {
    response: items
  } = useRemoteData(FETCH_CATEGORIES)

  const { currentDevice, isLarge } = useDevice()

  return (
    <div className={cn(css.container, css[currentDevice])}>
      <Container className={css.wrapper}>
        {_.map(items, ({ title, id }, key) => (
          <button
            key={key}
            onClick={() => scrollWindowTo(getCategoryBlockId(id))}
            className={css.item}
          >
            {title}
          </button>
        ))}
        {isLarge && <img className={css.img} src='/images/logo-full-gray.png' alt='' />}
      </Container>
    </div>
  )
}
export default React.memo(Categories)
