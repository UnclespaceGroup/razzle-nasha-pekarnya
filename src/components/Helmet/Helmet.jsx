// packages
import React from 'react'
import PropTypes from 'prop-types'
import ReactHelmet from 'react-helmet'

const Helmet = ({ title, description }) => {
  return (
    <ReactHelmet>
      <title>{`Наша пекарня - ${title || ''}`}</title>
      {description && <meta name='description' content={description} />}
    </ReactHelmet>
  )
}
Helmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
export default React.memo(Helmet)
