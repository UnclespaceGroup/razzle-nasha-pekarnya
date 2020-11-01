import React from 'react'
import PropTypes from 'prop-types'
import css from './blockAdvantages.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Container from 'components/Container/Container'
import RowCards from 'components/RowCards/RowCards'

const BlockAdvantages = ({ items }) => {
  return (
    <Container>
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
