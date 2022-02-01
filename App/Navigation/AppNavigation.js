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
  BottomTabs,
  Bottle,
  Settings,
  AddChild,
  BornChild,
  NotBornChild,
} from '../Screens';
import Test from '../../Test';
import Colors from '../Themes/Colors';
import Test2 from '../../Test2';
import Testprofile from '../Screens/ProfilePages/testProfile';
import SleepingMannual from '../Screens/SleepingScreens/SleepingMannual';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationStrings.PROFILEPAGE} >
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
            title: 'Sleeping Mannual',
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
          name="SleepingMannual"
          component={SleepingMannual}
          options={{
            title: 'Sleeping Mannual',
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
            title: 'Breast Mannual',
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* BOTTLE SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.BOTTLE}
          component={Bottle}
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
        {/* ADD CHILD SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.ADDCHILD}
          component={AddChild}
          options={{
            title: 'New baby',
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* ADD BORN CHILD SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.BORNCHILD}
          component={BornChild}
          options={{
            title: 'New baby',
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* ADD NOT CHILD SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.NOTBORNCHILD}
          component={NotBornChild}
          options={{
            title: 'New baby',
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
        <Stack.Screen name="Testing2" component={Testprofile} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
