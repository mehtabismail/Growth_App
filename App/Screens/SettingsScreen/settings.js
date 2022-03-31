import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';
import navigationStrings from '../../Constants/navigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const settings = ({navigation}) => {
  var [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);
    let token = await AsyncStorage.getItem('session_token');
    return await fetch('http://grow-backend.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async response => response.json())
      .then(async json => {
        await AsyncStorage.setItem('isLogin', 'false');
        await AsyncStorage.removeItem('session_token');
        console.log('log out done successfully');
        setLoading(false);
        navigation.replace(navigationStrings.SIGN_IN);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };
  return (
    <View style={{flex: 1}}>
      {loading === true ? (
        <ActivityIndicator
          animating={true}
          size="large"
          style={{position: 'absolute', top: '40%', left: '40%'}}
        />
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.touchableContainers}>
            <View style={{paddingRight: metrics.smallPadding}}>
              <Image
                source={require('../../assets/notification.png')}
                style={styles.iconStyles}
              />
            </View>
            <View style={{paddingLeft: metrics.smallPadding}}>
              <Text style={styles.textContainer}>Notification</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableContainers}>
            <View style={{paddingRight: metrics.smallPadding}}>
              <Image
                source={require('../../assets/privacy.png')}
                style={styles.iconStyles}
              />
            </View>
            <View style={{paddingLeft: metrics.smallPadding}}>
              <Text style={styles.textContainer}>Privacy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableContainers}>
            <View style={{paddingRight: metrics.smallPadding}}>
              <Image
                source={require('../../assets/security.png')}
                style={styles.iconStyles}
              />
            </View>
            <View style={{paddingLeft: metrics.smallPadding}}>
              <Text style={styles.textContainer}>Security</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              logOut();
            }}
            style={styles.touchableContainers}>
            <View style={{paddingRight: metrics.smallPadding}}>
              <Image
                source={require('../../assets/signOut.png')}
                style={[
                  styles.iconStyles,
                  {tintColor: 'white', height: 32, width: 32},
                ]}
              />
            </View>
            <View style={{paddingLeft: metrics.smallPadding}}>
              <Text style={styles.textContainer}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  touchableContainers: {
    flexDirection: 'row',
    padding: metrics.basePadding,
  },
  iconStyles: {
    height: 28,
    width: 28,
  },
  textContainer: {
    color: Colors.white,
    fontSize: Fonts.size.h6,
  },
});
