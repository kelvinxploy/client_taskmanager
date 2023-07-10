import React from 'react';

import JobTypeBadge from '../JobTypeBadge';

import UserAvatar from '@/components/common/UserAvatar';

type TaskCardProps = {
  title: string;
  taskNumber: number;
  assigneeName: string;
  type: string;
  onClick: () => void;
};

const TaskCard = ({
  title,
  assigneeName,
  taskNumber,
  type,
  onClick,
}: TaskCardProps): React.ReactElement => {
  return (
    <li
      onClick={onClick}
      className="p-2 bg-white shadow-md rounded-md cursor-pointer hover:bg-gray-100"
    >
      <h3 className="text-sm text-gray-600">
        #JOB - {taskNumber} | {title}
      </h3>

      <div className="mt-6 flex justify-between">
        <JobTypeBadge type={type} />
        <UserAvatar sizeClassName="h-6 w-6" name={assigneeName} />
      </div>
    </li>
  );
};
export default TaskCard;
