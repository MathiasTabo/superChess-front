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
import Case from './component/Board';
// import Board from './component/Board';

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
  // const [board, setBoard] = React.useState<Array<Array<any>>>([]);
  const [posibleMove, setPosibleMove] = React.useState<Array<any>>([]);
  const [rows, setRows] = React.useState<Array<any>>([]);
  const size = 80;

  function displayBoard(boards: any) {
    const arr = [];
    let i: number = 0;
    const color: boolean = true;
    console.log(posibleMove);
    for (let y = 0; y < 8; y += 1) {
      for (let x = 0; x < 8; x += 1) {
        if (boards && boards[y] && boards[y][x] && boards[y][x] !== null) {
          arr.push(
            <Case
              key={i}
              x={x}
              y={y}
              size={size}
              color={boards[y][x].color}
              id={boards[y][x].id}
              black={y % 2 === 0 ? x % 2 === 1 : x % 2 === 0}
              gameId={location.state.game_id}
              token={location.state.token}
            />,
          );
        } else {
          arr.push(
            <Case
              key={i}
              x={x}
              y={y}
              size={size}
              color={color}
              id={0}
              black={y % 2 === 0 ? x % 2 === 1 : x % 2 === 0}
              gameId={location.state.game_id}
              token={location.state.token}
            />,
          );
        }
        i += 1;
      }
    }
    setRows(arr);
  }

  const handleInviteAccepted = ((piece: any) => {
    console.log(piece);
    if (piece.boards) {
      console.log(piece.boards);
      // setBoard(piece.boards);
      displayBoard(piece.boards);
    }
    if (piece.PosiblePos) {
      setPosibleMove(piece.PosiblePos);
    }
  });

  useEffect(() => {
    socket.on('GameToClient', handleInviteAccepted);
  }, []);
  return (
    <>
      <h2>Game</h2>
      <>
        <div style={{
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: `${((size * 8) + 1).toString()}px`,
        }}
        >
          {
            rows
          }
        </div>
      </>
      {/* <Board
        board={board}
        posiblePos={posibleMove}
        gameId={location.state.game_id}
        token={location.state.token}
      /> */}
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
