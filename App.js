import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import SplashScreen from './screens/SplashScreen';
import FrontScreen from './screens/FrontScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen'
import PumpingScreen from './screens/PumpingScreen';
import CustomHeader from './components/CustomHeader';
import SleepingScreen from './screens/SleepingScreen';
import PumpingMannual from './screens/PumpingMannual'

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <SplashScreen /> */}
        {/* <FrontScreen /> */}
        {/* <LoginScreen /> */}
        {/* <SignUpScreen /> */}
        {/* <PumpingScreen /> */}
        {/* <CustomHeader /> */}
        <SleepingScreen />
        {/* <PumpingMannual /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
