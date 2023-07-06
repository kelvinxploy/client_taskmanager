import { Listbox, Transition } from '@headlessui/react';
import { TagIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import React, { Fragment } from 'react';

import UserAvatar from '@/components/common/UserAvatar';
import { classNames } from '@/src/utils';

export const labels = [
  { name: 'Tasks', value: 'task' },
  { name: 'To-Do', value: 'todo' },
  { name: 'In process', value: 'in-proess' },
  // More items...
];

export const assignees = [
  { name: 'Unassigned', value: null },
  {
    name: 'Kelvin Lora',
    value: 'kl',
  },
];

export type AssignOption = { name: string; value: string | null };

type AssignActionsProps = {
  align?: 'right' | 'left';
  setAssigned: (option: AssignOption) => void;
  setLabelled: (option: AssignOption) => void;
  labelled: AssignOption;
  assigned: AssignOption;
};
const AssignActions = ({
  align = 'left',
  assigned,
  labelled,
  setAssigned,
  setLabelled,
}: AssignActionsProps): React.ReactElement => {
  const justifyClassName =
    align === 'left' ? 'justify-start' : 'justify-end px-2';

  return (
    <div className={`flex flex-nowrap ${justifyClassName} space-x-2 py-2`}>
      <Listbox
        as="div"
        value={labelled}
        onChange={setLabelled}
        className="flex-shrink-0"
      >
        {({ open }): React.ReactElement => (
          <>
            <Listbox.Label className="sr-only">Add a label</Listbox.Label>
            <div className="relative">
              <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                <TagIcon
                  className="text-gray-500 h-5 w-5 flex-shrink-0 sm:-ml-1"
                  aria-hidden="true"
                />
                <span className="text-gray-900 block truncate sm:ml-2">
                  {labelled.value === null ? 'Label' : labelled.name}
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
                  {labels.map((label) => (
                    <Listbox.Option
                      key={label.value}
                      className={({ active }): string =>
                        classNames(
                          active ? 'bg-gray-100' : 'bg-white',
                          'relative cursor-default select-none px-3 py-2'
                        )
                      }
                      value={label}
                    >
                      <div className="flex items-center">
                        <span className="block truncate font-medium">
                          {label.name}
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
                  <UserAvatar name={assigned.name} />
                )}

                <span
                  className={classNames(
                    assigned.value === null ? '' : 'text-gray-900',
                    'block truncate sm:ml-2'
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
                        <UserAvatar name={assignee.name} />

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
    </div>
  );
};
export default AssignActions;
