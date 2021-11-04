import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
// import {
//   Button,
// } from 'antd';
import './App.css';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import socket from './component/Socket';
import Board from './component/Board';

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

  // const [boardArray, setBoardArray] = React.useState<Array<any>>([]);

  const handleInviteAccepted = ((piece: any) => {
    console.log(piece);
    // setBoardArray(piece);
  });

  // function clicOnPiece(x: number, y: number) {
  //   socket.emit('GameToServer', {
  //     room: location.state.game_id,
  //     player: location.state.token,
  //     x,
  //     y,
  //   });
  // }

  // function nexMove() {
  //   socket.emit('GameToServer', {
  //     room: location.state.game_id,
  //     player: location.state.token,
  //     x: 6,
  //     y: 4,
  //   });
  // }

  // board={boardArray}
  useEffect(() => {
    socket.on('GameToClient', handleInviteAccepted);
  }, []);
  return (
    <>
      <h2>Game</h2>
      <Board gameId={location.state.game_id} token={location.state.token} />
      {/* <Button style={{ marginTop: '3%' }} onClick={async () => addGame()}>Join Game</Button>
      <Button style={{ marginTop: '3%' }} onClick={async () => nexMove()}>next</Button> */}
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
