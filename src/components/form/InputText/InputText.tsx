import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { classNames } from '@/src/utils';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'normal' | 'lg';
  register: UseFormRegisterReturn;
}

const sizes = {
  sm: 'py-1',
  normal: 'py-2',
  lg: 'py-3',
};

const InputText = ({
  inputSize = 'normal',
  className = '',
  register: { ref, ...registerRest },
  ...props
}: InputTextProps): React.ReactElement => {
  const classes = classNames(
    'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm',
    sizes[inputSize],
    className
  );

  return (
    <input
      ref={ref}
      type="text"
      className={classes}
      {...props}
      {...registerRest}
    />
  );
};
export default InputText;
