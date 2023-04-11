import Nav from "../../components/nav/nav";
import Timer from "../../components/timer/timer";
import GameService from "../../components/game-service/game-service";

import './home.scss';

const Home = ({ time, gridSize, playerNames }) => {
  return (
    <>
      <header className="game-field__header">
        <div className="container">
          <Nav/>
        </div>
      </header>

      <section className="game">
        <GameService
          time={time}
          gridSize={gridSize}
          playerNames={playerNames}
        />
      </section>
    </>
  )
}

export default Home;