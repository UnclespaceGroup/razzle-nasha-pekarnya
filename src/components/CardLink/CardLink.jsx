// packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import css from './cardLink.module.scss'
import { MdArrowForward } from 'react-icons/md'

const CardLink = ({ title, link }) => {
  const Component = link ? Link : 'span'

  return (
    <Component className={css.container} to={link}>
      <div className={css.title}>{title}</div>
      <MdArrowForward className={css.icon} />
    </Component>
  )
}
CardLink.propTypes = {
  title: PropTypes.node,
  link: PropTypes.any
}
export default React.memo(CardLink)
