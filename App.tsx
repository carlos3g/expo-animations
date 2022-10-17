import { ProgressBar } from '@screens';
import { FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: FC = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ProgressBar />
  </GestureHandlerRootView>
);

export default App;
