import React, {useState, useEffect} from 'react';
import { BaseUrl } from '../../../Services/BaseUrl';

/* REACT NATIVE BUILT IN LIBRARY COMPONENTS */
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
/* USE-SELECTOR & USE-DISPATCH HOOKS FOR REDUX */
import {useSelector, useDispatch} from 'react-redux';

import LoginReducer, {
  setCurrentUser,
  setToken,
} from '../../../Redux/Reducers/LoginReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';

/* REACT NATIVE ELEMENT COMPONENTS */
import {Button, Image, Input, Text} from 'react-native-elements';
import navigationStrings from '../../../Constants/navigationStrings';

/* THEME FILES IMPORTED */
import Colors from '../../../Themes/Colors';
import Fonts from '../../../Themes/Fonts';
import metrics from '../../../Themes/Metrics';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var [isLoading, setIsLoading] = useState(false);
  var [showText, setShowText] = useState(true);

  /* USEDISPATCH & USESELECTOR USAGE */
  const dispatch = useDispatch();
  const {currentUser, token} = useSelector(state => state.login);

  /* LOGIN API INTEGRATION WITH FETCH() */
  const fetchLoginApi = async () => {
    return await fetch(`${BaseUrl}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email, password: password}),
    })
      .then(async response => response.json())
      .then(async json => {
        console.log(json);
        if (json.token) {
          asyncStoreData(json);
          await dispatchData(json);
          setIsLoading(false);
          navigation.replace(navigationStrings.BOTTOM_TABS);
        } else if (json.errors) {
          setIsLoading(false);
          alert(json.message);
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
  };

  const dispatchData = async data => {
    console.log('saving data to redux');
     dispatch(setCurrentUser(data.user));
     dispatch(setToken(data.token));
  };

  const asyncStoreData = async data => {
    console.log(data.token, 'dubugging the token for testing the component');
    try {
      await AsyncStorage.setItem('session_token', data.token);
      await AsyncStorage.setItem('isLogin', 'true');
      console.log('success storage');
    } catch (e) {
      console.log(e);
    }
  };

  const TextInputs = () => {
    return (
      <View
        style={{
          paddingVertical: metrics.basePadding,
          marginTop: metrics.doubleBaseMargin,
        }}>
        <Input
          placeholder="E-mail or Username"
          onFocus={() => setShowText(false)}
          onBlur={() => setShowText(true)}
          // style={{
          //   fontWeight: 'bold',
          // }}
          inputContainerStyle={{
            width: '95%',
            alignSelf: 'center',
            marginBottom: -15,
            borderBottomWidth: 1,
            borderBottomColor: Colors.primary,
          }}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          placeholder="Password"
          onFocus={() => setShowText(false)}
          onBlur={() => setShowText(true)}
          secureTextEntry={true}
          // style={{
          //   fontWeight: 'bold',
          // }}
          inputContainerStyle={{
            width: '95%',
            alignSelf: 'center',
            marginBottom: -15,
            borderBottomWidth: 1,
            borderBottomColor: Colors.primary,
          }}
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
    );
  };

  {
    /* GOOGLE & FACEBOOK Button Views */
  }
  const GoogleFacebookButtons = () => {
    return (
      <View
        style={{
          paddingVertical: metrics.basePadding,
        }}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginBottom: metrics.smallMargin,
          }}>
          <Button
            icon={
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  alignSelf: 'flex-start',
                  marginLeft: 20,
                }}
                source={require('../../../assets/facebook2.png')}
              />
            }
            title="  Sign In with Facebook"
            type="solid"
            buttonStyle={{
              borderColor: Colors.border_line,
              borderWidth: 1,
              borderRadius: 50,
              backgroundColor: 'white',
            }}
            titleStyle={{
              fontSize: Fonts.size.regular,
              color: 'gray',
              fontWeight: '100',
            }}
            onPress={() => {}}
          />
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            // paddingVertical: 10,
          }}>
          <Button
            icon={
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/google.png')}
              />
            }
            title="  Sign In with Google"
            type="solid"
            buttonStyle={{
              borderColor: Colors.border_line,
              borderWidth: 1,
              borderRadius: 50,
              backgroundColor: 'white',
            }}
            titleStyle={{
              fontSize: Fonts.size.regular,
              color: 'gray',
              fontWeight: '100',
            }}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  };

  const LoginButtonContainer = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Button
            title="Log In"
            type="solid"
            containerStyle={{width: '90%'}}
            buttonStyle={{
              borderRadius: 50,
              backgroundColor: Colors.primary,
            }}
            titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
            onPress={async () => {
              setIsLoading(true);
              fetchLoginApi();
            }}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.SIGN_UP);
            }}>
            <Text
              style={{
                fontWeight: '100',
                fontSize: Fonts.size.medium,
                color: Colors.primary,
                paddingBottom: metrics.basePadding,
              }}>
              Not a Member
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ActivityIndicator
        animating={isLoading}
        size="large"
        style={{position: 'absolute', top: '40%', left: '40%'}}
      />
      <View
        style={{
          height: '60%',
          width: '110%',
          backgroundColor: Colors.tertiary,
          // position: 'absolute',
          top: -180,
          left: 0,
          right: 0,
          borderBottomRightRadius: 600,
        }}></View>
      <View
        style={{
          height: '57%',
          backgroundColor: Colors.primary,
          width: '105%',
          position: 'absolute',
          top: -180,
          left: 0,
          right: 0,
          borderBottomRightRadius: 600,
        }}></View>
      {showText === true ? (
        <View style={{position: 'absolute', top: '10%', left: '8%'}}>
          <Text
            style={{
              fontSize: Fonts.size.h3,
              color: Colors.secondary,
              fontWeight: 'bold',
            }}>
            Growth
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: Colors.secondary,
              marginTop: 10,
            }}></View>
        </View>
      ) : null}
      <View style={{flex: 1, marginTop: '-60%'}}>
        {/* SIGN IN SIGN UP TEXT */}
        {showText === true ? (
          <View
            style={{
              // height:"30%",
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.SIGN_UP);
                }}>
                <Text
                  style={{
                    fontWeight: '200',
                    fontSize: Fonts.size.h6,
                    color: Colors.secondary,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: Fonts.size.h6,
                    color: Colors.primary,
                    marginLeft: metrics.baseMargin,
                    marginRight: 5,
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingTop: metrics.basePadding,
          }}>
          {TextInputs()}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: metrics.smallMargin,
            }}>
            <Text style={{fontSize: Fonts.size.regular}}>or</Text>
          </View>
          {GoogleFacebookButtons()}
          {/* LOGIN BUTTON CONTAINER */}
          {LoginButtonContainer()}
        </View>
      </View>
    </View>
  );
};

export default Login;
