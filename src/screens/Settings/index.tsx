import React from 'react';
import WrapContent from 'components/GridComponents/WrapContent';

import styles from './Settings.module.scss';
import H1 from 'components/Typography/H1';

const Settings = () => {
  return (
    <div className={styles.wrap}>
      <WrapContent>
        <div className={styles.grid}>
          <div className={styles.content}>
            <H1>Settings</H1>
          </div>
        </div>
      </WrapContent>
    </div>
  );
};

export default Settings;
