import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/PageHome/Home'
import {
  PAGE_ABOUT,
  PAGE_BASKET,
  PAGE_HOME,
  PAGE_NEWS,
  PAGE_NEWS_DETAIL, PAGE_ORDER, PAGE_ORDER_RESULT,
  PAGE_PRODUCTS_DETAIL
} from 'constants/routes'
import PageNews from 'containers/PageNews/PageNews'
import PageAbout from 'containers/PageAbout/PageAbout'
import PageBasket from 'containers/PageBasket/PageBasket'
import PageNewsDetail from 'containers/PageNewsDetail/PageNewsDetail'
import PageProductsDetail from 'containers/PageProductsDetail/PageProductsDetail'
import PageOrderForm from 'containers/PageOrderForm/PageOrderForm'
import PageOrderResult from 'containers/PageOrderResult/PageOrderResult'
import Page404 from 'containers/Page404/Page404'

const Routes = () => (
  <Switch>
    <Route exact path={PAGE_HOME} component={Home} />
    <Route exact path={PAGE_PRODUCTS_DETAIL} component={PageProductsDetail} />
    <Route exact path={PAGE_NEWS} component={PageNews} />
    <Route exact path={PAGE_NEWS_DETAIL} component={PageNewsDetail} />
    <Route exact path={PAGE_ABOUT} component={PageAbout} />
    <Route exact path={PAGE_BASKET} component={PageBasket} />
    <Route exact path={PAGE_ORDER} component={PageOrderForm} />
    <Route exact path={PAGE_ORDER_RESULT} component={PageOrderResult} />
    <Route path='*' component={Page404} />
  </Switch>
)

export default Routes
