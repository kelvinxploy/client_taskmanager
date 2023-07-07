import { Dialog, Transition } from '@headlessui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { Fragment } from 'react';

import CreateTaskForm from '../CreateTaskForm';

import { createTask } from '@/src/adapters/task';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setIsCreateTaskModalVisible } from '@/src/redux/slices/taskSlice';

type CreateTaskModalProps = {
  visible: boolean;
  onClose: () => void;
};

const CreateTaskModal = ({
  visible,
  onClose,
}: CreateTaskModalProps): React.ReactElement => {
  const { defaultLabel } = useAppSelector((selector) => selector.task);
  const queryCliennt = useQueryClient();
  const dispatch = useAppDispatch();
  const { status, mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryCliennt.prefetchQuery({ queryKey: ['tasks'] });
      dispatch(setIsCreateTaskModalVisible(false));
    },
  });

  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all w-full sm:max-w-lg">
                <CreateTaskForm
                  onSubmit={mutate}
                  loading={status === 'loading'}
                  defaultLabel={defaultLabel}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default CreateTaskModal;
