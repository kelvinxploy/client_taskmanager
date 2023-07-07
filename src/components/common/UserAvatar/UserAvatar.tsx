import { UserCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';

import { getWordsFirstLetterUppercase } from '@/src/utils';

type UserAvatarProps = {
  name: string;
  sizeClassName?: string;
};

const UserAvatar = ({
  name,
  sizeClassName = 'h-5 w-5',
}: UserAvatarProps): React.ReactElement => {
  if (!name) {
    return (
      <UserCircleIcon
        className={`${sizeClassName} scale-[1.20] inline-flex  text-gray-400 sm:-ml-1`}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={`${sizeClassName} text-xs inline-flex items-center justify-center text-white rounded-full bg-sky-600`}
    >
      {getWordsFirstLetterUppercase(name)}
    </span>
  );
};
export default UserAvatar;
