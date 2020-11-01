// packages
import React from 'react'
import { useRemoteData } from '@aic/react-remote-data-provider'
import _ from 'lodash'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import FETCH_CATEGORIES from 'api/fetch/FETCH_CATEGORIES'
import Container from 'components/Container/Container'
import { getCategoryBlockId } from 'utils/getCategoryBlockId'
// styles
import css from './categories.module.scss'

const Categories = () => {
  const {
    response: items
  } = useRemoteData(FETCH_CATEGORIES)

  return (
    <div className={css.container}>
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
        <img className={css.img} src='/images/logo-full-gray.png' alt='' />
      </Container>
    </div>
  )
}
export default React.memo(Categories)
