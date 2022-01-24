import { FC } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import styles from './styles';

const GesturesWithBall: FC = () => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const offsetCtx = useSharedValue({ x: 0, y: 0 });
  const scale = useSharedValue(1);
  const scaleCtx = useSharedValue(1);

  const animatedBallStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value.x },
      { translateY: offset.value.y },
      { scale: scale.value },
    ],
  }));

  const pan = Gesture.Pan()
    .onChange(({ translationX, translationY }) => {
      'worklet';

      offset.value = {
        x: offsetCtx.value.x + translationX,
        y: offsetCtx.value.y + translationY,
      };
    })
    .onEnd(() => {
      'worklet';

      offsetCtx.value = offset.value;
    });

  const pinch = Gesture.Pinch()
    .onChange((e) => {
      'worklet';

      scale.value = scaleCtx.value * e.scale;
    })
    .onEnd(() => {
      'worklet';

      scaleCtx.value = scale.value;
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={Gesture.Simultaneous(pan, pinch)}>
        <Animated.View style={[styles.ball, animatedBallStyle]} />
      </GestureDetector>
    </View>
  );
};

export default GesturesWithBall;
