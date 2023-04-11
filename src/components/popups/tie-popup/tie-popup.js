import { useEffect } from "react";

import '../../../styles/popup.scss';
import '../../../styles/button.scss';
import './tie-popup.scss';

const TiePopup = ({ resetGame }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = '';
  }, []);

  return (
    <div className="popup">
      <div className="popup__block tie-popup__block">
        <div className="popup__block-text">
          Ничья
        </div>
        <button className="button tie-popup__button" onClick={resetGame}>новая игра</button>
      </div>
    </div>
  );
}

export default TiePopup;