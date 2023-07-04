import { ReactElement } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setIsCreateTaskModalVisible } from '../redux/slices/taskSlice';

import Navbar from '@/components/common/Navbar';
import CreateTaskModal from '@/components/home/CreateTaskModal';
import TasksContainer from '@/components/home/TasksContainer';

export default function Home(): ReactElement {
  const { isCreateTaskModalVisible } = useAppSelector(
    (selector) => selector.task
  );
  const dispatch = useAppDispatch();

  const handleCreateTaskModalVisibility = (): void => {
    dispatch(setIsCreateTaskModalVisible(!isCreateTaskModalVisible));
  };

  return (
    <main>
      <Navbar onCreateTaskClick={handleCreateTaskModalVisibility} />

      <CreateTaskModal
        visible={isCreateTaskModalVisible}
        onClose={handleCreateTaskModalVisibility}
      />

      <TasksContainer />
    </main>
  );
}
