import { colors } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pulsableCircle: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});

export default styles;
