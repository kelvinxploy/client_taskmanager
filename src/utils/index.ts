import { Task } from '../types/task';

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getWordsFirstLetterUppercase = (text: string): string => {
  return text
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};

export const formatTasksByLabel = (tasks: Task[]): Record<string, Task[]> => {
  return tasks.reduce((acc, curr) => {
    if (!acc[curr.label]) {
      acc[curr.label] = [];
    }

    acc[curr.label].push(curr);

    return acc;
  }, {} as Record<string, Task[]>);
};
