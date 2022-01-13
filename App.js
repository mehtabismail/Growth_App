import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import AppNavigation from './App/Navigation/AppNavigation';
import Store from './App/Redux/Store';
import { Sleeping2 } from './App/Screens';
import Example from './Example';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <AppNavigation />
        {/* <Sleeping2/> */}
        {/* <Example/> */}
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
