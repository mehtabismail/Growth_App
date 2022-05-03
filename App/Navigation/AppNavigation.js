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
  SleepingMannual,
  Breast,
  BreastMannual,
  ProfilePage,
  BottomTabs,
  Bottle,
  Solids,
  Settings,
  AddChild,
  BornChild,
  NotBornChild,
  ForumAnswers,
  Diaper,
} from '../Screens';
import Colors from '../Themes/Colors';
import TestProfile from '../Screens/ProfilePages/testProfile';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationStrings.SPLASH}>
      {/* SPLASH SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />
        {/* FRONT SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.FRONT}
          component={Front}
          options={{headerShown: false}}
        />
        {/* SIGN-UP SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.SIGN_UP}
          component={SignUp}
          options={{headerShown: false}}
        />
        {/* SIGN-IN SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.SIGN_IN}
          component={SignIn}
          options={{headerShown: false}}
        />
        {/* SOLIDS SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.BOTTOM_TABS}
          component={BottomTabs}
          options={{headerShown: false}}
        />
        {/* PROFILE-PAGE SCREEN STACK */}
        {/* <Stack.Screen
          name={navigationStrings.PROFILEPAGE}
          component={ProfilePage}
          options={{headerShown: false}}
        /> */}
        {/* SOLIDS SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.SOLIDS}
          component={Solids}
          options={{
            title: 'Solids',
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.secondary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* SLEEPING SCREEN STACK */}
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
        {/* SLEEPING MANNUAL SCREEN STACK */}
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
        {/* DIAPER SCREEN STACK */}
        <Stack.Screen
          name={navigationStrings.DIAPER}
          component={Diaper}
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
        {/* PUMPING SCREEN STACK */}
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
        {/* PUMPING MANNUAL SCREEN STACK */}
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
        {/* BREAST FEED SCREEN STACK */}
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
        {/* BREAST FEED MANNUAL SCREEN STACK */}
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
       <Stack.Screen
          name={navigationStrings.FORUM_ANSWERS}
          component={ForumAnswers}
          options={{
            title: 'Forum Answers',
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
          name='TestProfile'
          component={TestProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
