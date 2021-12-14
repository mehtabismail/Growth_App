import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Image, Input, Icon, Text} from 'react-native-elements';
import navigationStrings from '../../../Constants/navigationStrings';
import Colors from '../../../Themes/Colors';
import Fonts from '../../../Themes/Fonts';
import metrics from '../../../Themes/Metrics';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <KeyboardAvoidingView style={{flex:1}}>
        <View
          style={{
            flex: 1,
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

          <View
            style={{
              height: '75%',
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <View>
              {/* SIGN IN SIGN UP TEXT */}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: Fonts.size.h6,
                        color: Colors.primary,
                      }}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: '200',
                        fontSize: Fonts.size.h6,
                        color: Colors.secondary,
                        marginLeft: metrics.smallMargin,
                        marginRight: 2,
                      }}>
                      Sign In
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
                  inputContainerStyle={{
                    width: '95%',
                    alignSelf: 'center',
                    marginBottom: -15,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.primary,
                  }}
                />
                <Input
                  placeholder="Password"
                  style={{
                    fontWeight: 'bold',
                  }}
                  inputContainerStyle={{
                    width: '95%',
                    alignSelf: 'center',
                    marginBottom: -15,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.primary,
                  }}
                />
                <Input
                  placeholder="Confirm Password"
                  style={{
                    fontWeight: 'bold',
                  }}
                  inputContainerStyle={{
                    width: '95%',
                    alignSelf: 'center',
                    marginBottom: -15,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.primary,
                  }}
                />
              </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: Fonts.size.regular}}>or</Text>
            </View>

            {/* Button Views */}
            <View>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
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
                  title="  Continue with Facebook"
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
                  paddingVertical: 5,
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
                  title="  Continue with Google"
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
            <View>
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
                  titleStyle={[
                    Fonts.style.buttonText,
                    {color: Colors.secondary},
                  ]}
                  onPress={() => {
                    navigation.navigate(navigationStrings.SIGN_IN);
                  }}
                />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: '100',
                      fontSize: Fonts.size.medium,
                      color: Colors.primary,
                    }}>
                    I'm already a Member
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

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
