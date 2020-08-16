import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/СontentConstructor/blocks/BlockBanner/blockBanner.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Container from 'components/Container/Container'
import useDevice from 'hooks/useDevice'

const BlockBanner = ({ title, img }) => {
  const { currentDevice } = useDevice()

  return (
    <Container className={css[currentDevice]}>
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
