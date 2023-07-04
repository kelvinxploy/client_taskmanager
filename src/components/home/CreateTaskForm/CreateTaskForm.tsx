import { Listbox, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import { FormEvent, Fragment, useState } from 'react';

import Button from '@/components/form/Button';
import { classNames, getWordsFirstLetterUppercase } from '@/src/utils';

const assignees = [
  { name: 'Unassigned', value: null },
  {
    name: 'Kelvin Lora',
    value: 'kl',
  },
];

const CreateTaskForm = (): React.ReactElement => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assigned, setAssigned] = useState(assignees[0]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log({ title, description, assigned });
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
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <Listbox
            as="div"
            value={assigned}
            onChange={setAssigned}
            className="flex-shrink-0"
          >
            {({ open }): React.ReactElement => (
              <>
                <Listbox.Label className="sr-only">Assign</Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                    {assigned.value === null ? (
                      <UserCircleIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1"
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="h-5 w-5 text-xs flex items-center justify-center text-white rounded-full bg-sky-600">
                        {getWordsFirstLetterUppercase(assigned.name)}
                      </span>
                    )}

                    <span
                      className={classNames(
                        assigned.value === null ? '' : 'text-gray-900',
                        'hidden truncate sm:ml-2 sm:block'
                      )}
                    >
                      {assigned.value === null ? 'Assign' : assigned.name}
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {assignees.map((assignee) => (
                        <Listbox.Option
                          key={assignee.value}
                          className={({ active }): string =>
                            classNames(
                              active ? 'bg-gray-100' : 'bg-white',
                              'relative cursor-pointer select-none px-3 py-2'
                            )
                          }
                          value={assignee}
                        >
                          <div className="flex items-center">
                            <span className="h-5 w-5 text-xs flex items-center justify-center text-white rounded-full bg-sky-600">
                              {getWordsFirstLetterUppercase(assignee.name)}
                            </span>

                            <span className="ml-3 block truncate font-medium">
                              {assignee.name}
                            </span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

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
