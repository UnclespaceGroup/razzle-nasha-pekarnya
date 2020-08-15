import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/PageHome/Home';
import { PAGE_HOME } from 'constants/routes'

const Routes = () => (
  <Switch>
    <Route exact path={PAGE_HOME} component={Home} />
  </Switch>
);

export default Routes;
