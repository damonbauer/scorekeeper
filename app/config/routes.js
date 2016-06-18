import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='home' component={HomeContainer} />
    </Route>
  </Router>
);
