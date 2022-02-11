import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Input, Image, Button, Slider, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottleStyles from './BottleStyles';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import Shadow from '../../Components/Shadow';
import VerticalSlider from 'rn-vertical-slider';

const Bottle = () => {
  var [number, setNumber] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* DATE OF FEEDING CONTAINER / TOP CONTAINER */}
        <View style={BottleStyles.topContainer}>
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
                      style={BottleStyles.caretDownImage}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={{width: '50%'}}>
              <Input
                placeholder="Time of Feeding"
                inputStyle={{fontSize: Fonts.size.small}}
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={BottleStyles.caretDownImage}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
        </View>
        {/* BOTTLE CONTAINER / CENTER CONTAINER */}
        <View style={BottleStyles.centerContainer}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.secondary,
                paddingVertical: metrics.basePadding,
                paddingHorizontal: metrics.doubleBasePadding,
                // borderTopLeftRadius:20,
                // borderBottomLeftRadius:20
                borderRadius: 20,
                marginRight: -10,
              }}>
              <Text>Formula</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                styles.container;
              }}
              style={{
                // backgroundColor: 'yellow',
                paddingVertical: metrics.basePadding,
                paddingHorizontal: metrics.doubleBasePadding,
                borderTopColor: Colors.primary,
                borderBottomColor: Colors.primary,
                borderRightColor: Colors.primary,
                borderLeftColor: 'transparent',
                borderWidth: 1,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                marginLeft: -10,
              }}>
              <Text>Breast Milk</Text>
            </TouchableOpacity>
          </View>

          {/* FEEDER CONTAINER */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View>
                <Text>
                  {`${number}ml`}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  height: 250,
                  width: '30%',
                }}>
                <View style={{marginBottom:metrics.baseMargin}}>
                  <VerticalSlider
                    value={number}
                    disabled={false}
                    min={0}
                    max={100}
                    onChange={value => {
                      console.log('CHANGE', value);
                      setNumber((number = value));
                    }}
                    onComplete={value => {
                      console.log('COMPLETE', value);
                      setNumber((number = value));
                    }}
                    width={30}
                    height={150}
                    step={1}
                    borderRadius={5}
                    minimumTrackTintColor={Colors.primary}
                    maximumTrackTintColor={Colors.secondary}
                    renderIndicator={1}
                    // ballIndicatorColor={'gray'}
                    // ballIndicatorTextColor={'white'}
                  />
                </View>
              </View>
              <View>
                <Image
                  source={require('../../assets/bottle.png')}
                  style={{height: 250, width: 120}}
                />
              </View>
            </View>
          </View>
        </View>
        {/* BUTTON CONTAINER / BOTTOM CONTAINER */}
        <View style={BottleStyles.bottomContainer}>
          <Button
            title={`Save ${number}`}
            type="solid"
            containerStyle={{width: '100%'}}
            buttonStyle={(Shadow.shadow, BottleStyles.buttonContainer)}
            titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bottle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});
