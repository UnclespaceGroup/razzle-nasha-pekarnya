import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/СontentConstructor/blocks/BlockText/blockText.module.scss'
import ReactMarkdown from 'react-markdown'
import Container from 'components/Container/Container'

const BlockText = ({ title, text }) => {
  return (
    <Container>
      <div className={css.block}>
        <div className={css.title}>{title}</div>
        <ReactMarkdown source={text} />
      </div>
    </Container>
  )
}
BlockText.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node
}
export default React.memo(BlockText)
