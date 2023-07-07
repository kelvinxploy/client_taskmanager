import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Task } from '@/src/types/task';

type CreateTaskModalState = {
  isModalVisible: boolean;
  defaultLabel: string;
};

export type TaskState = {
  createTaskModalState: CreateTaskModalState;
  selectedTask: Task;
};

const initialState: TaskState = {
  createTaskModalState: {
    isModalVisible: false,
    defaultLabel: '',
  },
  selectedTask: {} as Task,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setCreateTaskModalState: (
      state,
      action: PayloadAction<CreateTaskModalState>
    ) => {
      state.createTaskModalState = action.payload;
    },
    setSelectedTask: (state, action: PayloadAction<Task>) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { setCreateTaskModalState, setSelectedTask } = taskSlice.actions;

const taskReducer = taskSlice.reducer;

export default taskReducer;
