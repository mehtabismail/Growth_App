import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Button, Icon, Input, Text, Image, Divider} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useCreatePumpingMutation} from '../../Redux/Services/Pumping';
import Shadow from '../../Components/Shadow';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';
import { useSelector } from 'react-redux';

const PumpingMannual = ({navigation}) => {

  const {currentChild} = useSelector(state => state.children);

  // RTK QUERY REDUX-TOOLKIT
  const [createPumping, responseInfo] = useCreatePumpingMutation();
  console.log(responseInfo);

  // USE_STATE VARIABLES
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [time, setTime] = useState(null);
  var [endDate, setEndDate] = useState(null);
  var [duration, setDuration] = useState(null);
  var [left, setLeft] = useState(0);
  var [right, setRight] = useState(0);
  var [total, setTotal] = useState(left + right);
  var [first, setFirst] = useState(false);
  var [second, setSecond] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    if (first == true) {
      setTime(date);
    }

    if (second == true) {
      setEndDate(date);
    }

    setSecond(false);
    setFirst(false);
    hideDatePicker();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
      {/* LOADING INDICATOR */}
        {responseInfo.isLoading == true ? (
          <ActivityIndicator
            animating={true}
            size="large"
            style={{position: 'absolute', top: '45%', left: '45%'}}
          />
        ) : null}
        {/* DATE TIME PICKER */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          locale="en_GB" // Use "en_GB" here
          // date={new Date()}
          timePickerModeAndroid=""
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View>
          <View style={styles.beginDateContainer}>
            <View style={{width: '100%'}}>
              <Text>Date of Pumping</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => {
                    setFirst(true);
                    showDatePicker();
                  }}>
                  <Input
                    placeholder={
                      time === null
                        ? 'begin date'
                        : time.toString().substring(0, 25)
                    }
                    style={{fontSize: time === null ? null : Fonts.size.small}}
                    placeholderTextColor={time != null ? 'black' : null}
                    editable={false}
                    rightIcon={
                      <TouchableOpacity
                        onPress={() => {
                          setFirst(true);
                          showDatePicker();
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
                  style={{width: '50%'}}
                  onPress={() => {
                    setSecond(true);
                    showDatePicker();
                  }}>
                  <Input
                    placeholder={
                      endDate === null
                        ? 'end date'
                        : endDate.toString().substring(0, 25)
                    }
                    style={{
                      fontSize: endDate === null ? null : Fonts.size.small,
                    }}
                    placeholderTextColor={endDate != null ? 'black' : null}
                    editable={false}
                    rightIcon={
                      <TouchableOpacity
                        onPress={() => {
                          setSecond(true);
                          showDatePicker();
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

              <Text>Duration (optional)</Text>
              <View>
                <Input
                  placeholder="Enter Duration"
                  value={duration}
                  onChangeText={value => setDuration(value)}
                  style={{
                    fontSize: duration === null ? null : Fonts.size.small,
                  }}
                />
              </View>
            </View>
            {time === null && duration === null && left === 0 && right === 0 ? (
              <TouchableOpacity style={{margin: 10, flexDirection: 'row'}}>
                <View style={{marginRight: 5}}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      alignSelf: 'flex-start',
                      tintColor: Colors.primary,
                    }}
                    source={require('../../assets/stopwatch.png')}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{marginTop: 2}}>
                  <Text style={styles.textContainer}>or Start Time</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ) : null}

            {/* new lines  */}
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
                <View style={{width: '80%', flexDirection: 'row'}}>
                  <Text style={{fontWeight: '700'}}>Total Amount </Text>
                  <Text style={{fontWeight: '100', fontSize: Fonts.size.small}}>
                    (optional)
                  </Text>
                </View>
                <View
                  style={{
                    width: '80%',
                    paddingVertical: metrics.basePadding,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.primary,
                  }}>
                  <Text style={{paddingHorizontal: metrics.regularPadding}}>
                    {total === 0 ? '0 ml' : `${total} ml`}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '50%',
            marginBottom: metrics.baseMargin,
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
            onPress={async () => {
              if (time != null && endDate != null) {
                await createPumping({
                  child_id: currentChild.id,
                  begin_time: time,
                  end_time: endDate,
                  unit: 'ml',
                  amount_for_left: left.toString(),
                  amount_for_right: right.toString(),
                  total_amount: total.toString(),
                  engorgement: false,
                });
                navigation.popToTop();
              }else{
                alert ("Data is missing!")
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PumpingMannual;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  beginDateContainer: {
    padding: metrics.basePadding,
    alignItems: 'center',
  },
  textContainer: {
    color: Colors.primary,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    margin: 20,
    justifyContent: 'space-around',
  },
});
