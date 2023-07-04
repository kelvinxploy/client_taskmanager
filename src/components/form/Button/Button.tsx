import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

import { classNames } from '@/src/utils';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-md text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
  outline:
    'group inline-flex ring-2 items-center justify-center text-sm focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed',
};

type ButtonColors = {
  slate: string;
  primary: string;
  white: string;
};

export type VariantType = {
  solid: ButtonColors;
  outline: ButtonColors;
};

const variantStyles: VariantType = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    primary:
      'bg-sky-600 text-white hover:text-slate-100 hover:opacity-90 active:bg-sky-800 active:text-sky-100 focus-visible:outline-sky-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 ring-1 ring-inset ring-gray-300 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    primary:
      'ring-sky-200 text-sky-700 hover:text-sky-900 hover:ring-sky-300 active:bg-sky-100 active:text-sky-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white  disabled:opacity-60 disabled:cursor-not-allowed',
  },
};

const btnSizes = {
  sm: 'px-3 py-1',
  normal: 'px-3.5 py-1.5 sm:tex-base',
  lg: 'px-5 py-3 sm:text-base',
};

export type ButtonProps = {
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'slate' | 'white';
  btnSize?: 'sm' | 'normal' | 'lg';
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  variant = 'solid',
  color = 'primary',
  btnSize = 'normal',
  className = '',
  ...props
}: ButtonProps): ReactElement => {
  className = classNames(
    baseStyles[variant],
    btnSizes[btnSize],
    variantStyles[variant][color],
    className
  );

  return <button className={className} {...props} />;
};

export default Button;
