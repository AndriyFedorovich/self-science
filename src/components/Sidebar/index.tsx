import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectQuizSets } from 'store/quizzes/selectors';
import { quizSetType } from 'src/types/quizSetTypes';
import SidebarSection from './SidebarSection';
import { mapQuestionSetOptionsToSidebar } from './helpers/mapQuestionSetOptionsToSidebar';
import {
  ROUTE_SETTING,
  ROUTE_BRAIN_EXERCISES,
} from 'constants/routes.constants';
import SidebarLink from './SidebarLink';
import styles from './Sidebar.module.scss';

const createQuizSetOption = {
  id: 'createQuizSetOption',
  title: '+ Create set',
};

const createActivitiesSetOption = {
  id: 'createActivitiesSetOption',
  title: '+ Create set',
};

function Sidebar() {
  const quizSets = useSelector(selectQuizSets);

  const quizSet = mapQuestionSetOptionsToSidebar([
    ...quizSets,
    createQuizSetOption as quizSetType,
  ]);

  return (
    <aside className={styles.root}>
      <div className={styles.content}>
        <div className={styles.row}>
          <SidebarSection title="Quizzes:" list={quizSet} />
        </div>
        <div className={styles.row}>
          <SidebarSection
            title="Activities:"
            list={[createActivitiesSetOption]}
          />
        </div>
        <div className={styles.row}>
          <SidebarLink href={ROUTE_BRAIN_EXERCISES}>
            Brain Exercises
          </SidebarLink>
        </div>
        <div className={styles.row}>
          <SidebarLink href={ROUTE_SETTING}>Settings</SidebarLink>
        </div>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
