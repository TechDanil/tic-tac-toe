import GameCell from "../game-cell/game-cell";

import './game-field.scss';

const View = ({ grid, handleClick, winner, winningCells}) => {
  const renderedGrid = grid.map((cell, index) => {
    const isWinnerX = winner && winningCells.includes(index) && winner === 'X';
    const isWinnerO = winner && winningCells.includes(index) && winner === 'O';
    return (
      <GameCell
        isWinnerX={isWinnerX}
        isWinnerO={isWinnerO}
        key={index}
        value={cell}
        onClick={() => handleClick(index)}
      />
    );
  });

  return (
    <ul className="game-field">
      {renderedGrid}
    </ul>
  );
}

const GameField = ({ isNextPlayer, setIsNextPlayer,
  setGrid, grid, calculateWinner,
  switchPlayerName, winningCells, winner }) => {

  const handleClick = index => {
    const newGrid = [...grid];

    if (newGrid[index] || calculateWinner(newGrid))
      return;

    newGrid[index] = isNextPlayer ? 'O' : 'X';
    setGrid(newGrid);
    setIsNextPlayer(!isNextPlayer);
    switchPlayerName();
  }

  return (
    <View
      winner={winner}
      winningCells={winningCells}
      isNextPlayer={isNextPlayer}
      grid={grid}
      handleClick={handleClick}
    />
  )
}

export default GameField;