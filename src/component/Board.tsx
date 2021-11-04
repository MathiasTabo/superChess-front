import React from 'react';
import { ReactComponent as PionWhiteUp } from '../pionWhiteUp.svg';
import { ReactComponent as PionBlackDown } from '../Chess_pdt45.svg';
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
//   id: number;
//   color: boolean;
// }

// interface IBoardProps {
//   gameId: string;
//   token: string;
//   board: Array<Array<IPiece>>;
//   posiblePos: any;
// }

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
        backgroundColor: black ? 'DimGray' : 'lightgrey',
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
      {
        (id === 1 && color === true)
          ? <PionBlackDown style={{ height: `${(size / 1.5).toString()}px`, width: `${(size / 1.5).toString()}px`, margin: `${((size - (size / 1.5)) / 2).toString()}px` }} />
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

export default Case;

// function Board(props: IBoardProps) {
//   const {
//     gameId, token, board, posiblePos,
//   } = props;
//   const [rows, setRows] = React.useState<Array<any>>([]);
//   const size = 80;
//   // const {
//   //   onPieceClick,
//   // } = props;
//   console.log(posiblePos);
//   console.log(board);
//   useEffect(() => {
//     console.log('NAN');
//     const arr = [];
//     let i: number = 0;
//     const color: boolean = true;

//     for (let y = 0; y < 8; y += 1) {
//       for (let x = 0; x < 8; x += 1) {
//         if (board && board[y] && board[y][x] && board[y][x] !== null) {
//           arr.push(
//             <Case
//               key={i}
//               x={x}
//               y={y}
//               size={size}
//               color={board[y][x].color}
//               id={board[y][x].id}
//               black={y % 2 === 0 ? x % 2 === 1 : x % 2 === 0}
//               gameId={gameId}
//               token={token}
//             />,
//           );
//         } else {
//           arr.push(
//             <Case
//               key={i}
//               x={x}
//               y={y}
//               size={size}
//               color={color}
//               id={0}
//               black={y % 2 === 0 ? x % 2 === 1 : x % 2 === 0}
//               gameId={gameId}
//               token={token}
//             />,
//           );
//         }
//         i += 1;
//       }
//     }
//     setRows(arr);
//   }, []);

//   return (
//     <>
//       <div style={{
//         display: 'flex', flexDirection:
//  'row', flexWrap: 'wrap', width: `${((size * 8) + 1).toString()}px`,
//       }}
//       >
//         {
//           rows
//         }
//       </div>
//     </>
//   );
// }

// export default Board;
