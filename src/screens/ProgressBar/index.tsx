import { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Progress from './Progress';
import styles from './styles';

const ProgressBar: FC = () => {
  const [progress, setProgress] = useState(30);

  return (
    <View style={styles.container}>
      <Progress progress={progress} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setProgress((pS) => pS - 10)}>
          <Text style={styles.buttonLabel}>decrement 10%</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setProgress((pS) => pS + 10)}>
          <Text style={styles.buttonLabel}>increment 10%</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgressBar;
