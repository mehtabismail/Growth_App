import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';
import BreastStyles from './BreastStyles';

const Breast = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={BreastStyles.container}>
        <View style={{height: 100}}></View>

        <View style={BreastStyles.timeCircleView}>
          <Text style={BreastStyles.timeText}>00:00</Text>
        </View>

        <View style={BreastStyles.buttonView}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View>
                <Text style={{fontSize: Fonts.size.input}}>00:00</Text>
              </View>
              <View>
                <Text style={{fontSize: Fonts.size.input}}>00:00</Text>
              </View>
            </View>
            <View style={BreastStyles.button}>
              <Button
                icon={
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                      marginRight: metrics.smallMargin,
                      tintColor: Colors.primary,
                    }}
                    source={require('../../assets/play-button.png')}
                  />
                }
                buttonStyle={[BreastStyles.playButton, {marginRight: -1}]}
                containerStyle={{width:"40%"}}
                type="outline"
                title="Left"
                titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
              />
              <Button
                icon={
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                      marginRight: metrics.smallMargin,
                      tintColor: Colors.primary,
                    }}
                    source={require('../../assets/play-button.png')}
                  />
                }
                buttonStyle={[BreastStyles.playButton, {marginLeft: -1}]}
                containerStyle={{width:"40%"}}
                type="outline"
                title="Right"
                titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
              />
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
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
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Breast;
