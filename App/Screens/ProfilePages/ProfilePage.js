import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Shadow from '../../Components/Shadow';
import navigationStrings from '../../Constants/navigationStrings';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';

const ProfilePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.container}>
        {/* PROFILE CONTAINER */}
        <View style={styles.profileContainer}>
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
              <Text style={styles.profileNameTextStyle}>John</Text>
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
            <TouchableOpacity style={styles.homeAndAnalysisContainer}>
              <Text style={styles.homeAndAnalysisText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeAndAnalysisContainer}>
              <Text style={styles.homeAndAnalysisText}>Analysis</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {/* FEED PART*/}
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primary,
                  marginVertical: metrics.smallMargin,
                }}>
                <Text
                  style={{
                    paddingVertical: metrics.smallPadding,
                    paddingHorizontal: metrics.basePadding,
                    fontSize: Fonts.size.regular,
                    fontWeight: 'bold',
                  }}>
                  Feed
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  Shadow.shadow,
                  styles.feedButtons
                ]}
                onPress={()=>navigation.navigate(navigationStrings.BOTTLE)}
                >
                <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                  Bottle
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  Shadow.shadow,
                  styles.feedButtons
                ]}
                onPress={() => navigation.navigate(navigationStrings.BREAST)}
                >
                <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                  Breasts
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  Shadow.shadow,
                  styles.feedButtons
                ]}>
                <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                  Solids
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  Shadow.shadow,
                  styles.feedButtons
                ]}
                onPress={()=>navigation.navigate(navigationStrings.PUMPING)}
                >
                <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                  Pumping
                </Text>
              </TouchableOpacity>
            </View>
            {/* OTHERS PART*/}
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingBottom: metrics.doubleBasePadding,
              }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primary,
                  marginVertical: metrics.smallMargin,
                }}>
                <Text
                  style={{
                    paddingVertical: metrics.smallPadding,
                    paddingHorizontal: metrics.basePadding,
                    fontSize: Fonts.size.regular,
                    fontWeight: 'bold',
                  }}>
                  Others
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  Shadow.shadow,
                  styles.otherButtons
                ]}
                onPress={()=>navigation.navigate(navigationStrings.SLEEPING)}
                >
                <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                  Sleeping
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  Shadow.shadow,
                  styles.otherButtons
                ]}>
                <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                  Diaper
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flexContainer: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileNameTextStyle: {fontSize: Fonts.size.h5, fontWeight: 'bold'},
  caretDownImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  homeAndAnalysisText: {
    fontSize: Fonts.size.input,
    fontWeight: 'bold',
  },
  homeAndAnalysisContainer: {
    borderBottomColor: Colors.primary,
    width: '30%',
    borderBottomWidth: 2,
    padding: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedTextStyle: {
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.basePadding,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
  },
  feedTextContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    marginVertical: metrics.smallMargin,
  },
  feedButtons: {
    backgroundColor: Colors.quaternary,
    width: '80%',
    paddingVertical: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: metrics.smallMargin,
  },
  otherButtons: {
    backgroundColor: Colors.secondary,
    width: '80%',
    paddingVertical: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: metrics.smallMargin,
  },
});
