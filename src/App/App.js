import React from 'react'
import 'styles/index.scss'
import Routes from 'containers/Routes'
import Footer from 'containers/Footer/Footer'
import ScrollToTop from 'utils/ScrollToTop'

const App = () => (
  <ScrollToTop>
    <div style={{ minHeight: '100vh' }}>
      <Routes />
    </div>
    <Footer />
  </ScrollToTop>
)

export default App
