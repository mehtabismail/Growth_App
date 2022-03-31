import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {Button, Text, Icon, Input, Image} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {sleepLog} from '../../Redux/Reducers/SleepingReducer';
import navigationStrings from '../../Constants/navigationStrings';
import {useCreateSleepingLogMutation} from '../../Redux/Services/SleepLog';

const SleepingMannual = ({navigation}) => {
  // USE-DISPATCH HOOK
  const dispatch = useDispatch();
  const {currentChild} = useSelector(state => state.children);

  // REDUX-TOOLKIT RTK QUERY
  const [createSleepLog, responseInfo] = useCreateSleepingLogMutation();
  console.log(responseInfo);

  // USE-STATE HOOKS
  var [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  var [beginDate, setBeginDate] = useState('');
  var [endDate, setEndDate] = useState('');
  var [beginTime, setBeginTime] = useState(null);
  var [endTime, setEndTime] = useState(null);
  var [first, setFirst] = useState(false);
  var [second, setSecond] = useState(false);
  var [overAllTime, setOverAllTime] = useState(null);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const millisToMinutesAndSeconds = duration => {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  };

  useEffect(() => {
    if (beginTime != null && endTime != null) {
      // const ms = Math.abs(endTime - beginTime);
      // const totalTime =millisToMinutesAndSeconds(ms);
      // setOverAllTime(totalTime)
      logicFun();
    }
  }, [beginTime, endTime]);

  const logicFun = () => {
    console.log('running ');

    const ms = Math.abs(endTime - beginTime);

    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);

    if (minutes < 60) {
      console.log(minutes + ' Min');
    } else if (hours < 24) {
      console.log(hours + ' Hrs');
    } else {
      console.log(days + ' Days');
    }
    console.log('minutes : ');
    console.log(minutes);

    setOverAllTime(minutes);
  };

  const handleConfirm = date => {
    if (first == true) {
      setBeginTime(date);
    }

    if (second == true) {
      setEndTime(date);
    }

    setSecond(false);
    setFirst(false);
    hideDatePicker();
  };

  // const handleConfirm = date => {
  //   if (first == true) {
  //     if (mode == 'date') {
  //       setBeginDate(date.toString().substring(0, 15));
  //     } else {
  //       setBeginTime(date.toString().substring(16, 21));
  //       setTime1(date);
  //     }
  //   }

  //   if (second == true) {
  //     if (mode == 'date') {
  //       setEndDate(date.toString().substring(0, 15));
  //     } else {
  //       setEndTime(date.toString().substring(16, 21));
  //       setTime2(date);
  //     }
  //   }

  //   setSecond(false);
  //   setFirst(false);
  //   setMode('');
  //   hideDatePicker();

  //   if (time1 != null && time2 != null) {
  //     console.log('both time entered : ');
  //     const ms = Math.abs(time2 - time1);
  //     millisToMinutesAndSeconds(ms);
  //     // logicFun();
  //   }
  // };

  // const BeginDateAndTime = () => {
  //   return (
  //     <View>
  //       <View style={{flexDirection: 'row'}}>
  //         <TouchableOpacity
  //           style={{
  //             width: '50%',
  //             flexDirection: 'row',
  //           }}
  //           onPress={() => {
  //             //   this.setState({first: true});
  //             setFirst(true);
  //             selectDate();
  //           }}>
  //           <Input
  //             placeholder={
  //               beginDate == ''
  //                 ? 'Begin Date'
  //                 : beginDate.toString().substring(0, 7)
  //             }
  //             editable={false}
  //             rightIcon={
  //               <TouchableOpacity>
  //                 <Image
  //                   style={{
  //                     width: 25,
  //                     height: 25,
  //                     resizeMode: 'contain',
  //                     alignSelf: 'flex-start',
  //                     marginLeft: 20,
  //                   }}
  //                   source={require('../../assets/caret-down.png')}
  //                 />
  //               </TouchableOpacity>
  //             }
  //           />
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           onPress={() => {
  //             //   this.setState({first: true});
  //             setFirst(true);
  //             selectTime();
  //           }}
  //           style={{width: '50%'}}>
  //           <Input
  //             placeholder={beginTime == '' ? 'Begin Time' : beginTime}
  //             editable={false}
  //             rightIcon={
  //               <TouchableOpacity>
  //                 <Image
  //                   style={{
  //                     width: 25,
  //                     height: 25,
  //                     resizeMode: 'contain',
  //                     alignSelf: 'flex-start',
  //                     marginLeft: 20,
  //                   }}
  //                   source={require('../../assets/caret-down.png')}
  //                 />
  //               </TouchableOpacity>
  //             }
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // };

  const selectBeginTime = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setFirst(true);
            showDatePicker();
          }}
          style={{width: '100%'}}>
          <Input
            placeholder={
              beginTime
                ? beginTime.toString().substring(0, 25)
                : 'Select begin Time'
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
      </View>
    );
  };

  const selectEndTime = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setSecond(true);
            showDatePicker();
          }}
          style={{width: '100%'}}>
          <Input
            placeholder={
              endTime ? endTime.toString().substring(0, 25) : 'Select end Time'
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
      </View>
    );
  };

  // const EndDateAndTime = () => {
  //   return (
  //     <View>
  //       <View style={{flexDirection: 'row'}}>
  //         <TouchableOpacity
  //           style={{
  //             width: '50%',
  //             flexDirection: 'row',
  //           }}
  //           onPress={() => {
  //             //   this.setState({second: true});
  //             setSecond(true);
  //             selectDate();
  //           }}>
  //           <Input
  //             placeholder={
  //               endDate == '' ? 'End Date' : endDate.toString().substring(0, 7)
  //             }
  //             editable={false}
  //             rightIcon={
  //               <TouchableOpacity
  //                 onPress={() => {
  //                   // this.setState({second: true});
  //                   setSecond(true);
  //                   selectDate();
  //                 }}>
  //                 <Image
  //                   style={{
  //                     width: 25,
  //                     height: 25,
  //                     resizeMode: 'contain',
  //                     alignSelf: 'flex-start',
  //                     marginLeft: 20,
  //                   }}
  //                   source={require('../../assets/caret-down.png')}
  //                 />
  //               </TouchableOpacity>
  //             }
  //           />
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           onPress={() => {
  //             //   this.setState({second: true});
  //             setSecond(true);
  //             selectTime();
  //           }}
  //           style={{width: '50%'}}>
  //           <Input
  //             placeholder={endTime == '' ? 'End Time' : endTime}
  //             editable={false}
  //             rightIcon={
  //               <TouchableOpacity
  //                 onPress={() => {
  //                   // this.setState({second: true});
  //                   setSecond(true);
  //                   selectTime();
  //                 }}>
  //                 <Image
  //                   style={{
  //                     width: 25,
  //                     height: 25,
  //                     resizeMode: 'contain',
  //                     alignSelf: 'flex-start',
  //                     marginLeft: 20,
  //                   }}
  //                   source={require('../../assets/caret-down.png')}
  //                 />
  //               </TouchableOpacity>
  //             }
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      {/* LOADING INDICATOR */}
      {responseInfo.isLoading == true ? (
        <ActivityIndicator
          animating={true}
          size="large"
          style={{position: 'absolute', top: '45%', left: '45%'}}
        />
      ) : (
        <View style={styles.container}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            locale="en_GB"
            timePickerModeAndroid=""
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View style={{width: '100%', marginHorizontal: metrics.baseMargin}}>
            {/* BEGIN DATE / BEGIN TIME */}
            {selectBeginTime()}
            {/* END DATE / END TIME */}
            {selectEndTime()}
          </View>
          <View style={styles.timeCircleView}>
            <Text style={styles.timeText}>
              {overAllTime == null ? `00:00` : `${overAllTime}`}
            </Text>
          </View>
          <View style={styles.buttonView}>
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
                title="Save"
                titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
                onPress={async () => {
                  await createSleepLog({
                    child_id: currentChild.id,
                    begin_time: beginTime,
                    end_time: endTime,
                    disruption: 'no disruption',
                    total_time: overAllTime,
                  });
                  navigation.replace(navigationStrings.BOTTOM_TABS);
                }}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SleepingMannual;

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
    width: 220,
    height: 220,
    borderRadius: 220 / 2,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  buttonView: {
    alignItems: 'center',
    marginBottom: -metrics.baseMargin,
  },
  timeText: {
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
    padding: metrics.regularPadding,
  },
  containerLast: {
    flexDirection: 'row',
    padding: metrics.basePadding,
  },
  button: {
    // margin: 10,
    // marginBottom:metrics.baseMargin
  },
});
