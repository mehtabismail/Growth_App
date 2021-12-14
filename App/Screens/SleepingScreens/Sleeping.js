import React from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {Button, Text, Icon, Image} from 'react-native-elements';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';

const Sleeping = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.timeCircleView}>
          <Text style={styles.timeText}>00:00</Text>
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

export default Sleeping;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerView: {
    elevation: 3,
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
    alignItems: 'center',
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  containerLast: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
  },
});
