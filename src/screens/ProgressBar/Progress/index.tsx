import { FC, useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

interface ProgressProps {
  /**
   * A value between 0 and 100 representing the progress.
   */
  progress: number;
}

const Progress: FC<ProgressProps> = ({ progress }) => {
  const animatedProgress = useSharedValue(0);
  const widthAnimatedStyle = useAnimatedStyle(() => ({
    width: `${animatedProgress.value}%`,
  }));

  useEffect(() => {
    animatedProgress.value = withTiming(progress, { duration: 500 });
  }, [progress]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fill, widthAnimatedStyle]} />
    </View>
  );
};

export default Progress;
