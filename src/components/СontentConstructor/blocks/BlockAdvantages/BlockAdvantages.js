import React from 'react'
import PropTypes from 'prop-types'
import css from './blockAdvantages.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Container from 'components/Container/Container'
import RowCards from 'components/RowCards/RowCards'
import useDevice from 'hooks/useDevice'

const BlockAdvantages = ({ items }) => {
  const { currentDevice } = useDevice()

  return (
    <Container className={css[currentDevice]}>
      <RowCards
        className={css.container}
        items={items}
        renderChild={(item, key) => (
          <div key={key} className={css.card}>
            <BgImage img={item.img} className={css.img} />
            <div className={css.title}>{item.title}</div>
          </div>
        )}
      />
    </Container>
  )
}
BlockAdvantages.propTypes = {
  items: PropTypes.array
}
export default React.memo(BlockAdvantages)
