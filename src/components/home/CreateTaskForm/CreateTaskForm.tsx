import { FormEvent, useState } from 'react';

import AssignActions from '../AsignActions.tsx';
import { AssignOption } from '../AsignActions.tsx/AssignActions.jsx';

import Button from '@/components/form/Button';

const CreateTaskForm = (): React.ReactElement => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assigned, setAssigned] = useState({
    name: 'Unassigned',
    value: null,
  } as AssignOption);
  const [labelled, setLabelled] = useState({
    name: 'Tasks',
    value: 'task',
  } as AssignOption);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log({ title, description, assigned, labelled });
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
          placeholder="Title"
          onChange={(event): void => setTitle(event.target.value)}
          value={title}
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Write a description..."
          onChange={(event): void => setDescription(event.target.value)}
          value={description}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        <AssignActions
          assigned={assigned}
          labelled={labelled}
          setAssigned={setAssigned}
          setLabelled={setLabelled}
          align="right"
        />

        <div className="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <div className="flex-shrink-0">
            <Button disabled={!title} type="submit">
              Create
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTaskForm;
