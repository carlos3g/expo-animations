import { FC, useCallback } from 'react';
import { Image, NativeScrollEvent, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import AnimatedBackgroundImage from './AnimatedBackgroundImage';
import { images } from './data';
import styles from './styles';

const FadeCarouselTransition: FC = () => {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((e: NativeScrollEvent) => {
    scrollX.value = e.contentOffset.x;
  });

  const keyExtractor = useCallback((_, i) => i.toString(), []);
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.flatListContentWrapper}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      {images.map((img, i) => (
        <AnimatedBackgroundImage
          scrollX={scrollX}
          index={i}
          uri={img}
          key={i}
        />
      ))}

      <Animated.FlatList
        onScroll={scrollHandler}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        initialNumToRender={1}
        maxToRenderPerBatch={5}
        windowSize={7}
        data={images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default FadeCarouselTransition;
