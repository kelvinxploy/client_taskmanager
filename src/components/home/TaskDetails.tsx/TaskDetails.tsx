import React, { useState } from 'react';

import AssignActions from '../AsignActions';

import { Task } from '@/src/types/task';

type TaskDetailsProps = {
  task: Task;
};

const fields = [
  { id: 1, title: 'Job number', field: 'task_number' },
  { id: 2, title: 'Job type', field: 'task_type' },
  { id: 3, title: 'Contact name', field: 'contact_name' },
  { id: 4, title: 'Contact number', field: 'contact_number' },
];

const TaskDetails = ({ task }: TaskDetailsProps): React.ReactElement => {
  const [assigned, setAssigned] = useState('');
  const [labelled, setLabelled] = useState('');

  return (
    <section className="mt-3 w-full">
      <div className="w-full px-4 sm:px-0">
        <h2 className="text-lg font-bold text-gray-700 sm:pr-12">
          {task.title}
        </h2>
        <AssignActions
          assigned={assigned}
          labelled={labelled}
          setAssigned={setAssigned}
          setLabelled={setLabelled}
          align="right"
        />
      </div>
      <div className="mt-6">
        <dl className="grid grid-cols-2">
          {fields.map(({ id, title, field }) => (
            <div
              key={id}
              className="border-t border-gray-300 px-4 py-6 sm:px-0"
            >
              <dt className="text-sm font-medium leading-6 text-gray-900">
                {title}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {task[field as 'title']}
              </dd>
            </div>
          ))}
          <div className="border-t border-gray-300 px-4 py-6 col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Note
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
              {task.note}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
export default TaskDetails;
