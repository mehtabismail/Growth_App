import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Input, Image, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../../Themes/Colors';
import Fonts from '../../../Themes/Fonts';
import metrics from '../../../Themes/Metrics';
import BreastMannualStyles from './BreastMannualStyles';
import Shadow from '../../../Components/Shadow';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import navigationStrings from '../../../Constants/navigationStrings';
import Token from '../../../Redux/Services/Token';
import { useSelector } from 'react-redux';

const BreastMannual = ({navigation}) => {

  const {currentChild} = useSelector(state => state.children);

  var [totalDuration, setTotalDuration] = useState(0);
  var [leftDuration, setLeftDuration] = useState(0);
  var [rightDuration, setRightDuration] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [beginDate, setBeginDate] = useState(null);
  var [loading, setLoading] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setBeginDate(date);
    hideDatePicker();
  };

  const fetchBreastFeedApi = async () => {
    console.log('pressed');
    return await fetch('http://grow-backend.herokuapp.com/api/breast-feed', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token.auth_token._W}`,
      },
      body: JSON.stringify({
        child_id: currentChild.id,
        started_at: beginDate,
        left_duration: leftDuration.toString(),
        right_duration: rightDuration.toString(),
        total_time: totalDuration.toString(),
      }),
    })
      .then(async response => response.json())
      .then(async json => {
        console.log(json);
        setLoading(false);
        navigation.popToTop();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={BreastMannualStyles.container}>
        <ActivityIndicator
          animating={loading}
          size="large"
          style={{position: 'absolute', top: '60%', left: '45%'}}
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
        {/* DATE OF FEEDING & TOTAL DURATION */}
        <View style={{width: '100%'}}>
          <View style={BreastMannualStyles.topContainer}>
            {/* <View style={{flexDirection: 'row'}}> */}
            <TouchableOpacity
              onPress={() => showDatePicker()}
              style={{width: '100%'}}>
              <Input
                label="Date & time of feeding"
                editable={false}
                placeholder={
                  beginDate == null
                    ? 'Date & Time'
                    : beginDate.toString().substring(0, 25)
                }
                placeholderTextColor={beginDate === '' ? null : 'black'}
                inputStyle={{fontSize: Fonts.size.medium}}
                rightIcon={
                  <TouchableOpacity onPress={() => showDatePicker()}>
                    <Image
                      style={BreastMannualStyles.caretDownImage}
                      source={require('../../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </TouchableOpacity>
            {/* </View> */}
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', flexDirection: 'row'}}>
                <Input
                  label="Left Duration (min)"
                  keyboardType="numeric"
                  placeholder={'Enter Left Duration'}
                  inputStyle={{fontSize: Fonts.size.medium}}
                  placeholderTextColor={leftDuration != 0 ? 'black' : null}
                  onChangeText={value => setLeftDuration(value)}
                  onSubmitEditing={() =>
                    setTotalDuration(
                      (totalDuration =
                        parseInt(leftDuration) + parseInt(rightDuration)),
                    )
                  }
                />
              </View>
              <View style={{width: '50%'}}>
                <Input
                  keyboardType="numeric"
                  onChangeText={value => setRightDuration(value)}
                  placeholderTextColor={rightDuration != 0 ? 'black' : null}
                  label="Right Duration (min)"
                  placeholder={'Enter Right Duration'}
                  inputStyle={{fontSize: Fonts.size.medium}}
                  onSubmitEditing={() =>
                    setTotalDuration(
                      (totalDuration =
                        parseInt(leftDuration) + parseInt(rightDuration)),
                    )
                  }
                />
              </View>
            </View>
          </View>
          <View
            style={[Shadow.shadow, BreastMannualStyles.totalDurationContainer]}>
            <Text
              style={{
                fontSize: Fonts.size.large,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {totalDuration === 0
                ? 'Total Duration'
                : `Total Duration : ${totalDuration} min`}
            </Text>
          </View>
        </View>

        {/* START TIMER & SAVE BUTTON */}
        <View style={BreastMannualStyles.bottomContainer}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.BREAST)}
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                padding: metrics.smallPadding,
              }}>
              <View style={{marginRight: metrics.smallMargin}}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    alignSelf: 'flex-start',
                    tintColor: Colors.primary,
                  }}
                  source={require('../../../assets/stopwatch.png')}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={BreastMannualStyles.textContainer}>
                  or Start Timer
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                alignSelf: 'center',
                width: '50%',
                marginBottom: metrics.baseMargin,
                marginTop: metrics.smallMargin,
              }}>
              <Button
                title="Save"
                type="solid"
                containerStyle={{width: '100%'}}
                buttonStyle={{
                  backgroundColor: Colors.primary,
                }}
                titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
                onPress={() => {
                  setLoading(true);
                  if (
                    leftDuration === 0 ||
                    rightDuration === 0 ||
                    beginDate === null
                  ) {
                    setLoading(false);
                    alert('Please fill all Fields*');
                  } else {
                    console.log('okk scene');
                    fetchBreastFeedApi();
                  }
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BreastMannual;
