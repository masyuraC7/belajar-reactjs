/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function CalculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}

function Board({ player, squares, onPlay }) {
  function onHandleClick(i) {
    const nextSquares = squares.slice();
    if (CalculateWinner(nextSquares)) 
      return alert("Jangan nangis ya, udah ada yang menang!");
    if (nextSquares[i] != null)
      return alert("Hey jangan curang, isi yang laen!");
    nextSquares[i] = player;

    onPlay(nextSquares);
  }

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${player}`;
  }

  return (
    <div>
      <div className="game-status">
        <div>{status}</div>
      </div>
      <div className="board-flex">
        <Square value={squares[0]} onSquareClick={() => onHandleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onHandleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onHandleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => onHandleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onHandleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onHandleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => onHandleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onHandleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onHandleClick(8)} />
      </div>
    </div>
  );
}

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentHistory = history[currentMove];
  const player = currentMove % 2 === 0 ? "X" : "O";

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, index) => {
    const desc = index
      ? `Go to move #${index}`
      : "Go to game start";
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{desc}</button>
      </li>
    );
  })

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board player={player} squares={currentHistory} onPlay={handlePlay} />
      </div>
      <div className="game-history">
        <h2>History Game</h2>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
