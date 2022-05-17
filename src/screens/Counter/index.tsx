import { FC, useState, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { SlideInDown, SlideOutUp } from 'react-native-reanimated';
import styles from './styles';

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((pS) => pS + 1), []);
  const decrement = useCallback(() => setCount((pS) => pS - 1), []);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.text}>🚀</Text>
        <Animated.Text
          key={count}
          entering={SlideInDown}
          exiting={SlideOutUp}
          style={styles.text}
        >
          {count}
        </Animated.Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonLabel}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonLabel}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;
