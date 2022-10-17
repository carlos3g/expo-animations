import { FC, useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { AnimatedHeart } from './AnimatedHeart';

interface IHeart {
  id: number;
}

const FloatingHearts: FC = () => {
  const [hearts, setHearts] = useState<IHeart[]>([]);

  const handleAddHeart = useCallback(() => {
    setHearts((pS) => {
      const newHearts = [...pS];
      newHearts.push({ id: Math.random() });

      return newHearts;
    });
  }, []);

  // TODO: memoize this function
  const handleRemoveHeart = (id: number) => {
    setHearts((pS) => pS.filter((h) => h.id !== id));
  };

  return (
    <View style={styles.container}>
      {hearts.length > 0 && hearts.map((h) => <AnimatedHeart key={h.id} onComplete={() => handleRemoveHeart(h.id)} />)}

      <TouchableOpacity style={styles.fab} onPress={handleAddHeart} />
    </View>
  );
};

export { FloatingHearts };
