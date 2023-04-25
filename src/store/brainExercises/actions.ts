import { createAction } from '@reduxjs/toolkit';
import { withPayloadType } from '../store';
import { quizSetType } from '../../types/quizSetTypes';

import { SET_QUIZ_SETS } from './constants';

export const setQuizSets = createAction(
  SET_QUIZ_SETS,
  withPayloadType<quizSetType[]>(),
);
