import { FC } from 'react';
import { View } from 'react-native';

import { PulsableCircle } from './PulsableCircle';
import styles from './styles';

const PulseAnimation: FC = () => (
  <View style={styles.container}>
    <View style={[styles.circle]}>
      <PulsableCircle />
      <PulsableCircle delay={500} />
      <PulsableCircle delay={1000} />
    </View>
  </View>
);

export { PulseAnimation };
