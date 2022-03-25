import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {Button, Icon, Input, Text, Image} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';

const PumpingMannual = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [time, setTime] = useState(null);
  var [duration, setDuration] = useState(null);

  const selectDate = () => {
    setMode((mode = 'date'));
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
    <SafeAreaView>
      <View style={styles.container}>
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
              <TouchableOpacity onPress={()=>{showDatePicker()}} >
                <Input
                  placeholder={time === null ? "Today" : time.toString().substring(0,25)}
                  editable={false}
                  rightIcon={
                    <TouchableOpacity onPress={()=>{showDatePicker()}}>
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
              <Text>Duration (optional)</Text>
              <View>
                <Input
                  // placeholder={duration === null ? "Enter Duration" : duration}
                  placeholder='Enter Duration'
                  value={duration}
                  onChangeText={(value)=> setDuration(value)}
                />
              </View>
            </View>
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
            <View>
              <Text>Side(s) & Amount (optional)</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                icon={
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      alignSelf: 'flex-start',
                      tintColor: Colors.primary,
                      marginRight: metrics.baseMargin,
                    }}
                    source={require('../../assets/square.png')}
                  />
                }
                title="Left"
                type="outline"
                titleStyle={{
                  fontSize: 20,
                  color: 'black',
                }}
                buttonStyle={{
                  borderColor: Colors.primary,
                  borderWidth: 2,
                  width: 120,
                  height: 50,
                  borderRadius: 15,
                }}
              />
              <Button
                icon={
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      alignSelf: 'flex-start',
                      tintColor: Colors.primary,
                      marginRight: metrics.baseMargin,
                    }}
                    source={require('../../assets/square.png')}
                  />
                }
                title="Right"
                type="outline"
                titleStyle={{
                  fontSize: 20,
                  color: 'black',
                }}
                buttonStyle={{
                  borderColor: Colors.primary,
                  borderWidth: 2,
                  width: 120,
                  height: 50,
                  borderRadius: 15,
                }}
              />
            </View>
            <View style={{width: '100%', marginTop: 5}}>
              <Input
                placeholder="Total amount (optional)"
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
            onPress={() => {}}
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
