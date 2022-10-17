import { FC } from 'react';

import Animated, { SharedValue, useAnimatedProps, useDerivedValue } from 'react-native-reanimated';
import { Path } from 'react-native-svg';

import { colors } from '@styles';
import { lerp } from '@utils';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface WaveProps {
  progress: SharedValue<number>;
}

const Wave: FC<WaveProps> = ({ progress }) => {
  const coords = useDerivedValue(() => ({
    from: {
      x: lerp(progress.value, -0.1, -1),
      y: lerp(progress.value, 0.5, 0.6),
    },
    c1: {
      x: lerp(progress.value, -0.1, 0.5),
      y: lerp(progress.value, 0, 0.3),
    },
    c2: {
      x: lerp(progress.value, 0.5, 1.1),
      y: lerp(progress.value, 0.7, 1),
    },
    to: {
      x: lerp(progress.value, 1.1, 1.5),
      y: lerp(progress.value, 0.5, 0.8),
    },
  }));

  const pathProps = useAnimatedProps(() => ({
    d: `
    M ${coords.value.from.x} ${coords.value.from.y}
    C ${coords.value.c1.x} ${coords.value.c1.y} ${coords.value.c2.x} ${coords.value.c2.y} ${coords.value.to.x} ${coords.value.to.y}
    L 1 1
    L 0 1 Z
    `,
  }));

  return <AnimatedPath fill={colors.primary} animatedProps={pathProps} />;
};

export { Wave };
