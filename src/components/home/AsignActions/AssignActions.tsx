import { Listbox, Transition } from '@headlessui/react';
import { TagIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from 'react';

import UserAvatar from '@/components/common/UserAvatar';
import { labelsNameByValue, taskLabels } from '@/src/constants';
import { classNames } from '@/src/utils';

export const assignees = [
  { name: 'Unassigned', value: null },
  {
    name: 'Kelvin Lora',
    value: 'kl',
  },
];

const assigneesByValue = {
  '': '',
  kl: 'Kelvin Lora',
} as Record<string, string>;

type AssignActionsProps = {
  align?: 'right' | 'left';
  onAssignedChange?: (option: string) => void;
  onLabelChange: (option: string) => void;
  defaultLabel?: string;
  defaultAssigned?: string;
};
const AssignActions = ({
  align = 'left',
  defaultAssigned = '',
  defaultLabel = '',
  onLabelChange,
  onAssignedChange,
}: AssignActionsProps): React.ReactElement => {
  const [assigned, setAssigned] = useState(defaultAssigned);
  const [labelled, setLabelled] = useState(defaultLabel);
  const justifyClassName =
    align === 'left' ? 'justify-start' : 'justify-end px-2';

  return (
    <div className={`flex flex-nowrap ${justifyClassName} space-x-2 py-2`}>
      <Listbox
        as="div"
        value={labelled}
        onChange={(label): void => {
          setLabelled(label);
          onLabelChange(label);
        }}
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
                  {!labelled ? 'Label' : labelsNameByValue[labelled]}
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
                  {taskLabels.map((label) => (
                    <Listbox.Option
                      key={label.id}
                      className={({ active }): string =>
                        classNames(
                          active ? 'bg-gray-100' : 'bg-white',
                          'relative cursor-default select-none px-3 py-2'
                        )
                      }
                      value={label.id}
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
        onChange={(assignee): void => {
          setAssigned(assignee);
          onAssignedChange && onAssignedChange(assignee);
        }}
        className="flex-shrink-0"
      >
        {({ open }): React.ReactElement => (
          <>
            <Listbox.Label className="sr-only">Assign</Listbox.Label>
            <div className="relative">
              <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                {!assigned ? (
                  <UserCircleIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1"
                    aria-hidden="true"
                  />
                ) : (
                  <UserAvatar name={assigned} />
                )}

                <span
                  className={classNames(
                    !assigned ? '' : 'text-gray-900',
                    'block truncate sm:ml-2'
                  )}
                >
                  {!assigned ? 'Assign' : assigneesByValue[assigned]}
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
                      value={assignee.value}
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
