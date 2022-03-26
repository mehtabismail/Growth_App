import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, Image, Input, Divider} from 'react-native-elements';
import metrics from '../../Themes/Metrics';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import navigationStrings from '../../Constants/navigationStrings';
import moment from 'moment';
import {useCreatePumpingMutation} from '../../Redux/Services/Pumping';
import Shadow from '../../Components/Shadow';

const Pumping = ({navigation}) => {
  const [createPumping, responseInfo] = useCreatePumpingMutation();
  console.log(responseInfo);

  var [pressed, setPressed] = useState(0);
  var [beginDate, setBeginDate] = useState();
  var [endDate, setEndDate] = useState();
  var [currentDate, setCurrentDate] = useState(
    moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a'),
  );
  var [beginTime, setBeginTime] = useState();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  var [left, setLeft] = useState(0);
  var [right, setRight] = useState(0);
  var [total, setTotal] = useState(left + right);

  function toggle() {
    if (pressed < 2) {
      setIsActive(!isActive);
    }
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => (seconds == 59 ? 0 : seconds + 1));
        setMinutes(minutes => (seconds == 59 ? minutes + 1 : minutes));
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
      <View style={styles.container}>
      {/* LOADING INDICATOR */}
      {responseInfo.isLoading == true ? (
          <ActivityIndicator
            animating={true}
            size="large"
            style={{position: 'absolute', top: '45%', left: '45%'}}
          />
        ) : null}
        {/* BEGIN DATE & Time */}
        {pressed >= 1 ? (
          <View
            style={{
              paddingHorizontal: metrics.regularPadding,
              paddingTop: metrics.regularPadding,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  width: '50%',
                  flexDirection: 'row',
                }}>
                <Input
                  label="Begin Date"
                  placeholder={
                    currentDate.substring(0, 10) == beginDate.substring(0, 10)
                      ? 'Today'
                      : beginDate.substring(0, 10)
                  }
                  editable={false}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{width: '50%'}}>
                <Input
                  placeholder={beginDate.substring(11, 19)}
                  editable={false}
                  label="Begin Time"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {/* END DATE & Time */}
        {pressed >= 2 ? (
          <View
            style={{
              paddingHorizontal: metrics.regularPadding,
              paddingTop: metrics.regularPadding,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  width: '50%',
                  flexDirection: 'row',
                }}>
                <Input
                  label="End Date"
                  placeholder={
                    currentDate.substring(0, 10) == endDate.substring(0, 10)
                      ? 'Today'
                      : endDate.substring(0, 10)
                  }
                  editable={false}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{width: '50%'}}>
                <Input
                  placeholder={endDate.substring(11, 19)}
                  editable={false}
                  label="End Time"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {pressed <= 1 ? (
          <View
            style={{
              height: pressed >= 1 ? '40%' : '60%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: pressed == 0 ? 250 : 200,
                height: pressed == 0 ? 250 : 200,
                borderRadius: pressed == 0 ? 250 / 2 : 200 / 2,
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 1,
              }}>
              <Text style={styles.timeText}>
                {minutes <= 9 ? '0' + minutes : minutes}:
                {seconds <= 9 ? '0' + seconds : seconds}
              </Text>
            </View>
          </View>
        ) : (
          <View style={{width: '100%'}}>
            <View
              style={{
                paddingBottom: metrics.basePadding,
                alignItems: 'center',
              }}>
              <Text>Sides & Amount (optional)</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={[
                  {
                    borderRadius: 10,
                    backgroundColor: 'white',
                    width: '30%',
                  },
                  Shadow.shadow,
                ]}>
                <View
                  style={{
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    backgroundColor: Colors.secondary,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Left (ml)</Text>
                </View>
                <Divider width={2} />
                <TextInput
                  placeholder="Enter amount"
                  keyboardType="numeric"
                  onChangeText={value => setLeft(value)}
                  onSubmitEditing={() =>
                    setTotal((total = parseInt(left) + parseInt(right)))
                  }
                  style={{paddingLeft: metrics.regularPadding}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    borderRadius: 10,
                    backgroundColor: 'white',
                    width: '30%',
                  },
                  Shadow.shadow,
                ]}>
                <View
                  style={{
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    backgroundColor: Colors.secondary,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Right (ml)</Text>
                </View>
                <Divider width={2} />
                <TextInput
                  placeholder="Enter amount"
                  keyboardType="numeric"
                  onChangeText={value => setRight(value)}
                  onSubmitEditing={() =>
                    setTotal((total = parseInt(left) + parseInt(right)))
                  }
                  style={{paddingLeft: metrics.regularPadding}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: metrics.doubleBaseMargin,
              }}>
              <View style={{width: '80%', flexDirection:"row"}}>
                <Text style={{fontWeight:"700",}}>Total Amount </Text>
                <Text style={{fontWeight:"100", fontSize: Fonts.size.small}}>(optional)</Text>
                
              </View>
              <View
                style={{
                  width: '80%',
                  paddingVertical: metrics.basePadding,
                  borderBottomWidth: 1,
                  borderBottomColor:Colors.primary
                }}>
                <Text style={{paddingHorizontal: metrics.regularPadding}}>
                  {total === 0
                    ? '0 ml'
                    : `${total} ml`}
                </Text>
              </View>
            </View>
          </View>
        )}
        <View style={styles.buttonView}>
          {pressed === 0 ? (
            <TouchableOpacity
              style={styles.containerLast}
              onPress={
                () => navigation.navigate(navigationStrings.PUMPING_MANNUAL)
                // reset()
              }>
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
          ) : null}
          <View style={styles.button}>
            <Button
              icon={
                pressed === 0 ? (
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
                ) : null
              }
              buttonStyle={{
                borderColor: Colors.primary,
                borderWidth: 2,
                paddingHorizontal: metrics.doubleBasePadding,
              }}
              type="outline"
              title={
                pressed == 0 ? 'Play' : pressed == 1 ? 'Save' : 'Save & Finish'
              }
              titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
              onPress={async () => {
                if (pressed === 0) {
                  setBeginDate(beginDate =>
                    moment().utcOffset('+05:00').format('YYYY-MM-DD hh:mm a'),
                  );
                }
                if (pressed === 1) {
                  setEndDate(endDate =>
                    moment().utcOffset('+05:00').format('YYYY-MM-DD hh:mm a'),
                  );
                }
                if (pressed >= 2) {
                  await createPumping({
                    child_id: 7,
                    begin_time: beginDate,
                    end_time: endDate,
                    unit: 'ml',
                    amount_for_left: left.toString(),
                    amount_for_right: right.toString(),
                    total_amount: total.toString(),
                    engorgement: false,
                  });
                  navigation.popToTop();
                }
                setPressed(pressed => pressed + 1);
                toggle();
              }}
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
    margin: metrics.regularMargin,
    width: '60%',
  },
});
