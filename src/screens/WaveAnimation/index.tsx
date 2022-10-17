import { FC, useEffect } from 'react';
import { Dimensions, View } from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';
import { useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { Svg } from 'react-native-svg';

import { createStyles } from './styles';
import { Wave } from './Wave';

const SIZE = Dimensions.get('window').width - 64;
const styles = createStyles({ SIZE });

const WaveAnimation: FC = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1500 }), -1, true);
  }, [progress]);

  return (
    <View style={styles.container}>
      <MaskedView maskElement={<View style={styles.maskElement} />}>
        <Svg width={SIZE} height={SIZE} viewBox="0 0 1 1" style={styles.svgWrapper}>
          <Wave progress={progress} />
        </Svg>
      </MaskedView>
    </View>
  );
};

export { WaveAnimation };
