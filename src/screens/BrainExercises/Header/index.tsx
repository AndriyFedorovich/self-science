import ButtonClose from 'components/Buttons/ButtonClose';
import React from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
  isTimerActive: boolean;
  onStopTimer: () => void;
}

const Header = ({ isTimerActive, onStopTimer }: HeaderProps) => {
  return (
    <div className={styles.root}>
      {isTimerActive && (
        <div className={styles.close}>
          <ButtonClose onClick={onStopTimer} />
        </div>
      )}
    </div>
  );
};

export default Header;
