import { ReactElement } from 'react';

import Navbar from '@/components/common/Navbar';
import CreateTaskModal from '@/components/home/CreateTaskModal';
import TasksContainer from '@/components/home/TasksContainer';

export default function Home(): ReactElement {
  return (
    <main>
      <Navbar />

      <CreateTaskModal />

      <TasksContainer />
    </main>
  );
}
