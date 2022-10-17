import { StyleSheet } from 'react-native';

import { transparentize } from 'polished';

import { colors } from '@styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: '20%',
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderColor: colors.primary,
    borderWidth: 3,
    overflow: 'hidden',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 56,
    color: colors.text,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    aspectRatio: 1,
    borderRadius: 56 / 2,
    backgroundColor: transparentize(0.4, colors.text),
  },
  buttonLabel: {
    fontSize: 44,
    color: colors.background,
    textAlignVertical: 'center',
    textAlign: 'center',
    includeFontPadding: false,
  },
});

export default styles;
