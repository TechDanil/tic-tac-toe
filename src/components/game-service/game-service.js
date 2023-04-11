import { useEffect, useState } from "react";
import { WAYS } from "../../constants/static-variables/static-variables";

import GameField from "../game-field/game-field";
import WinPopup from "../popups/win-popup/win-popup";

import Timer from "../timer/timer";
import TiePopup from "../popups/tie-popup/tie-popup";
import TimePopup from "../popups/time-popup/time-popup";

import cross from "../../assets/icons/cross.svg";
import zero from "../../assets/icons/zero.svg";

import './game-service.scss';

const GameService = ({ time, gridSize}) => {
  const [grid, setGrid] = useState(Array(gridSize).fill(null));
  const [isNextPlayer, setIsNextPlayer] = useState(false);
  const [playerName, setPlayerName] = useState('X');
  const [winner, setWinner] = useState(null);
  const [isNewGame, setIsNewGame] = useState(false);
  const [isTimeFinished, setIsTimeFinished] = useState(false);
  const [winningCells, setWinningCells] = useState([]);

  useEffect(() => {
    const winner = calculateWinner(grid);
    setWinner(winner);
  }, [winner, grid]);

  useEffect(() => {
    if (isNewGame)
      setIsNewGame(false);
  }, [isNewGame]);

  useEffect(() => {
    if (winner === 'X')
      console.log('true');
  }, [winner])

  const switchPlayerName = () => {
    setPlayerName( playerName === 'X' ? 'O': 'X');
    console.log(playerName);
  }

  const calculateWinner = cells => {
    for (let i = 0; i < WAYS.length; i++) {
      const [cellA, cellB, cellC] = WAYS[i];
      if (cells[cellA] && cells[cellA] === cells[cellB] && cells[cellA] === cells[cellC]) {
        setWinningCells([cellA, cellB, cellC]);
        return cells[cellA];
      }
    }

    return null;
  }

  const resetGame = () => {
    setGrid(Array(gridSize).fill(null));
    setWinner(null);
    setIsNewGame(true);
    setIsTimeFinished(false);
    setWinningCells([]);
  }

  const winPopup = winner ? <WinPopup
    winnerName={winner}
    resetGame={resetGame}
  /> : null;

  const tiePopup = grid.every(cell => cell !== null) && !winner ? <TiePopup
    resetGame={resetGame}
  /> : null;

  const elapsedTimePopup = isTimeFinished ? <TimePopup
    resetGame={resetGame}
  /> : null;

  console.log(winningCells)
  console.log(time);
  console.log(winner);

  return (
    <>
      {winPopup}
      {tiePopup}
      {elapsedTimePopup}

      <Timer
        time={time}
        winner={winner}
        isNewGame={isNewGame}
        isTimeFinished={isTimeFinished}
        setIsTimeFinished={setIsTimeFinished}
      />

      <GameField
        grid={grid}
        setGrid={setGrid}
        gridSize={gridSize}
        isNextPlayer={isNextPlayer}
        setIsNextPlayer={setIsNextPlayer}
        calculateWinner={calculateWinner}
        switchPlayerName={switchPlayerName}
        winningCells={winningCells}
        winner={winner}
      />

      <div className="game-service__info">
        <div className="game-service__info-content">
          <span className="game-service__info-text">Ходит</span>
          { !isNextPlayer ? <img src={cross} alt={cross}/> : null }
          { isNextPlayer ? <img src={zero} alt={zero}/> : null }
          <span className="game-service__player-name">{playerName}</span>
        </div>
      </div>
    </>
  );
}

export default GameService;