import { colors } from '@styles';
import { StyleSheet, Dimensions } from 'react-native';

const { width: wWidth } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    borderRadius: (wWidth * 0.6) / 2,
    backgroundColor: colors.text,
    width: wWidth * 0.6,
    aspectRatio: 1,
  },
});

export default styles;
