import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, Image, Input} from 'react-native-elements';
import metrics from '../../Themes/Metrics';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import navigationStrings from '../../Constants/navigationStrings';
import moment from 'moment';

const Pumping = ({navigation}) => {
  var [pressed, setPressed] = useState(0);
  var [beginDate, setBeginDate] = useState();
  var [currentDate, setCurrentDate] = useState(
    moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a'),
  );
  var [beginTime, setBeginTime] = useState();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
        <View style={{height: '60%', justifyContent: 'center'}}>
          <View style={styles.timeCircleView}>
            <Text style={styles.timeText}>
              {minutes <= 9 ? '0' + minutes : minutes}:
              {seconds <= 9 ? '0' + seconds : seconds}
            </Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.containerLast}
            onPress={() =>
              // navigation.navigate(navigationStrings.PUMPING_MANNUAL)
              reset()
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
              onPress={() => {
                if (pressed === 0) {
                  setBeginDate(beginDate =>
                    moment().utcOffset('+05:00').format('YYYY-MM-DD hh:mm a'),
                  );
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
