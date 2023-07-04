import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';

import AddCommentForm from '../AddCommentForm';
import TaskComments from '../TaskComments';

import UserAvatar from '@/components/common/UserAvatar';

type TaskDetailsModaProps = {
  visible: boolean;
  onClose: () => void;
};

const TaskDetailsModal = ({
  visible,
  onClose,
}: TaskDetailsModaProps): React.ReactElement => {
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
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-xl md:px-4">
                <div className="relative flex w-full items-center overflow-hidden bg-the-gray px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <section
                    aria-labelledby="information-heading"
                    className="mt-3"
                  >
                    <h2 className="text-lg font-bold text-gray-700 sm:pr-12">
                      Add pagination to customers pages
                    </h2>
                    <p className="mt-4 text-sm font-bold text-gray-500">
                      <UserAvatar name="Kelvin Lora" sizeClassName="h-7 w-7" />{' '}
                      Kelvin Lora
                    </p>
                    <div className="mt-6">
                      <h4 className="font-bold">Description</h4>

                      <p className="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium dignissimos, magni quo molestiae,
                        consectetur blanditiis repudiandae ex odit minima et
                        ratione ea, voluptates id quasi ipsam! Illum incidunt
                        magni temporibus.
                      </p>
                    </div>
                    <div className="mt-6">
                      <AddCommentForm />
                    </div>
                    <div className="mt-6">
                      <h4 className="font-bold">Comments</h4>

                      <TaskComments />
                    </div>
                  </section>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default TaskDetailsModal;
