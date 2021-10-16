import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

const Test1 = () => <p>TEST1</p>;

const Test2 = () => <p>TEST2</p>;

const HomeRouter = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${url}/`} component={Test1} />
      <Route exact path={`${url}/test2`} component={Test2} />;
    </Switch>
  );
};

export default HomeRouter;
