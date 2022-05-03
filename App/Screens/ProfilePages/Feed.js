import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../Themes/Colors';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Shadow from '../../Components/Shadow';
import navigationStrings from '../../Constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Feed = () => {
  const navigation = useNavigation();
  const {currentChild} = useSelector(state => state.children);
  return (
    <View>
      <ScrollView>
       <View style={{paddingBottom:50}}>
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
            style={[Shadow.shadow, styles.feedButtons]}
            onPress={() => {
              navigation.navigate(navigationStrings.BOTTLE);
            }}>
            <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
              Bottle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Shadow.shadow, styles.feedButtons]}
            onPress={() =>
              navigation.navigate(navigationStrings.BREAST, {
                chiled_id: currentChild.id,
              })
            }>
            <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
              Breastfeed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Shadow.shadow, styles.feedButtons]}
            onPress={() => navigation.navigate(navigationStrings.SOLIDS)}>
            <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
              Solids
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Shadow.shadow, styles.feedButtons]}
            onPress={() => navigation.navigate(navigationStrings.PUMPING)}>
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
            style={[Shadow.shadow, styles.otherButtons]}
            onPress={() => navigation.navigate(navigationStrings.SLEEPING)}>
            <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
              Sleeping
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.DIAPER)}
            style={[Shadow.shadow, styles.otherButtons]}>
            <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
              Diaper
            </Text>
          </TouchableOpacity>
        </View>
       </View>
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
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
