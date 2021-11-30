import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from './App/components/CustomHeader';
import Front from './App/Screens/Front/Front';
import LoginScreen from './App/Screens/Login/LoginScreen';
import PumpingMannual from './App/Screens/PumpingScreen/PumpingMannual';
import PumpingScreen from './App/Screens/PumpingScreen/PumpingScreen';
import Sleeping from './App/Screens/Sleeping/Sleeping';
import Sleeping2 from './App/Screens/Sleeping/Sleeping2';
import Splash from './App/Screens/Splash/Splash';
import SignUpScreen from './App/Screens/Login/SignUpScreen';

const App = () => {
  return (
    <SafeAreaProvider>
    <SignUpScreen />
    </SafeAreaProvider>
  );
};

export default App;

