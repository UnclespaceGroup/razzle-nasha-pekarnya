// packages
import React, { useMemo } from 'react'
import _ from 'lodash'
import RowCards from 'components/RowCards/RowCards'
import CardCategory from 'components/CardCategory/CardCategory'
import Container from 'components/Container/Container'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CATEGORIES from 'api/fetch/FETCH_CATEGORIES'
import css from './categories.module.scss'
import useDevice from 'hooks/useDevice'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { getCategoryBlockId } from 'utils/getCategoryBlockId'

const Categories = () => {
  const {
    response
  } = useRemoteData(FETCH_CATEGORIES)
  const { currentDevice } = useDevice()

  const categories = useMemo(() =>
    _.map(response, item => ({
      ...item,
      onClick: () => scrollWindowTo(getCategoryBlockId(item.id))
    }))
  , [response])

  return (
    <Container className={css[currentDevice]}>
      <RowCards className={css.row} count={4} items={categories}>
        <CardCategory />
      </RowCards>
    </Container>
  )
}
export default React.memo(Categories)
