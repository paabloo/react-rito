import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
// import {Router, Route, hashHistory, IndexRedirect, Redirect} from 'react-router';

import ChampionsCT from '../containers/ChampionsCT';

import Layout from '../components/Layout';

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <Route path='/champions' component={ChampionsCT} />
    </Route>
  </Router>
)

export default routes;
