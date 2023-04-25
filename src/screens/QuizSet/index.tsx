import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { QUIZ_SET_STATUSES } from 'constants/quizzes.constants';
import WrapContent from 'components/GridComponents/WrapContent';
import InputHeader from 'components/FormComponents/InputHeader';
import { setQuizSetStatus } from 'store/quizzes/thunks';
import useQuizSet from './hooks/useQuizSet';
import useQuizSetValidation from './hooks/useQuizSetValidation';
import Questions from './Questions';
import Panel from './Panel';
import styles from './QuizSet.module.scss';

const QuestionSet = () => {
  const dispatch = useDispatch();
  const refTitle = useRef<HTMLInputElement>(null);

  const quizSet = useQuizSet();
  const { isValidQuestionSet, errors, showErrors } =
    useQuizSetValidation(quizSet);

  const handleActivateQuizSet = useCallback(() => {
    if (!isValidQuestionSet) {
      showErrors();
      return;
    }

    dispatch(setQuizSetStatus(quizSet?.id as string, QUIZ_SET_STATUSES.ACTIVE));
  }, [isValidQuestionSet, quizSet?.id]);

  const handleEditQuizSet = useCallback(() => {
    dispatch(
      setQuizSetStatus(quizSet?.id as string, QUIZ_SET_STATUSES.EDITING),
    );
  }, [quizSet?.id]);

  const handleChangeQuizNotificationsType = useCallback(
    notificationsType => {
      console.log('notificationsType: ', notificationsType);

      // dispatch(setQuizSetStatus(quizSet?.id as string, QUIZ_SET_STATUSES.EDITING));
    },
    [quizSet?.id],
  );

  if (!quizSet) {
    return null;
  }

  const isActiveQuizSet = quizSet?.status === QUIZ_SET_STATUSES.ACTIVE;

  const renderContent = () => {
    if (isActiveQuizSet) {
      return 'Active Quiz Set';
    }

    return <Questions quizSetId={quizSet.id} list={quizSet.questions} />;
  };

  return (
    <div className={styles.wrap}>
      <WrapContent>
        <div className={styles.grid}>
          <div className={styles.content}>
            <InputHeader
              readOnly={isActiveQuizSet}
              ref={refTitle}
              value={quizSet.title || ''}
              quizSetId={quizSet.id}
            />
            {renderContent()}
          </div>
          <Panel
            onActivateSet={handleActivateQuizSet}
            onEditSet={handleEditQuizSet}
            onChangeSetNotificationsType={handleChangeQuizNotificationsType}
            errors={errors}
            isActiveQuizSet={isActiveQuizSet}
            isValidQuestionSet={isValidQuestionSet}
          />
        </div>
      </WrapContent>
    </div>
  );
};

export default QuestionSet;
