import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Task } from '@/src/types/task';

export type TaskState = {
  isCreateTaskModalVisible: boolean;
  isTaskDetailsModalVisible: boolean;
  defaultLabel: string;
  selectedTask: Task;
};

const initialState: TaskState = {
  isCreateTaskModalVisible: false,
  isTaskDetailsModalVisible: false,
  defaultLabel: '',
  selectedTask: {} as Task,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsCreateTaskModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isCreateTaskModalVisible = action.payload;
    },
    setSelectedTask: (state, action: PayloadAction<Task>) => {
      state.selectedTask = action.payload;
    },
    setDefaultLabel: (state, action: PayloadAction<string>) => {
      state.defaultLabel = action.payload;
    },
  },
});

export const { setIsCreateTaskModalVisible, setSelectedTask, setDefaultLabel } =
  taskSlice.actions;

const taskReducer = taskSlice.reducer;

export default taskReducer;
