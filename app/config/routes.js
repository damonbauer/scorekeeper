import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Main from '../containers/Main';
import Home from '../components/Home';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

// <Route path='players' header='Player One' component={PromptContainer} />
// <Route path='results' component={ResultsContainer} />
