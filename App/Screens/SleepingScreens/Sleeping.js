import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import moment from 'moment';
import {Button, Text, Icon, Input, Image} from 'react-native-elements';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import navigationStrings from '../../Constants/navigationStrings';
import {useCreateSleepingLogMutation} from '../../Redux/Services/SleepLog';

const Sleeping = ({navigation}) => {
  var [minute, setMinute] = useState(0);
  var [second, setSecond] = useState(0);
  var [totalTime, setTotalTime] = useState(0);
  var [beginDate, setBeginDate] = useState(null);
  var [endDate, setEndDate] = useState(null);
  var [pressed, setPressed] = useState(false);
  var [pressCount, setPressCount] = useState(0);
  var [secTime, setSecTime] = useState(0);
  var [minTime, setMinTime] = useState(0);
  var [currentDate, setCurrentDate] = useState(
    moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a'),
  );
  const [isActive, setIsActive] = useState(false);

  // REDUX-TOOLKIT RTK QUERY
  const [createSleepLog, responseInfo] = useCreateSleepingLogMutation();

  function toggle() {
    if (pressed < 2) {
      setIsActive(!isActive);
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecond(second => (second == 59 ? 0 : second + 1));
        setMinute(minute => (second == 59 ? minute + 1 : minute));
      }, 1000);
    } else if (!isActive && second !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, second]);

  const timeSet = () => {
    setMinute(minute => (second >= 31 ? minute + 1 : minute));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* BEGIN DATE & Time */}
        {pressed == true || pressCount >= 1 ? (
          <View style={{padding: metrics.regularPadding}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  width: '50%',
                  flexDirection: 'row',
                }}
                onPress={() => {
                  // this.selectDate();
                }}>
                <Input
                  placeholder={
                    currentDate.substring(0, 10) == beginDate.substring(0, 10)
                      ? 'Today'
                      : beginDate.substring(0, 10)
                  }
                  editable={false}
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
              </TouchableOpacity>
              <TouchableOpacity style={{width: '50%'}}>
                <Input
                  placeholder={beginDate.substring(11, 19)}
                  editable={false}
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
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {/* END DATE & Time */}
        {pressed == false && pressCount >= 1 ? (
          <View style={{padding: metrics.regularPadding}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  width: '50%',
                  flexDirection: 'row',
                }}
                onPress={() => {
                  // this.selectDate();
                }}>
                <Input
                  placeholder={
                    currentDate.substring(0, 10) === endDate.substring(0, 10)
                      ? 'Today'
                      : endDate.substring(0, 10)
                  }
                  editable={false}
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
              </TouchableOpacity>
              <TouchableOpacity style={{width: '50%'}}>
                <Input
                  placeholder={endDate.substring(11, 19)}
                  editable={false}
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
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {pressed == false && pressCount == 0 ? (
          <View style={{height: '20%'}}></View>
        ) : null}

        {/* TIME CIRCLE */}
        <View>
          <View style={styles.timeCircleView}>
            {pressCount == 2 ? (
              <View>
                <Text style={styles.timeText}>
                  {second >= 31 ? `${minute + 1} min` : `${minute} min`}
                </Text>
              </View>
            ) : (
              <Text style={styles.timeText}>
                {minute < 10 ? '0' + minute : minute}:
                {second < 10 ? '0' + second : second}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.buttonView}>
          {pressed == false && pressCount == 0 ? (
            <TouchableOpacity
              style={styles.containerLast}
              onPress={() =>
                navigation.navigate(navigationStrings.SLEEPING_MANNUAL, {
                  minute: minute,
                  second: second,
                })
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
              title={
                pressed == false && pressCount == 0
                  ? 'Sleeps'
                  : pressed == true && pressCount == 1
                  ? 'Wakes Up'
                  : 'Save'
              }
              titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
              onPress={async () => {
                console.log('Count : ' + pressCount);
                if (pressed == false && pressCount == 0) {
                  setBeginDate(
                    moment().utcOffset('+05:00').format('YYYY-MM-DD hh:mm a'),
                  );
                  setPressed(true);
                  setPressCount((pressCount = pressCount + 1));
                  return toggle();
                }

                if (pressed == true && pressCount == 1) {
                  setEndDate(
                    moment().utcOffset('+05:00').format('YYYY-MM-DD hh:mm a'),
                  );
                  setPressed(false);
                  setPressCount(pressCount + 1);
                  setSecTime(second);
                  setMinTime(minute);
                  return toggle();
                }

                if (pressCount >= 2) {
                await createSleepLog({
                  child_id: 18,
                  begin_time: beginDate,
                  end_time: endDate,
                  disruption: 'no disruption',
                  total_time: minute,
                });
                  navigation.popToTop();
                }
              }}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor:"red",
    paddingBottom: metrics.doubleBasePadding,
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  containerLast: {
    flexDirection: 'row',
    padding: 5,
  },
  button: {
    // margin: 10,
    // paddingBottom:10
  },
});
