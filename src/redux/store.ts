import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
