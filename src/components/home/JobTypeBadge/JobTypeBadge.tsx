import React from 'react';

type JobTypeBadgeProps = {
  type: string;
};

const JobTypeBadge = ({ type }: JobTypeBadgeProps): React.ReactElement => {
  const colorStyle =
    type === 'sukkah'
      ? 'bg-yellow-100 text-yellow-800'
      : 'bg-purple-100 text-purple-700';
  const fillColor = type === 'sukkah' ? 'fill-yellow-500' : 'fill-purple-500';

  return (
    <span
      className={`inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium ${colorStyle}`}
    >
      <svg
        className={`h-1.5 w-1.5 ${fillColor}`}
        viewBox="0 0 6 6"
        aria-hidden="true"
      >
        <circle cx={3} cy={3} r={3} />
      </svg>
      {type}
    </span>
  );
};
export default JobTypeBadge;
