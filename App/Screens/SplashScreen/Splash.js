import React, { useEffect } from 'react'
import {Text, View } from 'react-native'
import navigationStrings from '../../Constants/navigationStrings';
import SplashContainerStyles from './SplashContainerStyles'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace(navigationStrings.FRONT);
        }, 3000);
      }, []);
    return (
        <View style={SplashContainerStyles.container}>
            <View style={{ alignItems:"center"}}>
                <View><Text style={SplashContainerStyles.headingTextStyle}>Growth</Text></View>
                <View><Text style={SplashContainerStyles.subHeadingTextStyle}>Parrenting Made Easy</Text></View>
                <View style={SplashContainerStyles.divider}></View>
            </View>
        </View>
    )
}

export default Splash
