import React, { useState } from 'react';
import WrapContent from 'components/GridComponents/WrapContent';
import Timer from 'components/Timer';
import Equations from './Equations';
import styles from './BrainExercises.module.scss';
import Header from './Header';

const BrainExercises = () => {
  const [seconds, setSeconds] = useState(0);
  const [isTimerActive, setTimerActive] = useState(false);

  const handleStartTimer = () => {
    setTimerActive(true);
  };

  const handleStopTimer = () => {
    setTimerActive(false);
  };

  const handleResetTimer = () => {
    setSeconds(0);
    handleStopTimer();
  };

  const handleFinish = () => {
    handleResetTimer();
  };

  return (
    <WrapContent>
      <div className={styles.content}>
        <Header isTimerActive={isTimerActive} onStopTimer={handleStopTimer} />
        {!isTimerActive && (
          <button onClick={handleStartTimer}>Start Timer</button>
        )}
        {isTimerActive && (
          <Equations onFinish={handleFinish}>
            <Timer
              isTimerActive={isTimerActive}
              setSeconds={setSeconds}
              seconds={seconds}
            />
          </Equations>
        )}
      </div>
    </WrapContent>
  );
};

export default BrainExercises;
