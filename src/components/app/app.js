import { TIME, GRID_SIZE, PLAYER_NAMES } from '../../constants/static-variables/static-variables';

import Home from "../../pages/home/home";

const App = () => {
  return (
    <div className="app">
      <Home
        time={TIME}
        gridSize={GRID_SIZE}
        playerNames={PLAYER_NAMES}
      />
    </div>
  );
}

export default App;