import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import Colors from '../../Themes/Colors';
import metrics from '../../Themes/Metrics';

const NotBornChild = () => {
  const countries = [
    'Mother',
    'Father',
    'family Member',
    'Nany/Babysitter',
    'Other',
  ];
  const [name, setName] = useState('');
  var [mode, setMode] = useState('date');
  var [dueDate, setDueDate] = useState('');
  var [relation, setRelation] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
    setDueDate((dueDate = date.toString().substring(0, 15)));
    hideDatePicker();
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      {/* DATE PICKER MODAL */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        locale="en_GB" // Use "en_GB" here
        // date={new Date()}
        timePickerModeAndroid=""
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* NAME INPUT CONTAINER */}
      <View style={{marginTop: metrics.baseMargin}}>
        <Input
          label="what's your baby's name?"
          placeholder="Enter baby name?"
          value={name}
          onChangeText={value => setName(value)}
          inputContainerStyle={{borderColor: Colors.primary}}
          labelStyle={{color: Colors.primary}}
        />
      </View>

      {/* DUE DATE CONTAIINER */}
      <View>
        <TouchableOpacity onPress={() => selectDate()}>
          <Input
            label="what's your baby's due date?"
            placeholder="Select due date?"
            editable={false}
            value={dueDate}
            inputContainerStyle={{borderColor: Colors.primary}}
            labelStyle={{color: Colors.primary}}
          />
        </TouchableOpacity>
      </View>

      {/* RELATIONSHIP DROPDOWN CONTAINER */}
      <View>
        <SelectDropdown
          buttonTextStyle={{color: Colors.primary, fontWeight:"bold",paddingVertical:10, textAlign:"auto"}}
          buttonStyle={{
            backgroundColor: Colors.background,
            width: '95%',
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderColor: Colors.primary,
          }}
          defaultButtonText="What's your relationship to baby?"
          defaultValue="hello"
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setRelation((relation = selectedItem));
            console.log('relation : ' + relation);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>

      {/* BUTTON COMPONENT CONTAINER */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          padding: metrics.basePadding,
        }}>
        <Button
          title={'Done'}
          buttonStyle={{
            borderColor: Colors.secondary,
            borderWidth: 1,
            padding: 10,
            backgroundColor: 'white',
          }}
          type="outline"
          raised
          titleStyle={{color: Colors.secondary, fontWeight: 'bold'}}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default NotBornChild;

const styles = StyleSheet.create({});
