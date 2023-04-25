import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import quizzesReducer from './quizzes';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    quizzes: quizzesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const withPayloadType =
  <T>() =>
  (t: T) => ({ payload: t });
