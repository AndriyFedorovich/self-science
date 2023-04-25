import React, { memo } from 'react';
import ButtonPrimary from 'components/Buttons/ButtonPrimary';
import Dropdown from 'components/Dropdown';
import getButtonUiType from './helpers/getButtonUiType';
import ButtonLink from 'components/Buttons/ButtonLink';
import { NotificationsType } from 'src/types/quizSetTypes';
import styles from './Panel.module.scss';
import { NOTIFICATIONS_TYPES } from 'constants/quizzes.constants';

interface PanelProps {
  isValidQuestionSet: boolean;
  isActiveQuizSet: boolean;
  errors: string[];
  onActivateSet: () => void;
  onEditSet: () => void;
  onChangeSetNotificationsType: (notificationsType: NotificationsType) => void;
}

const options = [
  { key: NOTIFICATIONS_TYPES.NEVER, value: 'Never' },
  { key: NOTIFICATIONS_TYPES.DAILY, value: 'Daily' },
  { key: NOTIFICATIONS_TYPES.WEEKLY, value: 'Weekly' },
];

function Panel({
  onActivateSet,
  onEditSet,
  onChangeSetNotificationsType,
  isValidQuestionSet,
  isActiveQuizSet,
  errors,
}: PanelProps) {
  const buttonUiType = getButtonUiType({ isActiveQuizSet, isValidQuestionSet });

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        {isActiveQuizSet ? (
          <ButtonPrimary onClick={onEditSet} text="Edit set" />
        ) : (
          <ButtonPrimary
            onClick={onActivateSet}
            uiType={buttonUiType}
            text="Start set"
          />
        )}
        <div className={styles.row}>
          <Dropdown
            mode="plain"
            onSelect={onChangeSetNotificationsType}
            selectedOptions={[options[0]]}
            options={options}
            label="Notifications:"
          />
        </div>
        <div className={styles.row}>
          <ButtonLink>Show set history</ButtonLink>
        </div>
      </div>
      {!isValidQuestionSet && (
        <div className={styles.errors}>
          {errors.map(error => (
            <div key={error}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(Panel);
