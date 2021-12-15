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
  Breast,
  BreastMannual,
  ProfilePage,
  BottomTabs
} from '../Screens';
import Test from '../../Test';
import Colors from '../Themes/Colors';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationStrings.BOTTOM_TABS}>
        <Stack.Screen
          name={navigationStrings.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.FRONT}
          component={Front}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.SIGN_UP}
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.SIGN_IN}
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.BOTTOM_TABS}
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.PROFILEPAGE}
          component={ProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.SLEEPING}
          component={Sleeping}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={navigationStrings.SLEEPING2}
          component={Sleeping2}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={navigationStrings.PUMPING}
          component={Pumping}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={navigationStrings.PUMPING_MANNUAL}
          component={PumpingMannual}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={navigationStrings.BREAST}
          component={Breast}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={navigationStrings.BREASTMANNUAL}
          component={BreastMannual}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Testing" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
