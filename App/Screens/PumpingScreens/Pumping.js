import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, Image} from 'react-native-elements';
import metrics from '../../Themes/Metrics';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';

const Pumping = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
      <View style={styles.container}>
        <View style={{height: '60%', justifyContent: 'flex-end'}}>
          <View style={styles.timeCircleView}>
            <Text style={styles.timeText}>00:00</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.containerLast}>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                alignSelf: 'flex-start',
                tintColor: Colors.primary,
              }}
              source={require('../../assets/keyboard.png')}
            />
            <Text
              style={{
                fontSize: Fonts.size.medium,
                color: Colors.primary,
                marginLeft: metrics.smallMargin,
                marginTop: metrics.smallMargin,
              }}>
              or Enter Manually
            </Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <Button
              icon={
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    marginRight: metrics.baseMargin,
                    tintColor: Colors.primary,
                  }}
                  source={require('../../assets/play-button.png')}
                />
              }
              buttonStyle={{
                borderColor: Colors.primary,
                borderWidth: 2,
                paddingHorizontal: metrics.doubleBasePadding,
              }}
              type="outline"
              title="Sleeps"
              titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Pumping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  timeCircleView: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  buttonView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerLast: {
    flexDirection: 'row',
    marginTop: metrics.doubleBaseMargin,
  },
  timeText: {
    fontSize: 50,
  },
  button: {
    margin: 10,
    width: 150,
  },
});
