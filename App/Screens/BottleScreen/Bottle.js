import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Input, Image, Button, Slider, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottleStyles from './BottleStyles';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import Shadow from '../../Components/Shadow';
import VerticalSlider from 'rn-vertical-slider';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useCreateBottleFeedMutation} from '../../Redux/Services/BottleFeed';
import navigationStrings from '../../Constants/navigationStrings';
import { useSelector } from 'react-redux';

const Bottle = ({navigation}) => {
  const [createBottleFeed, responseInfo] = useCreateBottleFeedMutation();
  console.log(responseInfo);

  const {currentUser, token} = useSelector(state => state.login);
  const {currentChild} = useSelector(state => state.children);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [beginDate, setBeginDate] = useState('');
  var [beginTime, setBeginTime] = useState('');
  var [time, setTime] = useState();
  var [mode, setMode] = useState('date');
  var [number, setNumber] = useState(0);

  const selectDate = () => {
    setMode((mode = 'date'));
    showDatePicker();
  };

  const selectTime = () => {
    setMode((mode = 'time'));
    showDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setTime(date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ActivityIndicator
          animating={responseInfo.isLoading}
          size="large"
          style={{position: 'absolute', top: '40%', left: '40%'}}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          locale="en_GB" // Use "en_GB" here
          // date={new Date()}
          timePickerModeAndroid=""
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
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
            <TouchableOpacity
              onPress={() => {
                selectDate();
              }}
              style={{flexDirection: 'row'}}>
              <Input
                placeholder={
                  time ? time.toString().substring(0, 25) : 'Date & Time'
                }
                editable={false}
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
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                selectTime();
              }}
              style={{width: '50%'}}>
              <Input
                placeholder={beginTime == '' ? 'Time of Feeding' : beginTime}
                inputStyle={{fontSize: Fonts.size.small}}
                editable={false}
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={BottleStyles.caretDownImage}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </TouchableOpacity> */}
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
              onPress={()=>console.log(currentChild)}
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
              <View
                style={{
                  marginBottom: metrics.baseMargin,
                  paddingRight: metrics.basePadding,
                  height: 150,
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#D3D3D3',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}>
                  <Text>{`${number}ml`}</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  height: 250,
                }}>
                <View style={{marginBottom: metrics.baseMargin}}>
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
                    // renderIndicator={1}
                    // ballIndicatorColor={'gray'}
                    // ballIndicatorTextColor={'white'}
                  />
                </View>
              </View>
              <View style={{height: '100%'}}>
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
            title={`Save`}
            type="solid"
            containerStyle={{width: '100%'}}
            buttonStyle={(Shadow.shadow, BottleStyles.buttonContainer)}
            titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
            onPress={async () => {
              await createBottleFeed({
                child_id: currentChild.id,
                time: time,
                type: 'formula',
                unit: 'ml',
                amount: number.toString(),
              });
              navigation.popToTop();
            }}
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
