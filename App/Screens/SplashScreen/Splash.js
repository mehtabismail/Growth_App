import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import navigationStrings from '../../Constants/navigationStrings';
import SplashContainerStyles from './SplashContainerStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
    
  var [isLogin, setIsLogin] = useState('false');
  useEffect(() => {
    setTimeout(() => {
      getLoggedInDetails();
    }, 3000);
  }, []);

  const getLoggedInDetails = async () => {
    setIsLogin((isLogin = await AsyncStorage.getItem('isLogin')));
    if (isLogin == 'true') {
      navigation.replace(navigationStrings.BOTTOM_TABS);
    }else{
        navigation.replace(navigationStrings.FRONT);
    }
  };

  return (
    <View style={SplashContainerStyles.container}>
      <View style={{alignItems: 'center'}}>
        <View>
          <Text style={SplashContainerStyles.headingTextStyle}>Growth</Text>
        </View>
        <View>
          <Text style={SplashContainerStyles.subHeadingTextStyle}>
            Parenting Made Easy
          </Text>
        </View>
        <View style={SplashContainerStyles.divider}></View>
      </View>
    </View>
  );
};

export default Splash;
