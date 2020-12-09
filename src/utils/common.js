export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomBoolean = () => {
  return (
    Boolean(getRandomInteger(0, 1))
  );
};
