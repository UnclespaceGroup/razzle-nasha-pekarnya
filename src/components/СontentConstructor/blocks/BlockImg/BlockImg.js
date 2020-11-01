import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/СontentConstructor/blocks/BlockImg/blockImg.module.scss'
import Container from 'components/Container/Container'
import getImgName from 'utils/getImgName'

const BlockImg = ({ title, img }) => {
  return (
    <Container>
      <div className={css.block}>
        <img src={getImgName(img)} className={css.img} alt='' />
        <div className={css.title}>{title}</div>
      </div>
    </Container>
  )
}
BlockImg.propTypes = {
  title: PropTypes.node,
  img: PropTypes.object
}
export default React.memo(BlockImg)
