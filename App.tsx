import { FloatingHearts } from '@screens';
import { FC } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: FC = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <FloatingHearts />
    <StatusBar barStyle="dark-content" translucent />
  </GestureHandlerRootView>
);

export default App;
