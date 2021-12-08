import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../Constants/navigationStrings';
import {
  SignIn,
  SignUp,
  Front,
  Pumping,
  PumpingMannual,
  Splash,
  Sleeping,
  Sleeping2,
} from '../Screens';
import Test from '../../Test';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="Testing" component={Test} />
        <Stack.Screen name={navigationStrings.SPLASH} component={Splash} />
        <Stack.Screen name={navigationStrings.FRONT} component={Front} />
        <Stack.Screen name={navigationStrings.SIGN_UP} component={SignUp} />
        <Stack.Screen name={navigationStrings.SIGN_IN} component={SignIn} />
        <Stack.Screen name={navigationStrings.SLEEPING} component={Sleeping} />
        <Stack.Screen
          name={navigationStrings.SLEEPING2}
          component={Sleeping2}
        />
        <Stack.Screen name={navigationStrings.PUMPING} component={Pumping} />
        <Stack.Screen
          name={navigationStrings.PUMPING_MANNUAL}
          component={PumpingMannual}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
