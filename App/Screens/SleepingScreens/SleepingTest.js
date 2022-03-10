import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {Button, Text, Icon, Input, Image} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import navigationStrings from '../../Constants/navigationStrings';

const SleepingTest = ({navigation}) => {
  var [selected1, setSelected1] = useState(false);
  var [selected2, setSelected2] = useState(false);
  var [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  var [beginDate, setBeginDate] = useState('');
  var [endDate, setEndDate] = useState('');
  var [beginTime, setBeginTime] = useState('');
  var [endTime, setEndTime] = useState('');
  var [mode, setMode] = useState('');
  var [first, setFirst] = useState(false);
  var [second, setSecond] = useState(false);
  var [time1, setTime1] = useState(null);
  var [time2, setTime2] = useState(null);
  var [overAllTime, setOverAllTime] = useState(null);

  const selectDate = () => {
    setMode('date');
    showDatePicker();
  };

  const selectTime = () => {
    setMode('time');
    showDatePicker();
  };

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

    return console.log(
      hours + ':' + minutes + ':' + seconds + '.' + milliseconds,
    );
  };

  const logicFun = () => {
    console.log('running ');

    const ms = Math.abs(time2 - time1);

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
    let length = minutes.length;
    console.log(`length : ${length}`);

    setOverAllTime(minutes.toString().substring(0, length - 2));
    console.log(`overall time in minutes : ${overAllTime}`);
  };

  const handleConfirm = date => {
    if (first == true) {
      if (mode == 'date') {
        setBeginDate(date.toString().substring(0, 15));
      } else {
        setBeginTime(date.toString().substring(16, 21));
        setTime1(date);
      }
    } else {
      if (mode == 'date') {
        setEndDate(date.toString().substring(0, 15));
      } else {
        setEndTime(date.toString().substring(16, 21));
        setTime2(date);
      }
    }

    setSecond(false);
    setFirst(false);
    setMode('');
    hideDatePicker();

    if (time1 != null && time2 != null) {
      // const ms = Math.abs(time2 - time1);
      // this.millisToMinutesAndSeconds(ms);
      logicFun();
    }
  };

  const BeginDateAndTime = () => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: '50%',
              flexDirection: 'row',
            }}
            onPress={() => {
              //   this.setState({first: true});
              setFirst(true);
              selectDate();
            }}>
            <Input
              placeholder={
                beginDate == ''
                  ? 'Begin Date'
                  : beginDate.toString().substring(0, 7)
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
          <TouchableOpacity
            onPress={() => {
              //   this.setState({first: true});
              setFirst(true);
              selectTime();
            }}
            style={{width: '50%'}}>
            <Input
              placeholder={beginTime == '' ? 'Begin Time' : beginTime}
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
    );
  };

  const EndDateAndTime = () => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: '50%',
              flexDirection: 'row',
            }}
            onPress={() => {
              //   this.setState({second: true});
              setSecond(true);
              selectDate();
            }}>
            <Input
              placeholder={
                endDate == '' ? 'End Date' : endDate.toString().substring(0, 7)
              }
              editable={false}
              rightIcon={
                <TouchableOpacity
                  onPress={() => {
                    // this.setState({second: true});
                    setSecond(true);
                    selectDate();
                  }}>
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
          <TouchableOpacity
            onPress={() => {
              //   this.setState({second: true});
              setSecond(true);
              selectTime();
            }}
            style={{width: '50%'}}>
            <Input
              placeholder={endTime == '' ? 'End Time' : endTime}
              editable={false}
              rightIcon={
                <TouchableOpacity
                  onPress={() => {
                    // this.setState({second: true});
                    setSecond(true);
                    selectTime();
                  }}>
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
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <View style={styles.container}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={mode}
          locale="en_GB" // Use "en_GB" here
          // date={new Date()}
          timePickerModeAndroid=""
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={{marginHorizontal: metrics.baseMargin}}>
          {/* BEGIN DATE / BEGIN TIME */}
          {BeginDateAndTime()}
          {/* END DATE / END TIME */}
          {EndDateAndTime()}
        </View>
        <View style={styles.timeCircleView}>
          <Text style={styles.timeText}>
            {overAllTime == null ? `00:00` : `${overAllTime} minutes`}
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
              onPress={() => {
                alert('Saved Selected Data');
                // navigation.replace(navigationStrings.BOTTOM_TABS);

              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SleepingTest;

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
