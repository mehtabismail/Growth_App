import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import AppNavigation from './App/Navigation/AppNavigation';
import Store from './App/Redux/Store';
import Untitled from './Test';
import Test from './Test';
import Test2 from './Test2';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
