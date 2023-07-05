import { PlusIcon } from '@heroicons/react/20/solid';
import React from 'react';

import TaskCard from '../TaskCard';

import { useAppDispatch } from '@/src/redux/hooks';
import { setIsTaskDetailsModalVisible } from '@/src/redux/slices/taskSlice';

type TaskSectionProps = {
  name: string;
  tasks: { id: number; title: string }[];
};

const TaskSection = ({ name, tasks }: TaskSectionProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleOpenDetailsModal = (): void => {
    dispatch(setIsTaskDetailsModalVisible(true));
  };

  return (
    <section className="w-[80%] h-fit sm:w-72 p-3 flex-0 rounded-xl bg-the-gray border border-gray-200">
      <div className="text-sm font-bold leading-6 text-gray-900">{name}</div>

      <ul className="w-full mt-3 space-y-4 max-h-[70vh] overflow-y-auto">
        {tasks.map(({ id, title }) => (
          <TaskCard key={id} onClick={handleOpenDetailsModal} title={title} />
        ))}
      </ul>

      <button className="mt-4 p-1 w-full flex items-center gap-1 rounded-md hover:bg-gray-200">
        <PlusIcon className="h-4 w-4" />{' '}
        <p className="text-sm text-gray-500">Add a ticket</p>
      </button>
    </section>
  );
};
export default TaskSection;
