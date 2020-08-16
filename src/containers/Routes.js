import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/PageHome/Home'
import {
    PAGE_ABOUT,
    PAGE_BASKET,
    PAGE_HOME,
    PAGE_NEWS,
    PAGE_NEWS_DETAIL,
    PAGE_PRODUCTS,
    PAGE_PRODUCTS_DETAIL
} from 'constants/routes'
import PageProducts from 'containers/PageProducts/PageProducts'
import PageNews from 'containers/PageNews/PageNews'
import PageAbout from 'containers/PageAbout/PageAbout'
import PageBasket from 'containers/PageBasket/PageBasket'
import PageNewsDetail from 'containers/PageNewsDetail/PageNewsDetail'
import PageProductsDetail from 'containers/PageProductsDetail/PageProductsDetail'

const Routes = () => (
  <Switch>
    <Route exact path={PAGE_HOME} component={Home} />
    <Route exact path={PAGE_PRODUCTS} component={PageProducts} />
    <Route exact path={PAGE_PRODUCTS_DETAIL} component={PageProductsDetail} />
    <Route exact path={PAGE_NEWS} component={PageNews} />
    <Route exact path={PAGE_NEWS_DETAIL} component={PageNewsDetail} />
    <Route exact path={PAGE_ABOUT} component={PageAbout} />
    <Route exact path={PAGE_BASKET} component={PageBasket} />
  </Switch>
)

export default Routes
