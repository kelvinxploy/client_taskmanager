import { XMarkIcon } from '@heroicons/react/20/solid';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { ReactElement } from 'react';

import TaskDetails from '../TaskDetails';
import TaskSection from '../TaskSection';

import Modal from '@/components/common/Modal';
import { updateTask } from '@/src/adapters/task';
import { taskLabels } from '@/src/constants';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import {
  setCreateTaskModalState,
  setSelectedTask,
} from '@/src/redux/slices/taskSlice';
import { Task } from '@/src/types/task';
import { formatTasksByLabel } from '@/src/utils';

type TasksContainerProps = {
  tasks: Task[];
};

const TasksContainer = ({ tasks }: TasksContainerProps): ReactElement => {
  const { selectedTask } = useAppSelector((selector) => selector.task);
  const dispatch = useAppDispatch();
  const queryCliennt = useQueryClient();
  const { status: updateTaskStatus, mutate } = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryCliennt.prefetchQuery({ queryKey: ['tasks'] }); // TODO: INVESTIGATE ANOTHER METHOD
    },
  });
  const isModalVisible = !!selectedTask?.id;
  const tasksByLabelObject = formatTasksByLabel(tasks);

  const handleOnLabelChange = (label: string): void => {
    mutate({ taskId: selectedTask.id, data: { label } });
  };

  const handleOnCloseDetailsModal = (): void => {
    dispatch(setSelectedTask({} as Task));
  };

  const handleOpenDetailsModal = (task: Task): void => {
    dispatch(setSelectedTask(task));
  };

  const handleOpenCreateTaskModal = (labelId: string): void => {
    dispatch(
      setCreateTaskModalState({ defaultLabel: labelId, isModalVisible: true })
    );
  };

  return (
    <article className="p-4 flex w-screen gap-4 overflow-x-auto">
      <Modal
        onClose={handleOnCloseDetailsModal}
        visible={isModalVisible}
        className={`flex w-full transform text-left text-base transition md:my-8 md:max-w-xl md:px-4 ${
          updateTaskStatus === 'loading' && 'pointer-events-none opacity-90'
        }`}
        content={
          <div className="relative flex w-full items-start bg-the-gray px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button
              type="button"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              onClick={handleOnCloseDetailsModal}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <TaskDetails
              task={selectedTask}
              onLabelChange={handleOnLabelChange}
            />
          </div>
        }
      />

      {taskLabels.map((label) => (
        <TaskSection
          key={label.id}
          id={label.id}
          name={label.name}
          tasks={tasksByLabelObject[label.id] || []}
          handleOpenCreateTaskModal={handleOpenCreateTaskModal}
          handleOpenDetailsModal={handleOpenDetailsModal}
        />
      ))}
    </article>
  );
};

export default TasksContainer;
