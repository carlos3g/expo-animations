import { FC, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Animated, {
  interpolate,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withSpring,
  SharedValue,
} from 'react-native-reanimated';

const { width: wWidth } = Dimensions.get('window');
const SIZE = wWidth * 1.25;
const DISTANCE = wWidth;

type RotationVector = {
  qw: number;
  qx: number;
  qy: number;
  qz: number;
  yaw: number;
  pitch: number;
  roll: number;
};

type CircleProps = {
  color: string;
  scale?: number;
};

const Circle: FC<CircleProps> = ({ color, scale = 1 }) => {
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, { interval: 10 });

  const animatedStyle = useAnimatedStyle(() => {
    const { qw, qx } = (animatedSensor.sensor as SharedValue<RotationVector>).value;
    const y = interpolate(qx, [-1, 0, 1], [1, 0, -1]);

    return {
      transform: [
        { translateX: withSpring((qw * DISTANCE) / scale) },
        { translateY: withSpring((y * DISTANCE) / scale) },
      ],
    };
  });

  const circleDynamicStyle = {
    backgroundColor: color,
    width: SIZE * scale,
    height: SIZE * scale,
    borderRadius: (SIZE / 2) * scale,
  };

  useEffect(() => animatedSensor.unregister, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[circleDynamicStyle, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
  },
});

export { Circle };
