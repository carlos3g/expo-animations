import { StyleSheet } from 'react-native';

import { colors } from '@styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    aspectRatio: 1,
    borderRadius: 28,
    backgroundColor: 'black',
  },
});

export default styles;
