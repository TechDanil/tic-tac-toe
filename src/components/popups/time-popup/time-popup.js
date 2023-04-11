import { useEffect } from "react";

import './time-popup.scss';

const TimePopup = ({ resetGame }) =>  {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = '';
  }, []);

  return (
    <div className="popup">
      <div className="popup__block time-popup__block">
        <div className="popup__block-text">
          Время вышло
        </div>
        <button className="button time-popup__button" onClick={resetGame}>новая игра</button>
      </div>
    </div>
  );
}

export default TimePopup;