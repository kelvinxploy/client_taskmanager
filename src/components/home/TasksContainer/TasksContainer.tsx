import { ReactElement } from 'react';

import TaskDetailsModal from '../TaskDetailsModal';
import TaskSection from '../TaskSection';

import { taskLabels } from '@/src/constants';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setSelectedTask } from '@/src/redux/slices/taskSlice';
import { Task } from '@/src/types/task';
import { formatTasksByLabel } from '@/src/utils';

type TasksContainerProps = {
  tasks: Task[];
};

const TasksContainer = ({ tasks }: TasksContainerProps): ReactElement => {
  const { selectedTask } = useAppSelector((selector) => selector.task);
  const dispatch = useAppDispatch();
  const isModalVisible = !!selectedTask?.id;

  const handleOnCloseDetailsModal = (): void => {
    dispatch(setSelectedTask({} as Task));
  };

  const tasksByLabelObject = formatTasksByLabel(tasks);

  return (
    <article className="p-4 flex w-screen gap-4 overflow-x-auto">
      <TaskDetailsModal
        onClose={handleOnCloseDetailsModal}
        visible={isModalVisible}
        task={selectedTask}
      />
      {taskLabels.map((label) => (
        <TaskSection
          key={label.id}
          id={label.id}
          name={label.name}
          tasks={tasksByLabelObject[label.id] || []}
        />
      ))}
    </article>
  );
};

export default TasksContainer;
