import { FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ProgressBar } from '@screens';

const App: FC = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ProgressBar />
  </GestureHandlerRootView>
);

export default App;
