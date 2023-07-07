import { PlusIcon } from '@heroicons/react/20/solid';
import React from 'react';

import TaskCard from '../TaskCard';

import { useAppDispatch } from '@/src/redux/hooks';
import {
  setDefaultLabel,
  setIsCreateTaskModalVisible,
  setSelectedTask,
} from '@/src/redux/slices/taskSlice';
import { Task } from '@/src/types/task';

type TaskSectionProps = {
  id: string;
  name: string;
  tasks: Task[];
};

const TaskSection = ({
  id,
  name,
  tasks,
}: TaskSectionProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleOpenDetailsModal = (task: Task): void => {
    dispatch(setSelectedTask(task));
  };

  const handleOpenCreateTaskModal = (): void => {
    dispatch(setDefaultLabel(id));
    dispatch(setIsCreateTaskModalVisible(true));
  };

  return (
    <section className="w-[80%] h-fit sm:w-72 p-3 flex-0 rounded-xl bg-the-gray border border-gray-200">
      <div className="text-sm font-bold leading-6 text-gray-900">{name}</div>

      <ul className="w-full mt-3 space-y-4 max-h-[70vh] overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            onClick={(): void => handleOpenDetailsModal(task)}
            title={task.title}
          />
        ))}
      </ul>

      <button
        onClick={handleOpenCreateTaskModal}
        className="mt-4 p-1 w-full flex items-center gap-1 rounded-md hover:bg-gray-200"
      >
        <PlusIcon className="h-4 w-4" />{' '}
        <p className="text-sm text-gray-500">Add a ticket</p>
      </button>
    </section>
  );
};
export default TaskSection;
