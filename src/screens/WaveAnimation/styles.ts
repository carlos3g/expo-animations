import { StyleSheet } from 'react-native';

import { colors } from '@styles';

interface IStylesProps {
  SIZE: number;
}

const createStyles = (props: IStylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    svgWrapper: {
      backgroundColor: colors.text,
    },
    maskElement: {
      width: props.SIZE,
      aspectRatio: 1,
      borderRadius: props.SIZE / 2,
      backgroundColor: 'black',
    },
  });

export { createStyles };
