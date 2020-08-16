import React from 'react'
import PropTypes from 'prop-types'
import BlockImg from 'components/СontentConstructor/blocks/BlockImg/BlockImg'
import BlockText from 'components/СontentConstructor/blocks/BlockText/BlockText'
import BlockBanner from 'components/СontentConstructor/blocks/BlockBanner/BlockBanner'
import BlockAdvantages from 'components/СontentConstructor/blocks/BlockAdvantages/BlockAdvantages'

const types = {
  imgBlock: 'img-block.img-block',
  textBlock: 'text-block.text-block',
  banner: 'block-banner.banner',
  advantages: 'block-advantages.advantages'
}

const ContentConstructor = ({ items = [] }) => {
  const renderContent = (item, key) => {
    const { __component } = item
    switch (__component) {
      case types.imgBlock:
        return <BlockImg key={key} {...item} />
      case types.textBlock:
        return <BlockText key={key} {...item} />
      case types.banner:
        return <BlockBanner key={key} {...item} />
      case types.advantages:
        return <BlockAdvantages key={key} {...item} />
      default:
        return <div key={key} />
    }
  }

  return items.map((item, key) => renderContent(item, key))
}
ContentConstructor.propTypes = {
  items: PropTypes.array
}
export default React.memo(ContentConstructor)
