const lerp = (value: number, min: number, max: number): number => {
  'worklet';

  return (max - min) * value + min;
};

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { lerp, getRandomNumber };
