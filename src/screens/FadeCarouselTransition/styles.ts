import { Dimensions, StyleSheet } from 'react-native';

const { width: wWidth, height: wHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  flatListContentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wWidth,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
  },
  image: {
    width: wWidth * 0.7,
    height: wHeight * 0.54,
    borderRadius: 16,
  },
});

export default styles;
