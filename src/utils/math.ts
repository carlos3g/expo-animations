const lerp = (value: number, min: number, max: number): number => {
  'worklet';

  return (max - min) * value + min;
};

export { lerp };
