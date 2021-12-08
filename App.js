import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import AppNavigation from './App/Navigation/AppNavigation';
import Store from './App/Redux/Store';

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
