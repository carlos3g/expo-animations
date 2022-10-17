import { StyleSheet } from 'react-native';

import { colors } from '@styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  buttonLabel: {
    fontSize: 16,
    color: colors.text,
  },
});

export default styles;
