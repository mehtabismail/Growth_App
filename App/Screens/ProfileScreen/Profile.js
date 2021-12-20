import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';

const Profle = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',paddingTop:30, paddingLeft:20,}}>
        <View style={{paddingRight:20, paddingLeft:10}}>
          <Avatar
            rounded
            size="medium"
            source={require('../../assets/google.png')}
          />
        </View>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text style={styles.textContainer}>Good Morning !</Text>
        </View>
      </View>
    </View>
  );
};

export default Profle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  textContainer: {
      fontSize:Fonts.size.h5, 
      color: Colors.primary, 
      paddingHorizontal:10
    }
});
