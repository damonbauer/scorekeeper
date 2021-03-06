import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Main from '../containers/Main';
import PlayersContainer from '../containers/PlayersContainer';
import GameContainer from '../containers/GameContainer';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PlayersContainer} />
      <Route path='/game/:gameId' component={GameContainer} />
    </Route>
  </Router>
);
