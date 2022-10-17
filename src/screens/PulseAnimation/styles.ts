import { StyleSheet } from 'react-native';

import { colors } from '@styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  circle: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});

export default styles;
