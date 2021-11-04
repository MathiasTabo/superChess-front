import React, { useEffect } from 'react';
import { ReactComponent as PionWhiteUp } from '../pionWhiteUp.svg';
// import { ReactComponent as PionBlackDown } from '../pionBlackDown.svg';
import socket from './Socket';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChessBishop } from '@fortawesome/free-solid-svg-icons'; // Fou

interface ICaseProps {
  key: number;
  black: boolean;
  x: number;
  y: number;
  size: number;
  color: boolean;
  id: number;
  gameId: string;
  token: string;
}

// interface IPiece{
//   x: number;
//   y: number;
//   size: number;
// }

interface IBoardProps {
  //   // board: Array<Array<IPiece>>;
  gameId: string;
  token: string;
  //   onPieceClick: Function;
}

function Case(props: ICaseProps) {
  const {
    black, key, x, y, size, color, id, gameId, token,
  } = props;
  const onPieceClick = (_x: number, _y: number) => {
    socket.emit('GameToServer', {
      room: gameId,
      player: token,
      x,
      y,
    });
    console.log(`x : ${_x} y : ${_y}`);
  };

  return (
    <div
      key={key}
      style={{
        height: `${size.toString()}px`,
        width: `${size.toString()}px`,
        backgroundColor: black ? 'black' : 'lightgrey',
        border: '0.5px solid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => { onPieceClick(x, y); }}
      onKeyDown={() => { console.log(x, y); }}
      role="button"
      tabIndex={0}
    >
      {/* {
        (id === 1 && color === true)
          ? <PionWhiteUp style={{ height: `${(size / 1.5).toString()}px`,
          width: `${(size / 1.5).toString()}px`,
          margin: `${((size - (size / 1.5)) / 2).toString()}px` }} />
          : <div />
      } */}
      {
        (id === 1 && color === false)
          ? <PionWhiteUp style={{ height: `${(size / 1.5).toString()}px`, width: `${(size / 1.5).toString()}px`, margin: `${((size - (size / 1.5)) / 2).toString()}px` }} />
          : <div />
      }
      {/* <FontAwesomeIcon key={key} icon={faChessBishop} color="#ffffff" style=
      {{ height: `${(size / 1.5).toString()}px`, width: `${(size / 1.5).toString()}px`
      , margin: `${((size - (size / 1.5)) / 2).toString()}px` }} /> */}
      {/* <p key={key}>
        {x.toString()}
        |
        {y.toString()}
      </p> */}
    </div>
  );
}

function Board(props: IBoardProps) {
  const {
    gameId, token,
  } = props;
  const [rows, setRows] = React.useState<Array<any>>([]);
  const size = 80;
  // const {
  //   onPieceClick,
  // } = props;

  useEffect(() => {
    const arr = [];
    let x: number = 0;
    let y: number = 0;
    let id = 1;
    let color:boolean = true;
    for (let i: any = 0; i < 64; i += 1) {
      if (i > 6) {
        id = 0;
      }
      if (i > 3) {
        color = false;
      }
      console.log((i + (i / 9)) % 2);
      x = i === 0 ? 0 : i % 8;
      y = i === 0 ? 0 : Math.floor(i / 8);
      arr.push(
        <Case
          key={i}
          x={x}
          y={y}
          size={size}
          color={color}
          id={id}
          black={y % 2 === 0 ? x % 2 === 1 : x % 2 === 0}
          gameId={gameId}
          token={token}
        />,
      );
    }
    setRows(arr);
  }, []);

  return (
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
  );
}

export default Board;
