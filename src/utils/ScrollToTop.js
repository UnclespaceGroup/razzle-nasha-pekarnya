/* eslint-disable */
// eslint-disable
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class ScrollToTop extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.location.state?.noScroll) return
    if (
      this.props.location !== prevProps.location
    ) {
      window.scrollTo(0, 0)
    }
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return this.props.children
  }
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  }
}

export default withRouter(ScrollToTop)
