import { ReactElement } from 'react';

import TaskDetailsModal from '../TaskDetailsModal';
import TaskSection from '../TaskSection';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setIsTaskDetailsModalVisible } from '@/src/redux/slices/taskSlice';

const clients = [
  { id: 1, name: 'Tasks' },
  { id: 2, name: 'To-Do' },
  { id: 3, name: 'In process' },
  { id: 4, name: 'Blocked' },
  { id: 5, name: 'QA' },
  { id: 6, name: 'Ready for review' },
  { id: 7, name: 'Done' },
];

const tasks = [
  { id: 1, title: 'Add pagination to customers pages' },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    title: 'Accusantium possimus error fugiat voluptates',
  },
];

const TasksContainer = (): ReactElement => {
  const { isTaskDetailsModalVisible } = useAppSelector(
    (selector) => selector.task
  );
  const dispatch = useAppDispatch();

  const handleOnCloseDetailsModal = (): void => {
    dispatch(setIsTaskDetailsModalVisible(false));
  };

  return (
    <article className="p-4 flex w-screen gap-4 overflow-x-auto">
      <TaskDetailsModal
        onClose={handleOnCloseDetailsModal}
        visible={isTaskDetailsModalVisible}
      />
      {clients.map((client) => (
        <TaskSection key={client.id} name={client.name} tasks={tasks} />
      ))}
    </article>
  );
};

export default TasksContainer;
