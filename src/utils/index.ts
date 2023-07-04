export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getWordsFirstLetterUppercase = (text: string): string => {
  return text
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};
