export const taskLabels = [
  { id: 'task', name: 'Tasks' },
  { id: 'to-do', name: 'To-Do' },
  { id: 'in-process', name: 'In process' },
  { id: 'blocked', name: 'Blocked' },
  { id: 'qa', name: 'QA' },
  { id: 'rfr', name: 'Ready for review' },
  { id: 'done', name: 'Done' },
];

export const labelsNameByValue = taskLabels.reduce((acc, curr) => {
  acc[curr.id] = curr.name;
  return acc;
}, {} as Record<string, string>);

export const employees = [
  { name: 'Unassigned', value: '' },
  {
    name: 'Kelvin Lora',
    value: 'kl',
  },
  {
    name: 'Sorraimi Rivas',
    value: 'sr',
  },
  {
    name: 'Adalgisa Ferrer',
    value: 'af',
  },
];

export const assigneesByValue = {
  '': '',
  kl: 'Kelvin Lora',
  sr: 'Sorraimi Rivas',
  af: 'Adalgisa Ferrer',
} as Record<string, string>;
