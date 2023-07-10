import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Task } from '@/src/types/task';

type CreateTaskModalState = {
  isModalVisible: boolean;
  defaultLabel?: string;
  defaultAssignee?: string;
};

export type TaskState = {
  createTaskModalState: CreateTaskModalState;
  selectedTask: Task;
  isDetailsModalVisible: boolean;
};

const initialState: TaskState = {
  createTaskModalState: {
    isModalVisible: false,
    defaultLabel: '',
    defaultAssignee: '',
  },
  isDetailsModalVisible: false,
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
      const {
        defaultAssignee = '',
        defaultLabel = '',
        ...rest
      } = action.payload;

      state.createTaskModalState = {
        ...rest,
        defaultAssignee,
        defaultLabel,
      };
    },
    setSelectedTask: (state, action: PayloadAction<Task>) => {
      state.selectedTask = action.payload;
    },
    setIsDetailsModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isDetailsModalVisible = action.payload;
    },
  },
});

export const {
  setCreateTaskModalState,
  setIsDetailsModalVisible,
  setSelectedTask,
} = taskSlice.actions;

const taskReducer = taskSlice.reducer;

export default taskReducer;
