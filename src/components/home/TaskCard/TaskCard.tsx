import React from 'react';

type TaskCardProps = {
  title: string;
};

const TaskCard = ({ title }: TaskCardProps): React.ReactElement => {
  return (
    <li className="p-2 bg-white shadow-md rounded-md cursor-pointer hover:bg-gray-100">
      <h3 className="text-sm text-gray-600">{title}</h3>

      <div className="mt-3 text-end">
        <span className="text-xs p-1 text-white rounded-full bg-sky-600">
          KL
        </span>
      </div>
    </li>
  );
};
export default TaskCard;
