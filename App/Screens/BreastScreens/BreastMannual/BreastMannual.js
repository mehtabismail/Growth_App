import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Input, Image, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FullWindowOverlay} from 'react-native-screens';
import Colors from '../../../Themes/Colors';
import Fonts from '../../../Themes/Fonts';
import metrics from '../../../Themes/Metrics';
import BreastMannualStyles from './BreastMannualStyles';
import Shadow from '../../../Components/Shadow';

const BreastMannual = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={BreastMannualStyles.container}>
        {/* DATE OF FEEDING & TOTAL DURATION */}
        <View style={{width: '100%'}}>
          <View style={BreastMannualStyles.topContainer}>
            <Text
              style={{
                marginLeft: metrics.smallMargin,
                fontSize: Fonts.size.large,
              }}>
              Date of Feeding
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', flexDirection: 'row'}}>
                <Input
                  placeholder="Today"
                  inputStyle={{fontSize: Fonts.size.medium}}
                  rightIcon={
                    <TouchableOpacity>
                      <Image
                        style={BreastMannualStyles.caretDownImage}
                        source={require('../../../assets/caret-down.png')}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
              <View style={{width: '50%'}}>
                <Input
                  placeholder="Begin Time"
                  inputStyle={{fontSize: Fonts.size.medium}}
                  rightIcon={
                    <TouchableOpacity>
                      <Image
                        style={BreastMannualStyles.caretDownImage}
                        source={require('../../../assets/caret-down.png')}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', flexDirection: 'row'}}>
                <Input
                  placeholder="Left Duration"
                  inputStyle={{fontSize: Fonts.size.medium}}
                  rightIcon={
                    <TouchableOpacity>
                      <Image
                        style={BreastMannualStyles.caretDownImage}
                        source={require('../../../assets/caret-down.png')}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
              <View style={{width: '50%'}}>
                <Input
                  placeholder="Right Duration"
                  inputStyle={{fontSize: Fonts.size.medium}}
                  rightIcon={
                    <TouchableOpacity>
                      <Image
                        style={BreastMannualStyles.caretDownImage}
                        source={require('../../../assets/caret-down.png')}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
            </View>
          </View>
          <View
            style={[Shadow.shadow, BreastMannualStyles.totalDurationContainer]}>
            <Text style={{fontSize: Fonts.size.large}}>Total Duration</Text>
          </View>
        </View>

        {/* START TIMER & SAVE BUTTON */}
        <View style={BreastMannualStyles.bottomContainer}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={{marginRight: metrics.smallMargin}}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    alignSelf: 'flex-start',
                    tintColor: Colors.primary,
                  }}
                  source={require('../../../assets/stopwatch.png')}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={BreastMannualStyles.textContainer}>
                  or Start Timer
                </Text>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: '50%',
                marginBottom: metrics.baseMargin,
                marginTop: metrics.smallMargin,
              }}>
              <Button
                title="Save"
                type="solid"
                containerStyle={{width: '100%'}}
                buttonStyle={{
                  borderRadius: 50,
                  backgroundColor: Colors.primary,
                }}
                titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BreastMannual;
