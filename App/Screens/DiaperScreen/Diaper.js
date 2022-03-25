import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import {Button, Card, Input} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import {useCreateDiaperLogMutation} from '../../Redux/Services/Diaper';

const Diaper = ({navigation}) => {
  const data = ['Clean', 'Poo', 'Pee', 'Mixed'];
  var [selected, setSelected] = useState(null);

  const [createDiaperLog, responseInfo] = useCreateDiaperLogMutation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [time, setTime] = useState();

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
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          locale="en_GB" // Use "en_GB" here
          // date={new Date()}
          timePickerModeAndroid=""
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={styles.topContainer}>
          <Text
            style={{
              marginLeft: metrics.smallMargin,
              fontSize: Fonts.size.large,
            }}>
            Date of Changing
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                showDatePicker();
              }}
              style={{flexDirection: 'row'}}>
              <Input
                placeholder={
                  time ? time.toString().substring(0, 25) : 'Date & Time'
                }
                editable={false}
                inputStyle={{fontSize: Fonts.size.medium}}
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={styles.caretDownImage}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          {/* TEXT CONTAINER */}
          <View
            style={{
              paddingVertical: metrics.basePadding,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: Fonts.size.h5,
                fontWeight: 'bold',
                color: 'black',
              }}>
              What's in the Diaper
            </Text>
          </View>

          {/* CARDS CONTAINER / CENTER CONTAINER */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingBottom: metrics.basePadding,
              height: '50%',
              justifyContent: 'space-around',
            }}>
            {data.map((item, key) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(item);
                  }}
                  // accessibilityValue={selected}
                  key={key}
                  style={{
                    borderRadius: metrics.regularMargin,
                    width: '40%',
                    height: '40%',
                    marginBottom: metrics.baseMargin,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    backgroundColor: selected == item ? 'green' : 'white',
                    borderColor: selected == item ? 'green' : 'white',
                    justifyContent:"center",
                    alignItems:"center"
                  }}>
                  <View
                    style={{
                      // backgroundColor: selected == item ? 'green' : 'white',
                      backgroundColor:"transparent",
                      padding:metrics.smallPadding
                    }}>
                    <Text style={{fontSize: Fonts.size.large, fontWeight:"bold"}}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* BUTTON CONTAINER / BOTTOM CONTAINER */}
          <View
            style={{
              paddingVertical: metrics.basePadding,
              width: '100%',
              justifyContent: 'center',
            }}>
            <Button
              title={`Save`}
              type="solid"
              containerStyle={{width: '100%'}}
              buttonStyle={(Shadow.shadow, styles.buttonContainer)}
              titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
              onPress={async () => {
                await createDiaperLog({
                  child_id: 7,
                  time: time,
                  what_was_in: selected,
                });
                navigation.popToTop();
                // console.log(selected);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Diaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    paddingTop: metrics.basePadding,
    height: '20%',
  },
  caretDownImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: Colors.primary,
    width: '50%',
    alignSelf: 'center',
  },
});
