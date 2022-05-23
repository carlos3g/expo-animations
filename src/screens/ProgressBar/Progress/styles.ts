import { colors } from '@styles';
import { tint } from 'polished';
import { StyleSheet } from 'react-native';

const progressHeight = 18;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: progressHeight,
    borderRadius: progressHeight / 2,
    overflow: 'hidden',
    backgroundColor: tint(0.6, colors.primary),
  },
  fill: {
    height: '100%',
    borderRadius: progressHeight / 2,
    backgroundColor: colors.primary,
  },
});

export default styles;
