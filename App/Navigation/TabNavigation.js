import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Community, Profile, ProfilePage} from '../Screens';
import navigationStrings from '../Constants/navigationStrings';
import {Image} from 'react-native-elements';
import Colors from '../Themes/Colors';
import {Settings} from '../Screens';
import ArrowBack from '../Components/ArrowBack';


function Resource() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Resource!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.PROFILEPAGE}
      screenOptions={{headerShown: false, tabBarVisible: true}}>
      {/* SURVIVAL/PROFILE_PAGE SCREEN */}
      <Tab.Screen
        name={navigationStrings.PROFILEPAGE}
        component={ProfilePage}
        options={{
          title: 'Survival',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/survival.png')}
                style={{
                  tintColor: focused ? Colors.primary : Colors.tertiary,
                  width: 20,
                  height: 20,
                  padding: 12,
                }}
              />
            );
          },
          // tabBarLabelStyle: {fontWeight:"bold"},
          tabBarLabel: ({focused}) => (
            <>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? Colors.primary : Colors.tertiary,
                  paddingBottom: 3,
                }}>
                Survival
              </Text>
            </>
          ),
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.tertiary,
        }}
      />
      {/* RESOURCES SCREEN */}
      <Tab.Screen
        name="Resource"
        component={Resource}
        options={{
          title: 'Resource',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/resource.png')}
                style={{
                  tintColor: focused ? Colors.primary : Colors.tertiary,
                  width: 20,
                  height: 20,
                  padding: 12,
                }}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? Colors.primary : Colors.tertiary,
                  paddingBottom: 3,
                }}>
                Resource
              </Text>
            </>
          ),
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.tertiary,
        }}
      />
      {/* PROFILE SCREEN */}
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          title: navigationStrings.PROFILE,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/profile.png')}
                style={{
                  tintColor: focused ? Colors.secondary : Colors.tertiary,
                  width: 20,
                  height: 20,
                  padding: 12,
                }}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? Colors.secondary : Colors.tertiary,
                  paddingBottom: 3,
                }}>
                Profile
              </Text>
            </>
          ),
          headerShown: true,
          headerTintColor: Colors.secondary,
          headerStyle: {backgroundColor: Colors.primary},
          headerTitleAlign: 'center',
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.tertiary,
          tabBarStyle: {backgroundColor: Colors.primary},
        }}
      />
      {/* COMMUNITY SCREEN */}
      <Tab.Screen
        name={navigationStrings.COMMUNITY}
        component={Community}
        options={{
          headerShown: true,
          // title: navigationStrings.COMMUNITY,
          headerLeft: ({navigation}) => <ArrowBack />,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/community.png')}
                style={{
                  tintColor: focused ? Colors.primary : Colors.tertiary,
                  width: 20,
                  height: 20,
                  padding: 12,
                }}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? Colors.primary : Colors.tertiary,
                  paddingBottom: 3,
                }}>
                Comminity
              </Text>
            </>
          ),
          tabBarStyle: {
            display: 'none',
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.tertiary,
          headerTintColor: Colors.secondary,
          headerStyle: {backgroundColor: Colors.primary},
        }}
      />
      {/* SETTINGS SCREEN */}
      <Tab.Screen
        name={navigationStrings.SETTINGS}
        component={Settings}
        options={{
          title: navigationStrings.SETTINGS,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/settings.png')}
                style={{
                  tintColor: focused ? Colors.secondary : Colors.tertiary,
                  width: 20,
                  height: 20,
                  padding: 12,
                }}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? Colors.secondary : Colors.tertiary,
                  paddingBottom: 3,
                }}>
                Settings
              </Text>
            </>
          ),
          headerShown: true,
          headerTintColor: Colors.secondary,
          headerStyle: {backgroundColor: Colors.primary},
          headerTitleAlign: 'center',
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.tertiary,
          tabBarStyle: {backgroundColor: Colors.primary},
        }}
      />
    </Tab.Navigator>
  );
}
