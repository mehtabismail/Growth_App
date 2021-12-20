import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';

const settings = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainers}>
        <View style={{paddingRight: metrics.smallPadding}}>
          <Image
            source={require('../../assets/notification.png')}
            style={styles.iconStyles}
          />
        </View>
        <View style={{paddingLeft: metrics.smallPadding}}>
          <Text style={styles.textContainer}>Notification</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableContainers}>
        <View style={{paddingRight: metrics.smallPadding}}>
          <Image
            source={require('../../assets/privacy.png')}
            style={styles.iconStyles}
          />
        </View>
        <View style={{paddingLeft: metrics.smallPadding}}>
          <Text style={styles.textContainer}>Privacy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableContainers}>
        <View style={{paddingRight: metrics.smallPadding}}>
          <Image
            source={require('../../assets/security.png')}
            style={styles.iconStyles}
          />
        </View>
        <View style={{paddingLeft: metrics.smallPadding}}>
          <Text style={styles.textContainer}>Security</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  touchableContainers: {
    flexDirection: 'row',
    padding: metrics.basePadding,
  },
  iconStyles: {
    height: 28,
    width: 28,
  },
  textContainer: {
    color: Colors.white,
    fontSize: Fonts.size.h6,
  },
});
