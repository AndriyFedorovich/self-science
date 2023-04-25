import React, { SetStateAction, useEffect, Dispatch } from 'react';
import { secondsToDhms } from 'src/helpers/date.helpers';

interface TimerProps {
  isTimerActive: boolean;
  className?: string;
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
}

const Timer = ({
  isTimerActive = false,
  className,
  seconds,
  setSeconds,
}: TimerProps) => {
  useEffect(() => {
    let interval = null as any;
    if (isTimerActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isTimerActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, seconds]);

  return <time className={className}>{secondsToDhms(seconds)}</time>;
};

export default Timer;
