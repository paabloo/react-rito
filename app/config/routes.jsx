import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
// import {Router, Route, hashHistory, IndexRedirect, Redirect} from 'react-router';

import ChampionsCT from '../containers/ChampionsCT';

import LayoutCT from '../containers/LayoutCT';

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={LayoutCT}>
      <Route path='/champions' component={ChampionsCT} />
    </Route>
  </Router>
)

export default routes;
