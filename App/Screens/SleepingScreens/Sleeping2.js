import React from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {Button, Text, Icon, Input, Image} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';

const Sleeping2 = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <View style={styles.container}>
        <View style={{margin: metrics.baseMargin}}>
          <Text>Begin Date</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <Input
                placeholder="Today"
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: 'contain',
                        alignSelf: 'flex-start',
                        marginLeft: 20,
                      }}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={{width: '50%'}}>
              <Input
                placeholder="Begin Time"
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: 'contain',
                        alignSelf: 'flex-start',
                        marginLeft: 20,
                      }}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.timeCircleView}>
          <Text style={styles.timeText}>02:30</Text>
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

export default Sleeping2;

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
    marginBottom:-metrics.baseMargin
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  containerLast: {
    flexDirection: 'row',
    padding:metrics.basePadding
  },
  button: {
    // margin: 10,
  },
});
