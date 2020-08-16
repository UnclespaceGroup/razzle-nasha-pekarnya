import React from 'react'
import 'styles/index.scss'
import Routes from 'containers/Routes'
import Footer from 'containers/Footer/Footer'
import ScrollToTop from 'utils/ScrollToTop'

const App = () => (
  <ScrollToTop>
    <Routes />
    <Footer />
  </ScrollToTop>
)

export default App
