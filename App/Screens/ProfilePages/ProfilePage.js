import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.container}>
        {/* PROFILE CONTAINER */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'pink',
            height: '25%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* PROFILE IMAGE AVATAR */}
          <View style={{marginRight: metrics.smallMargin}}>
            <Avatar
              rounded
              size="large"
              source={require('../../assets/google.png')}
            />
          </View>
          {/* PROFILE NAME & MONTH */}
          <View style={{flexDirection: 'column'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: Fonts.size.h5, fontWeight: 'bold'}}>
                John
              </Text>
            </View>
            <View style={{margin: metrics.smallMargin}}>
              <Text style={{fontSize: Fonts.size.medium}}>3 Months</Text>
            </View>
          </View>
          {/* DROPDOWN ICON */}
          <View>
            <TouchableOpacity>
              <Image
                style={styles.caretDownImage}
                source={require('../../assets/caret-down.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* HOME & ANALYSIS PART */}
        <View style={styles.flexContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={styles.homeAndAnalysisContainer}>
              <Text style={styles.homeAndAnalysisText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.homeAndAnalysisContainer}>
              <Text style={styles.homeAndAnalysisText}>Analysis</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue',
  },
  caretDownImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  homeAndAnalysisText: {
    fontSize: Fonts.size.input, 
    fontWeight:"bold"
  },
  homeAndAnalysisContainer: {
    borderBottomColor: Colors.primary,
    width: '30%',
    borderBottomWidth: 2,
    padding: metrics.basePadding,
    alignItems:"center",
    justifyContent:"center"
  }
});
