import { ReactElement } from 'react';

import Navbar from '@/components/common/Navbar';
import TasksContainer from '@/components/home/TasksContainer';

export default function Home(): ReactElement {
  return (
    <main className="">
      <Navbar />

      <div className="p-4">
        <TasksContainer />
      </div>
    </main>
  );
}
