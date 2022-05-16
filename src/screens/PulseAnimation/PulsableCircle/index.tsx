import { FC, useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming
} from 'react-native-reanimated';
import styles from './styles';

interface PulseAnimationProps {
  delay?: number;
  duration?: number;
}

const PulsableCircle: FC<PulseAnimationProps> = ({
  delay = 0,
  duration = 2500,
}) => {
  const opacity = useSharedValue(0.5);
  const scale = useSharedValue(1);
  const circleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    const timingConfig = { duration };
    opacity.value = withDelay(
      delay,
      withRepeat(withTiming(0, timingConfig), -1)
    );
    scale.value = withDelay(
      delay,
      withRepeat(withTiming(2, timingConfig), -1)
    );
  }, [opacity, scale]);

  return <Animated.View style={[styles.pulsableCircle, circleAnimatedStyle]} />;
};

export default PulsableCircle;
