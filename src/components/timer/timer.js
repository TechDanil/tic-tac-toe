import { useEffect, useState } from "react";

import './timer.scss';

const Timer = ({ time, winner, isNewGame, isTimeFinished, setIsTimeFinished }) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    if (seconds <= 0) {
      setIsTimeFinished(true);
      clearInterval(intervalId);
    }

    if (winner)
      stopTimer(intervalId);

    return () => clearInterval(intervalId);
  }, [seconds, winner]);

  useEffect(() => {
      setSeconds(time);
  }, [isNewGame, time])

  useEffect(() => {
  },[isTimeFinished])

  const stopTimer = (intervalId) => {
    clearInterval(intervalId);
  }

  const convertTimeValue = value => {
    return `${value.toString().padStart(2, '0')}`;
  }

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${convertTimeValue(minutes)}:${convertTimeValue(seconds)}`;
  }

  return (
    <div className="timer">
      <span className='timer__tracker'>
        {formatTime(seconds)}
      </span>
    </div>
  );

}

export default Timer;