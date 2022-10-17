/* eslint-disable import/no-extraneous-dependencies */
import { Ionicons } from '@expo/vector-icons';
import { FC, memo, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { getRandomNumber } from '@utils';

const { width: wWidth, height: wHeight } = Dimensions.get('window');
const POSITION_Y_END = wHeight * 0.7;

interface AnimatedHeartProps {
  duration?: number;
  onComplete?: () => void;
}

const AnimatedHeart: FC<AnimatedHeartProps> = memo(({ duration = 1500, onComplete }) => {
  const positionY = useSharedValue(16);
  const opacity = useSharedValue(1);

  const heartAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(positionY.value, [16, 31, 46], [0, 1.5, 1], Extrapolation.CLAMP);
    const translateX = interpolate(
      positionY.value,
      [16, POSITION_Y_END / 6, POSITION_Y_END / 3, POSITION_Y_END / 2, POSITION_Y_END],
      [0, 25, 15, 0, 10]
    );
    const rotate = interpolate(
      positionY.value,
      [16, POSITION_Y_END / 6, POSITION_Y_END / 3, POSITION_Y_END / 2, POSITION_Y_END],
      [0, -5, 0, 5, 0]
    );

    return {
      bottom: positionY.value,
      opacity: opacity.value,
      transform: [{ scale }, { translateX }, { rotate: `${rotate}deg` }],
    };
  });

  useEffect(() => {
    const timingConfig = { duration };
    positionY.value = withTiming(POSITION_Y_END, timingConfig);
    opacity.value = withTiming(0, timingConfig, () => {
      if (onComplete) {
        runOnJS(onComplete)();
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Animated.View style={[styles.iconWrapper, { left: getRandomNumber(16, wWidth * 0.3) }, heartAnimatedStyle]}>
      <Ionicons name="heart" size={40} />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  iconWrapper: {
    position: 'absolute',
  },
});

export { AnimatedHeart };
