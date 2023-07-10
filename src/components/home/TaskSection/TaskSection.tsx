import { PlusIcon } from '@heroicons/react/20/solid';
import React from 'react';

import TaskCard from '../TaskCard';

import { assigneesByValue } from '@/src/constants';
import { Task } from '@/src/types/task';

type TaskSectionProps = {
  id: string;
  name: string;
  tasks: Task[];
  handleOpenDetailsModal: (task: Task) => void;
  handleOpenCreateTaskModal: (labelId: string) => void;
};

const TaskSection = ({
  id,
  name,
  tasks,
  handleOpenCreateTaskModal,
  handleOpenDetailsModal,
}: TaskSectionProps): React.ReactElement => {
  return (
    <section className="w-[80%] h-fit sm:w-72 p-3 flex-0 rounded-xl bg-the-gray border border-gray-200">
      <div className="text-sm font-bold leading-6 text-gray-900">{name}</div>

      <ul className="w-full mt-3 space-y-4 max-h-[70vh] overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            taskNumber={task.task_number}
            onClick={(): void => handleOpenDetailsModal(task)}
            title={task.title}
            type={task.task_type}
            assigneeName={assigneesByValue[task.assignee]}
          />
        ))}
      </ul>

      <button
        onClick={(): void => handleOpenCreateTaskModal(id)}
        className="mt-4 p-1 w-full flex items-center gap-1 rounded-md hover:bg-gray-200"
      >
        <PlusIcon className="h-4 w-4" />{' '}
        <p className="text-sm text-gray-500">Add a ticket</p>
      </button>
    </section>
  );
};
export default TaskSection;
