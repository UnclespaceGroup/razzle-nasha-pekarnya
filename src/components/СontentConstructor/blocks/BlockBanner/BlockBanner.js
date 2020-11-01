import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/СontentConstructor/blocks/BlockBanner/blockBanner.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Container from 'components/Container/Container'

const BlockBanner = ({ title, img }) => {
  return (
    <Container className={css.container}>
      <BgImage img={img} className={css.block}>
        <div className={css.title}>{title}</div>
      </BgImage>
    </Container>
  )
}
BlockBanner.propTypes = {
  title: PropTypes.node,
  img: PropTypes.object
}
export default React.memo(BlockBanner)
