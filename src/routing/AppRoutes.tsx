import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, Login, Register } from '../pages';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default routes;
