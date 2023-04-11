import { useEffect } from "react";

import award from '../../../assets/icons/award.svg';
import '../../../styles/popup.scss';
import '../../../styles/button.scss';

const WinPopup = ({ winnerName, resetGame }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = '';
  }, []);

  return (
    <div className="popup">
      <div className="popup__block">
        <img src={award} alt={award}/>

        <div className="popup__block-text">
          {winnerName} победил!
        </div>

        <div className="popup__block-buttons">
          <button className="button" onClick={resetGame}>новая игра</button>
          <button className="button button_gray button_black_text">выйти в меню</button>
        </div>
      </div>
    </div>
  );
}

export default WinPopup;