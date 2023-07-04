import { ReactElement } from 'react';

import Navbar from '@/components/common/Navbar';
import TasksContainer from '@/components/home/TasksContainer';

export default function Home(): ReactElement {
  return (
    <main>
      <Navbar />

      <TasksContainer />
    </main>
  );
}
