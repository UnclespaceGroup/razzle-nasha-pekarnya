// packages
import React, { useCallback, useMemo } from 'react'
import css from './pageProductsDetail.module.scss'
import useDevice from 'hooks/useDevice'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_PRODUCTS_DETAIL from 'api/fetch/FETCH_PRODUCTS_DETAIL'
import Header from 'containers/Header/Header'
import Container from 'components/Container/Container'
import SliderPhoto from 'components/SliderPhoto/SliderPhoto'
import BackLink from 'components/BackLink/BackLink'
import Button from 'components/Button/Button'
import Picker from 'components/Picker/Picker'
import { FiPlus } from 'react-icons/fi'
import ContactsBlock from 'components/ContactsBlock/ContactsBlock'
import useProducts from 'hooks/useProducts'

const PageProductsDetail = () => {
  const { slug } = useParams()
  const {
    response: {
      title,
      img,
      price,
      discount,
      discountText,
      id
    } = {}
  } = useRemoteData(FETCH_PRODUCTS_DETAIL(slug))

  const { currentDevice } = useDevice()

  const { addBasket, cards } = useProducts()

  const currentCount = useMemo(() => _.find(cards, item => item.id === id)?.count, [cards])

  const btnAddClick = useCallback(() => addBasket(id, 1), [addBasket, id])
  const addToBasket = useCallback((count) => addBasket(id, count), [addBasket, id])

  return (
    <div className={css[currentDevice]}>
      <Header />
      <Container className={css.row}>
        <div className={css.left}>
          <BackLink />
          <SliderPhoto
            className={css.slider}
            items={[img]}
            slideClassName={css.img}
          />
        </div>
        <div className={css.content}>
          <h1 className={css.title}>{title}</h1>
          <div className={css.text}>
            Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности
            требуют определения и уточнения дальнейших направлений развития. Равным образом постоянное
            информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения позиций,
            занимаемых участниками в отношении поставленных задач.
          </div>
          <div className={css.bottom}>
            {discount && (
              <div className={css.discount}>
                <div className={css.discountBlock}>- {discount}%</div>
                <div className={css.discountBottom}>* {discountText}</div>
              </div>)}
            <div className={css.price}>
              {price} ₽
            </div>
            {
              currentCount
                ? <Picker onChange={addToBasket} count={currentCount} variant='black' />
                : (
                  <Button
                    onClick={btnAddClick}
                  >
                    <FiPlus />
                    <span>В корзину</span>
                  </Button>
                )
            }
          </div>
          <ContactsBlock className={css.contacts} />
        </div>
      </Container>
    </div>
  )
}
export default React.memo(PageProductsDetail)
