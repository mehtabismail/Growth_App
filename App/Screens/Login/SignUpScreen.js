import React from 'react';
import {useWindowDimensions} from 'react-native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Image, Input, Text} from 'react-native-elements';
import Colors from '../../themes/Colors';
import ApplicationStyles from '../../themes/ApplicationStyles';
import Fonts from '../../themes/Fonts';
import metrics from '../../themes/Metrics';

const LoginScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <SafeAreaView style={{height: height, width: width}}>
      <ScrollView>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'lightblue',
          }}>
          {/* GRADIENT AND HEADING VIEW */}
          <View style={{height: '25%'}}>
            <View style={styles.gradient}>
              <View style={{marginTop: '50%', marginLeft: 10}}>
                <View>
                  <Text
                    style={{
                      fontSize: Fonts.size.h5,
                      color: Colors.secondary,
                      fontWeight: 'bold',
                    }}>
                    Growth
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: Colors.secondary,
                    marginTop: 10,
                  }}></View>
              </View>
            </View>
          </View>

          <View style={{height: '75%', width: '100%'}}>
            {/* SIGN IN SIGN UP TEXT */}
            <View
              style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: '200',
                      fontSize: Fonts.size.h6,
                      color: Colors.primary,
                    }}>
                    Sign In
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: '200',
                      fontSize: Fonts.size.h6,
                      color: Colors.secondary,
                      marginLeft: metrics.baseMargin,
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* INPUT CONTAINER*/}
            <View style={{marginTop: metrics.smallMargin}}>
              <Input
                placeholder="E-mail or Username"
                style={{
                  fontWeight: 'bold',
                }}
                containerStyle={{backgroundColor: 'pink'}}
                inputContainerStyle={{
                  backgroundColor: 'white',
                  marginBottom: -15,
                }}
              />
              <Input
                placeholder="Password"
                style={{
                  fontWeight: 'bold',
                }}
                containerStyle={{backgroundColor: 'pink'}}
                inputContainerStyle={{
                  backgroundColor: 'white',
                  marginBottom: -15,
                }}
              />
              <Input
                placeholder="Confirm Password"
                style={{
                  fontWeight: 'bold',
                }}
                containerStyle={{backgroundColor: 'pink'}}
                inputContainerStyle={{
                  backgroundColor: 'white',
                  marginBottom: -15,
                }}
              />
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: Fonts.size.regular}}>or</Text>
            </View>

            {/* Button Views */}
            <View>
              <View>
                <TouchableOpacity
                  style={{
                    elevation: 3,
                    borderRadius: 15,
                    alignItems: 'center',
                    height: 50,
                    shadowColor: '#7F5DF0',
                    flexDirection: 'row',
                  }}>
                  <Image source={require('../../assets/facebook2.png')} />
                  <Text style={{fontSize: 15, color: 'grey'}}>
                    Continue with Facebook
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    elevation: 3,
                    borderRadius: 15,
                    alignItems: 'center',
                    height: 50,
                    shadowColor: '#7F5DF0',
                    flexDirection: 'row',
                  }}>
                  <Image source={require('../../assets/google.png')} />
                  <Text style={{fontSize: 15, color: 'grey'}}>
                    Continue with Google
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <View>
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: '#63815c',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    shadowColor: '#7F5DF0',
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 30,
                      color: '#ffffff',
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 15, color: '#63815c'}}>
                    I'm already a Member
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  gradient: {
    backgroundColor: Colors.primary,
    width: 285,
    height: 290,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 400 / 2,
    marginTop: '-35%',
    marginLeft: '-20%',
    transform: [{scaleX: 2}],
  },
});
