import { FC } from 'react';
import { View } from 'react-native';

import * as StatusBarAPI from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import { Circle } from './Circle';
import styles from './styles';

StatusBarAPI.setStatusBarTranslucent(true);
void NavigationBar.setVisibilityAsync('hidden');
void NavigationBar.setBehaviorAsync('overlay-swipe');

const COLORS = ['#203c56', '#544e68', '#8d697a', '#d08159', '#ffaa5e', '#ffd4a3', '#ffecd6'];

const CirclesAnimatedSensor: FC = () => (
  <View style={styles.container}>
    {COLORS.map((color, index) => (
      <Circle key={color} scale={1 - index * 0.1} color={COLORS[index]} />
    ))}
  </View>
);

export { CirclesAnimatedSensor };
