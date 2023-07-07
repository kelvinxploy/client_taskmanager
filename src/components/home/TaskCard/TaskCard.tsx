import React from 'react';

import UserAvatar from '@/components/common/UserAvatar';

type TaskCardProps = {
  title: string;
  assigneeName: string;
  onClick: () => void;
};

const TaskCard = ({
  title,
  assigneeName,
  onClick,
}: TaskCardProps): React.ReactElement => {
  return (
    <li
      onClick={onClick}
      className="p-2 bg-white shadow-md rounded-md cursor-pointer hover:bg-gray-100"
    >
      <h3 className="text-sm text-gray-600">{title}</h3>

      <div className="mt-3 text-end">
        <UserAvatar sizeClassName="h-6 w-6" name={assigneeName} />
      </div>
    </li>
  );
};
export default TaskCard;
