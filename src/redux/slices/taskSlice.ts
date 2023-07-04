import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type TaskState = {
  isCreateTaskModalVisible: boolean;
};

const initialState: TaskState = {
  isCreateTaskModalVisible: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsCreateTaskModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isCreateTaskModalVisible = action.payload;
    },
  },
});

export const { setIsCreateTaskModalVisible } = taskSlice.actions;

const taskReducer = taskSlice.reducer;

export default taskReducer;
