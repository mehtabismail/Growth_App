import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import AppNavigation from './App/Navigation/AppNavigation';
import Store from './App/Redux/Store';
import TestProfile from './App/Screens/ProfilePages/testProfile';
import SleepingTest from './App/Screens/SleepingScreens/SleepingTest';
import TestCounter from './App/Screens/Test/TestCounter';
import UserData from './App/Screens/Test/UserData';

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
