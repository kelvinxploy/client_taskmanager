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
  return (
    <span
      className={`${sizeClassName} text-xs inline-flex items-center justify-center text-white rounded-full bg-sky-600`}
    >
      {getWordsFirstLetterUppercase(name)}
    </span>
  );
};
export default UserAvatar;
