import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ReactElement } from 'react';

import { createTask, getTasks } from '../adapters/task';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCreateTaskModalState } from '../redux/slices/taskSlice';
import { Task } from '../types/task';

import Modal from '@/components/common/Modal';
import Navbar from '@/components/common/Navbar';
import CreateTaskForm from '@/components/home/CreateTaskForm';
import TasksContainer from '@/components/home/TasksContainer';

export default function Home(): ReactElement {
  const { isModalVisible, defaultLabel, defaultAssignee } = useAppSelector(
    (selector) => selector.task.createTaskModalState
  );
  const dispatch = useAppDispatch();
  const queryCliennt = useQueryClient();
  const { data: tasksResponse } = useQuery({
    queryKey: ['tasks'],
    keepPreviousData: true,
    queryFn: getTasks,
  });

  const handleCreateTaskModalVisibility = (): void => {
    dispatch(
      setCreateTaskModalState({
        isModalVisible: !isModalVisible,
      })
    );
  };

  const { status: createTaskStatus, mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryCliennt.prefetchQuery({ queryKey: ['tasks'] }); // TODO: USE SETQUERYDATA invalidateQueries
      handleCreateTaskModalVisibility();
    },
  });
  const tasks = (tasksResponse?.data || []) as Task[];

  return (
    <main>
      <Navbar onCreateTaskClick={handleCreateTaskModalVisibility} />

      <Modal
        visible={isModalVisible}
        onClose={handleCreateTaskModalVisibility}
        className="relative transform rounded-lg bg-white text-left shadow-xl transition-all w-full sm:max-w-lg"
        content={
          <CreateTaskForm
            onSubmit={mutate}
            loading={createTaskStatus === 'loading'}
            defaultLabel={defaultLabel as string}
            defaultAssignee={defaultAssignee as string}
          />
        }
      />

      <TasksContainer tasks={tasks} />
    </main>
  );
}
