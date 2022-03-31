import React, {useState} from 'react';
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

import DeviceInfo from 'react-native-device-info';
// import { getUniqueId, getManufacturer, getDeviceName } from 'react-native-device-info';
const deviceName = DeviceInfo.getDeviceName();
const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  var [showText, setShowText] = useState(true);
  // getDeviceName().then((deviceName) => {
  //   // iOS: "Becca's iPhone 6"
  //   // Android: ?
  //   // Windows: ?
  //   console.log(deviceName);
  // });

  const fetchSignUpApi = async () => {
    return await fetch('http://grow-backend.herokuapp.com/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        device_name: deviceName._W,
        password: password,
        password_confirmation: confirmPassword,
      }),
    })
      .then(async response => response.json())
      .then(async json => {
        console.log(json);

        if (json.token) {
          alert('User Created');
          navigation.navigate(navigationStrings.BOTTOM_TABS);
        } else if (json.errors) {
          alert(json.message + ' Or email already takken');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const TextInputs = () => {
    return (
      <View
        style={
          {
            // paddingVertical: metrics.basePadding,
            // marginTop: metrics.doubleBaseMargin,
          }
        }>
        <Input
          placeholder="First Name"
          onFocus={()=> setShowText(false) }
          onBlur={()=> setShowText(true) }
          autoCapitalize="words"
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
          value={firstName}
          onChangeText={value => setFirstName(value)}
        />
        <Input
          placeholder="Last Name"
          onFocus={()=> setShowText(false) }
          onBlur={()=> setShowText(true) }
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
          value={lastName}
          onChangeText={value => setLastName(value)}
        />
        <Input
          placeholder="E-mail or Username"
          onFocus={()=> setShowText(false) }
          onBlur={()=> setShowText(true) }
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
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          placeholder="Password"
          onFocus={()=> setShowText(false) }
          onBlur={()=> setShowText(true) }
          secureTextEntry={true}
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
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Input
          placeholder="Confirm Password"
          onFocus={()=> setShowText(false) }
          onBlur={()=> setShowText(true) }
          secureTextEntry={true}
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
          value={confirmPassword}
          onChangeText={value => setConfirmPassword(value)}
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
            title="  Sign Up with Facebook"
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
            title="  Sign Up with Google"
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
            title="Sign Up"
            type="solid"
            containerStyle={{width: '90%'}}
            buttonStyle={{
              borderRadius: 50,
              backgroundColor: Colors.primary,
            }}
            titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
            onPress={() => {
              fetchSignUpApi();
            }}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.SIGN_IN);
            }}>
            <Text
              style={{
                fontWeight: '100',
                fontSize: Fonts.size.medium,
                color: Colors.primary,
                paddingBottom: metrics.basePadding,
              }}>
              I'm already a Member
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
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
      {
        showText === true ? <View style={{position: 'absolute', top: '10%', left: '8%'}}>
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
      </View>: null
      }
      <View style={{flex: 1, marginTop: '-50%'}}>
        <ScrollView>
          {/* SIGN IN SIGN UP TEXT */}
          {
            showText === true ? <View
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.SIGN_IN);
                }}>
                <Text
                  style={{
                    fontWeight: '200',
                    fontSize: Fonts.size.h6,
                    color: Colors.secondary,
                    marginLeft: metrics.baseMargin,
                    marginRight: 5,
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View> : null
          }
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
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
        </ScrollView>
      </View>
    </View>
  );
  //   <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
  //     <KeyboardAvoidingView style={{flex: 1}}>
  //       <View
  //         style={{
  //           flex: 1,
  //         }}>
  //         {/* GRADIENT AND HEADING VIEW */}
  //         <View
  //       style={{
  //         height: '60%',
  //         width: '110%',
  //         backgroundColor: Colors.tertiary,
  //         // position: 'absolute',
  //         top: -180,
  //         left: 0,
  //         right: 0,
  //         borderBottomRightRadius: 600,
  //       }}></View>
  //     <View
  //       style={{
  //         height: '57%',
  //         backgroundColor: Colors.primary,
  //         width: '105%',
  //         position: 'absolute',
  //         top: -180,
  //         left: 0,
  //         right: 0,
  //         borderBottomRightRadius: 600,
  //       }}></View>
  //     <View style={{position: 'absolute', top: '10%', left: '8%'}}>
  //       <Text
  //         style={{
  //           fontSize: Fonts.size.h3,
  //           color: Colors.secondary,
  //           fontWeight: 'bold',
  //         }}>
  //         Growth
  //       </Text>
  //       <View
  //         style={{
  //           borderWidth: 2,
  //           borderColor: Colors.secondary,
  //           marginTop: 10,
  //         }}></View>
  //     </View>

  //         <View
  //           style={{
  //             marginTop:"-60%",
  //             height: '75%',
  //             width: '100%',
  //             justifyContent: 'space-around',
  //           }}>
  //           <View>
  //             {/* SIGN IN SIGN UP TEXT */}
  //             <View
  //               style={{
  //                 justifyContent: 'center',
  //                 alignItems: 'flex-end',
  //               }}>
  //               <View
  //                 style={{
  //                   flexDirection: 'row',
  //                   justifyContent: 'space-between',
  //                 }}>
  //                 <TouchableOpacity>
  //                   <Text
  //                     style={{
  //                       fontWeight: '700',
  //                       fontSize: Fonts.size.h6,
  //                       color: Colors.primary,
  //                     }}>
  //                     Sign Up
  //                   </Text>
  //                 </TouchableOpacity>
  //                 <TouchableOpacity>
  //                   <Text
  //                     style={{
  //                       fontWeight: '200',
  //                       fontSize: Fonts.size.h6,
  //                       color: Colors.secondary,
  //                       marginLeft: metrics.smallMargin,
  //                       marginRight: 2,
  //                     }}>
  //                     Sign In
  //                   </Text>
  //                 </TouchableOpacity>
  //               </View>
  //             </View>

  //             {/* INPUT CONTAINER*/}
  //             <View style={{marginTop: metrics.smallMargin}}>
  // <Input
  //     placeholder="First Name"
  //     style={{
  //       fontWeight: 'bold',
  //     }}
  //     inputContainerStyle={{
  //       width: '95%',
  //       alignSelf: 'center',
  //       marginBottom: -15,
  //       borderBottomWidth: 1,
  //       borderBottomColor: Colors.primary,
  //     }}
  //   />
  //   <Input
  //     placeholder="Last Name"
  //     style={{
  //       fontWeight: 'bold',
  //     }}
  //     inputContainerStyle={{
  //       width: '95%',
  //       alignSelf: 'center',
  //       marginBottom: -15,
  //       borderBottomWidth: 1,
  //       borderBottomColor: Colors.primary,
  //     }}
  //   />
  //   <Input
  //     placeholder="E-mail or Username"
  //     style={{
  //       fontWeight: 'bold',
  //     }}
  //     inputContainerStyle={{
  //       width: '95%',
  //       alignSelf: 'center',
  //       marginBottom: -15,
  //       borderBottomWidth: 1,
  //       borderBottomColor: Colors.primary,
  //     }}
  //   />
  //   <Input
  //     placeholder="Password"
  //     style={{
  //       fontWeight: 'bold',
  //     }}
  //     inputContainerStyle={{
  //       width: '95%',
  //       alignSelf: 'center',
  //       marginBottom: -15,
  //       borderBottomWidth: 1,
  //       borderBottomColor: Colors.primary,
  //     }}
  //   />
  //   <Input
  //     placeholder="Confirm Password"
  //     style={{
  //       fontWeight: 'bold',
  //     }}
  //     inputContainerStyle={{
  //       width: '95%',
  //       alignSelf: 'center',
  //       marginBottom: -15,
  //       borderBottomWidth: 1,
  //       borderBottomColor: Colors.primary,
  //     }}
  //   />
  //             </View>
  //           </View>

  //           <View style={{justifyContent: 'center', alignItems: 'center'}}>
  //             <Text style={{fontSize: Fonts.size.regular}}>or</Text>
  //           </View>

  //           {/* Button Views */}
  //           <View>
  //             <View
  //               style={{
  //                 width: '90%',
  //                 alignSelf: 'center',
  //               }}>
  //               <Button
  //                 icon={
  //                   <Image
  //                     style={{
  //                       width: 30,
  //                       height: 30,
  //                       resizeMode: 'contain',
  //                       alignSelf: 'flex-start',
  //                       marginLeft: 20,
  //                     }}
  //                     source={require('../../../assets/facebook2.png')}
  //                   />
  //                 }
  //                 title="  Continue with Facebook"
  //                 type="solid"
  //                 buttonStyle={{
  //                   borderColor: Colors.border_line,
  //                   borderWidth: 1,
  //                   borderRadius: 50,
  //                   backgroundColor: 'white',
  //                 }}
  //                 titleStyle={{
  //                   fontSize: Fonts.size.regular,
  //                   color: 'gray',
  //                   fontWeight: '100',
  //                 }}
  //                 onPress={() => {}}
  //               />
  //             </View>
  //             <View
  //               style={{
  //                 width: '90%',
  //                 alignSelf: 'center',
  //                 paddingVertical: 5,
  //               }}>
  //               <Button
  //                 icon={
  //                   <Image
  //                     style={{
  //                       width: 30,
  //                       height: 30,
  //                       resizeMode: 'contain',
  //                     }}
  //                     source={require('../../../assets/google.png')}
  //                   />
  //                 }
  //                 title="  Continue with Google"
  //                 type="solid"
  //                 buttonStyle={{
  //                   borderColor: Colors.border_line,
  //                   borderWidth: 1,
  //                   borderRadius: 50,
  //                   backgroundColor: 'white',
  //                 }}
  //                 titleStyle={{
  //                   fontSize: Fonts.size.regular,
  //                   color: 'gray',
  //                   fontWeight: '100',
  //                 }}
  //                 onPress={() => {}}
  //               />
  //             </View>
  //           </View>
  //           <View>
  //             <View
  //               style={{
  //                 width: '100%',
  //                 alignItems: 'center',
  //                 paddingVertical: 5,
  //               }}>
  //               <Button
  //                 title="Sign Up"
  //                 type="solid"
  //                 containerStyle={{width: '90%'}}
  //                 buttonStyle={{
  //                   borderRadius: 50,
  //                   backgroundColor: Colors.primary,
  //                 }}
  //                 titleStyle={[
  //                   Fonts.style.buttonText,
  //                   {color: Colors.secondary},
  //                 ]}
  //                 onPress={() => {
  //                   fetchSignUpApi();
  //                 }}
  //               />
  //             </View>
  //             <View style={{justifyContent: 'center', alignItems: 'center'}}>
  //               <TouchableOpacity
  //                 onPress={() => {
  //                   navigation.navigate(navigationStrings.SIGN_IN);
  //                 }}>
  //                 <Text
  //                   style={{
  //                     fontWeight: '100',
  //                     fontSize: Fonts.size.medium,
  //                     color: Colors.primary,
  //                   }}>
  //                   I'm already a Member
  //                 </Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     </KeyboardAvoidingView>
  //   </SafeAreaView>
  // );
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
