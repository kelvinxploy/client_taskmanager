import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { classNames } from '@/src/utils';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  inputSize?: 'sm' | 'normal' | 'lg';
  register: UseFormRegisterReturn;
}

const sizes = {
  sm: 'py-1',
  normal: 'py-2',
  lg: 'py-3',
};

const Select = ({
  inputSize = 'normal',
  className = '',
  register: { ref, ...registerRest },
  children,
  ...props
}: SelectProps): React.ReactElement => {
  const classes = classNames(
    'mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm',
    sizes[inputSize],
    className
  );

  return (
    <select ref={ref} className={classes} {...props} {...registerRest}>
      {children}
    </select>
  );
};
export default Select;
