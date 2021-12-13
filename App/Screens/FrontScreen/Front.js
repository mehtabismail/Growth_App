import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import navigationStrings from '../../Constants/navigationStrings';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import FrontScreenStyles from './FrontScreenStyles';

const Front = ({navigation}) => {
  return (
    <View style={FrontScreenStyles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <View>
          <Text style={FrontScreenStyles.headingTextContainer}>Growth</Text>
        </View>
        <View>
          <Image
            style={FrontScreenStyles.imageContainer}
            source={require('../../assets/mother-family2.png')}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={FrontScreenStyles.subHeadingTextContainer}>
            Tracking Everything
          </Text>
        </View>
        <View style={{width: '70%'}}>
          <Text style={FrontScreenStyles.textContainer}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </Text>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <View style={FrontScreenStyles.buttonContainerStyle}>
          <Button
            title="Log In"
            type="solid"
            containerStyle={{width: '60%'}}
            buttonStyle={{borderRadius: 50, backgroundColor: Colors.secondary}}
            titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
            onPress={() => {
              navigation.navigate(navigationStrings.SIGN_IN)
            }}
          />
        </View>
        <TouchableOpacity 
        onPress={() => {navigation.navigate(navigationStrings.SIGN_UP)}} 
        style={{alignItems: 'center'}}>
          <Text style={FrontScreenStyles.labelStyle}>
            New to Growth? Sign Up{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Front;
