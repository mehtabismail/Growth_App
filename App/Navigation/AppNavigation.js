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
      <Stack.Navigator initialRouteName={navigationStrings.SPLASH}>
        <Stack.Screen name={navigationStrings.SPLASH} component={Splash} options={{headerShown: false }} />
        <Stack.Screen name={navigationStrings.FRONT} component={Front} options={{headerShown: false }} />
        <Stack.Screen name={navigationStrings.SIGN_UP} component={SignUp} options={{headerShown: false }} />
        <Stack.Screen name={navigationStrings.SIGN_IN} component={SignIn} options={{headerShown: false }} />
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
        <Stack.Screen name="Testing" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
