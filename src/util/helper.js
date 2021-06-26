export const toSentenceCase = (string) => {
  return string
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
    .join(' ');
};
