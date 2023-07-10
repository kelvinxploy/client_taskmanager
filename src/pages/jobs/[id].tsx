import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

import Navbar from '@/components/common/Navbar';
import TaskDetails from '@/components/home/TaskDetails';
import { getTaskById } from '@/src/adapters/task';
import { Task } from '@/src/types/task';

const JobDetails = (): React.ReactElement => {
  const { query } = useRouter();

  const { data: response } = useQuery({
    queryKey: ['tasks', query.id],
    keepPreviousData: true,
    queryFn: () => getTaskById(Number(query.id)),
  });

  const selectedTask = response?.data || ({} as Task);

  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <div className="px-4 py-2">
        <TaskDetails isPage task={selectedTask} />
      </div>
    </main>
  );
};
export default JobDetails;
