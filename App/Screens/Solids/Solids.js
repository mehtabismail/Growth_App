import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Input, Image, Button, Slider, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottleStyles from '../BottleScreen/BottleStyles';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import Shadow from '../../Components/Shadow';
import VerticalSlider from 'rn-vertical-slider';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Solids = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [beginDate, setBeginDate] = useState('');
  var [beginTime, setBeginTime] = useState('');
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
    // beginDate = date;

    mode == 'date'
      ? setBeginDate((beginDate = date.toString().substring(0, 15)))
      : setBeginTime((beginTime = date.toString().substring(16, 21)));

    setMode((mode = ''));
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: Colors.background,
        }}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={mode}
          locale="en_GB" // Use "en_GB" here
          // date={new Date()}
          timePickerModeAndroid=""
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {/* DATE OF FEEDING CONTAINER / TOP CONTAINER */}
        <View style={[BottleStyles.topContainer]}>
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
              style={{width: '50%', flexDirection: 'row'}}>
              <Input
                placeholder={
                  beginDate == ''
                    ? 'Today'
                    : beginDate.toString().substring(0, 7)
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
            <TouchableOpacity
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
            </TouchableOpacity>
          </View>
        </View>
        {/* CENTER CONTAINER */}
        <View
          style={{
            height: '60%',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: Fonts.size.h6,
                fontWeight: 'bold',
                color: Colors.primary,
                alignSelf: 'center',
              }}>
              Solids Tracking & Food Journal
            </Text>
            <Text style={{fontSize: Fonts.size.regular}}>
              Start tracking solids by picking one of the{' '}
            </Text>
            <Text style={{fontSize: Fonts.size.regular}}>
              categories below and add reaction :
            </Text>
          </View>
          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text>Add a note and the pic of the meal</Text>
              <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <View>
                  <Image
                    style={{height: 70, width: 70, tintColor:Colors.primary}}
                    source={require('../../assets/camera.png')}
                  />
                </View>
                <View style={{flexDirection:"row", borderColor:Colors.primary, borderWidth:1, padding:metrics.smallPadding, margin:metrics.smallMargin, borderRadius:5}}>
                  <View>
                    <Image
                      style={{height: 20, width: 20, tintColor:Colors.primary}}
                      source={require('../../assets/plus.png')}
                    />
                  </View>
                  <Text style={{color: Colors.primary, fontSize:Fonts.size.regular}}>Milestone</Text>
                </View>
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
            onPress={() => {alert(`date & time added successfully`)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Solids;

const styles = StyleSheet.create({});
