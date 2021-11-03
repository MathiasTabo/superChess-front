import React, { useState, useEffect } from 'react';
import {
  Redirect,
} from 'react-router-dom';
import {
  List, Button, Skeleton, Divider,
} from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

interface ILobbyProps {
  location: {
    state: {
      token: string
    }
  }
}

interface IGames {
  id: string,
  players: [string],
  turn: number,
  state: number,
  id_string: string,
}

function Dashboard(props: ILobbyProps) {
  const { location } = props;
  if (location.state === undefined) {
    return (
      <Redirect to={{
        pathname: '/',
      }}
      />
    );
  }
  const [dataIsSet, setDataIsSet] = useState<boolean>(false);
  const [data, setData] = useState<IGames[]>([]);
  const [joinGameId, setJoinGameId] = useState<string>('');
  // console.log('TOKEN ', location.state.token);

  const getGames = () => {
    if (dataIsSet) {
      return;
    }
    setDataIsSet(true);
    fetch('http://localhost:3001/game')
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
        setDataIsSet(false);
      })
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    getGames();
  }, []);

  function joinGame(id: string) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gameId: id, userId: location.state.token }),
    };

    console.log('WWO', id);
    fetch('http://localhost:3001/game/join', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setJoinGameId(result.id);
      }).catch((error) => console.log('error', error));

    // console.log(id);
    // setJoinGameId(id);
    // console.log(joinGameId);
  }

  function addGame() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ players: [location.state.token], turn: 0, state: 0 }),
    };

    fetch('http://localhost:3001/game', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setJoinGameId(result.id);
      }).catch((error) => console.log('error', error));
    // setJoinGameId(id);
    // console.log(joinGameId);
  }

  function GameIsJoin() {
    if (joinGameId) {
      return (
        <Redirect to={{
          pathname: `/game/${joinGameId}`,
          state: {
            token: location.state.token,
            game_id: joinGameId,
          },
        }}
        />
      );
    }
    return (
      <div />
    );
  }
  return (
    <>
      <h2>Dashboard</h2>
      <Button style={{ marginTop: '3%' }} onClick={async () => addGame()}>Join Game</Button>
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={getGames}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={item.id}
                  description={
                    <Button style={{ marginTop: '3%' }} onClick={async () => joinGame(item.id)}>Join Game</Button>
                  }
                />
                <div>Content</div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
      <GameIsJoin />
    </>
  );
}

export default Dashboard;
