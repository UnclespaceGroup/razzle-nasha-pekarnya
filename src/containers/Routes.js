import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/PageHome/Home'
import { PAGE_ABOUT, PAGE_HOME, PAGE_NEWS, PAGE_PRODUCTS } from 'constants/routes'
import PageProducts from 'containers/PageProducts/PageProducts'
import PageNews from 'containers/PageNews/PageNews'
import PageAbout from 'containers/PageAbout/PageAbout'

const Routes = () => (
  <Switch>
    <Route exact path={PAGE_HOME} component={Home} />
    <Route exact path={PAGE_PRODUCTS} component={PageProducts} />
    <Route exact path={PAGE_NEWS} component={PageNews} />
    <Route exact path={PAGE_ABOUT} component={PageAbout} />
  </Switch>
)

export default Routes
