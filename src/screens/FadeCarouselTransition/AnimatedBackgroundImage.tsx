import { FC } from 'react';
import { Dimensions } from 'react-native';

import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import styles from './styles';

interface AnimatedBackgroundImageProps {
  uri: string;
  index: number;
  scrollX: SharedValue<number>;
}

const { width: wWidth } = Dimensions.get('window');

const AnimatedBackgroundImage: FC<AnimatedBackgroundImageProps> = ({ uri, index, scrollX }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollX.value, [(index - 1) * wWidth, index * wWidth, (index + 1) * wWidth], [0, 1, 0]),
  }));

  return <Animated.Image source={{ uri }} blurRadius={50} style={[styles.backgroundImage, animatedStyle]} />;
};

export { AnimatedBackgroundImage };
