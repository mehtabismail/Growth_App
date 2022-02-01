import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {Button, Text, Icon, Input, Image} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Sleeping2 = ({route}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [beginDate, setBeginDate] = useState('');
  var [endDate, setEndDate] = useState('');
  var [beginTime, setBeginTime] = useState('');
  var [endTime, setEndTime] = useState('');
  var [mode, setMode] = useState('date');
  var [first, setFirst] = useState(false);
  var [second, setSecond] = useState(false);
  var [beginTime2, setBeginTime2] = useState('');

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

  const logicFun = () =>{
    console.log("running")
  }

  const handleConfirm = date => {
    // beginDate = date;

    first == true
      ? mode == 'date'
        ? setBeginDate((beginDate = date.toString().substring(0, 15)))
        : setBeginTime((beginTime = date.toString().substring(16, 21)))
      : null;

    (first == true && mode == 'time')?logicFun():null;
    // mode == 'time' ? setBeginTime2((beginTime2 = parseInt(beginTime))) : null;

    setFirst((first = false));
    console.log(beginTime2);

    second == true
      ? mode == 'date'
        ? setEndDate((endDate = date.toString().substring(0, 15)))
        : setEndTime((endTime = date.toString().substring(16, 21)))
      : null;

    setSecond((second = false));
    setMode((mode = ''));
    hideDatePicker();
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
              setFirst((first = true));
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
                <TouchableOpacity
                  onPress={() => {
                    setFirst((first = true));
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
              setFirst((first = true));
              selectTime();
            }}
            style={{width: '50%'}}>
            <Input
              placeholder={beginTime == '' ? 'Begin Time' : beginTime}
              editable={false}
              rightIcon={
                <TouchableOpacity
                  onPress={() => {
                    setFirst((first = true));
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
              setSecond((second = true));
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
                    setSecond((second = true));
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
              setSecond((second = true));
              selectTime();
            }}
            style={{width: '50%'}}>
            <Input
              placeholder={endTime == '' ? 'End Time' : endTime}
              editable={false}
              rightIcon={
                <TouchableOpacity
                  onPress={() => {
                    setSecond((second = true));
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
            {beginTime == ''
              ? (route.params.minute < 10
                  ? '0' + route.params.minute
                  : route.params.minute) +
                ':' +
                (route.params.second < 10
                  ? '0' + route.params.second
                  : route.params.second)
              : beginTime}
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
              title="Wakes Up"
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
    marginBottom: -metrics.baseMargin,
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
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
