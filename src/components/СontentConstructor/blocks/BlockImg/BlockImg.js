import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/СontentConstructor/blocks/BlockImg/blockImg.module.scss'
import getImgName from 'utils/getImgName'
import Container from 'components/Container/Container'
import useDevice from 'hooks/useDevice'

const BlockImg = ({ title, img }) => {
  const { currentDevice } = useDevice()
  return (
    <Container className={css[currentDevice]}>
      <div className={css.block}>
        <img src={getImgName(img)} className={css.img} alt=''/>
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
