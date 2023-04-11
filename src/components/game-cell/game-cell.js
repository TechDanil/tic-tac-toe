import cross from "../../assets/icons/cross.svg";
import zero from "../../assets/icons/zero.svg";

const GameCell = ({ value, onClick, isWinnerX, isWinnerO }) => {
  return (
    <li
      className={`game-field__cell ${
        isWinnerX ? "winner-x" : ""}
        ${ isWinnerO ? "winner-o" : "" }`}
      onClick={onClick}
    >
      { value === 'X' ? <img src={cross} alt={cross}/> : null }
      { value === 'O' ? <img src={zero} alt={zero}/> : null }
    </li>
  );
}

export default GameCell;