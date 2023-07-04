import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type TaskState = {
  isCreateTaskModalVisible: boolean;
  isTaskDetailsModalVisible: boolean;
};

const initialState: TaskState = {
  isCreateTaskModalVisible: false,
  isTaskDetailsModalVisible: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsCreateTaskModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isCreateTaskModalVisible = action.payload;
    },
    setIsTaskDetailsModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isTaskDetailsModalVisible = action.payload;
    },
  },
});

export const { setIsCreateTaskModalVisible, setIsTaskDetailsModalVisible } =
  taskSlice.actions;

const taskReducer = taskSlice.reducer;

export default taskReducer;
