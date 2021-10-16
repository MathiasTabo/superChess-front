import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HomeRouter from './HomeRouter';
// import Dashboard from '../pages/Dashboard/Dashboard';
// import NotFound from '../pages/NotFound/NotFound';

const Container = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeRouter} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Router>
);

export default Container;
