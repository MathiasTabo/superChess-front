import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import Login from './component/Login';

interface IGameProps {
  location: {
    state: {
      token: string,
      game_id: string
    }
  }
}

function Game(props: IGameProps) {
  const { location } = props;
  console.log(location.state);
  return (
    <>
      <h2>Game</h2>
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Dashboard} exact path="/lobby" />
        <Route component={Game} exact path="/game/:id" />
      </Switch>
    </Router>
  );
}

export default App;
