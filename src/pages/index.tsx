import { useQuery } from '@tanstack/react-query';
import { ReactElement } from 'react';

import { getTasks } from '../adapters/task';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  setDefaultLabel,
  setIsCreateTaskModalVisible,
} from '../redux/slices/taskSlice';
import { Task } from '../types/task';

import Navbar from '@/components/common/Navbar';
import CreateTaskModal from '@/components/home/CreateTaskModal';
import TasksContainer from '@/components/home/TasksContainer';

export default function Home(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { status, error, data } = useQuery({
    queryKey: ['tasks'],
    keepPreviousData: true,
    queryFn: getTasks,
  });
  const tasks = (data?.data || []) as Task[];

  const { isCreateTaskModalVisible } = useAppSelector(
    (selector) => selector.task
  );
  const dispatch = useAppDispatch();

  const handleCreateTaskModalVisibility = (): void => {
    dispatch(setIsCreateTaskModalVisible(!isCreateTaskModalVisible));
    isCreateTaskModalVisible && dispatch(setDefaultLabel(''));
  };

  return (
    <main>
      <Navbar onCreateTaskClick={handleCreateTaskModalVisibility} />

      <CreateTaskModal
        visible={isCreateTaskModalVisible}
        onClose={handleCreateTaskModalVisibility}
      />

      <TasksContainer tasks={tasks} />
    </main>
  );
}
