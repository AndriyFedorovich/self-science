import { createReducer, AnyAction } from '@reduxjs/toolkit';
import { moduleType } from 'src/types/activeModules';
import { SET_MODULES, SET_ME } from './constants';

interface userState {
  me: object | null;
  modules: moduleType[];
}

const initialState: userState = {
  me: null,
  modules: ['quizzes', 'activities', 'wheelOfLife'],
};

const quizzesReducer = createReducer(initialState, builder =>
  builder
    .addCase(SET_ME, (state: userState, action: AnyAction) => {
      state.me = action.payload;
    })
    .addCase(SET_MODULES, (state: userState, action: AnyAction) => {
      state.modules = action.payload;
    }),
);

export default quizzesReducer;
