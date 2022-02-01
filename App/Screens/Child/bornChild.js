import React, {useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import Colors from '../../Themes/Colors';
import metrics from '../../Themes/Metrics';
import navigationStrings from '../../Constants/navigationStrings';

const BornChild = ({navigation}) => {
  const countries = [
    'Mother',
    'Father',
    'family Member',
    'Nanny/Babysitter',
    'Other',
  ];
  const gender = ['Boy', 'Girl'];

  const [name, setName] = useState('');
  var [mode, setMode] = useState('');
  var [dueDate, setDueDate] = useState('');
  var [birthDate, setBirthDate] = useState('');
  var [sex, setSex] = useState('');
  var [relation, setRelation] = useState('');
  var [isLoading, setLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const selectDate = () => {
    showDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    mode == 'date'
      ? setBirthDate((birthDate = date.toString().substring(0, 15)))
      : setDueDate((dueDate = date.toString().substring(0, 15)));
    setMode((mode = ''));
    hideDatePicker();
  };

  const fetchApi = async () => {
    setLoading((isLoading = true));
    return await fetch('http://grow-backend.herokuapp.com/api/child', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer 1|0nLjVlSaKyTJyPqY9gECwiGv21gFrkVSdE93JwJF',
      },
      body: JSON.stringify({
        name: name,
        gender: sex,
        date_of_birth: birthDate,
        due_date: dueDate,
        relationship: 'NANNY/BABYSITTER',
      }),
    })
      .then(async response => response.json())
      .then(async json => {
        setLoading((isLoading = false));
        console.log(json);
        if (json.errors) {
          alert(json.message);
        } else {
          navigation.navigate(navigationStrings.PROFILEPAGE);
        }
      })
      .catch(error => {
        setLoading((isLoading = false));
        alert(error);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <ActivityIndicator
        animating={isLoading}
        size="large"
        style={{position: 'absolute', top: '40%', left: '40%'}}
      />
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

      {/* BIRTHDAY CONTAINER */}
      <View>
        <TouchableOpacity
          onPress={() => {
            setMode((mode = 'date'));
            selectDate();
          }}>
          <Input
            label="what's your baby's birthday?"
            placeholder="Select birthday?"
            editable={false}
            value={birthDate}
            inputContainerStyle={{borderColor: Colors.primary}}
            labelStyle={{color: Colors.primary}}
          />
        </TouchableOpacity>
      </View>

      {/* DUE-DATE CONTAINER */}
      <View>
        <TouchableOpacity onPress={() => selectDate()}>
          <Input
            label="what's your baby's Due Date?"
            placeholder="Select due date?"
            editable={false}
            value={dueDate}
            inputContainerStyle={{borderColor: Colors.primary}}
            labelStyle={{color: Colors.primary}}
          />
        </TouchableOpacity>
      </View>

      {/* SEX/GENDER DROPDOWN CONTAINER */}
      <View>
        <SelectDropdown
          buttonTextStyle={{
            color: Colors.primary,
            fontWeight: 'bold',
            paddingVertical: 10,
            textAlign: 'auto',
          }}
          buttonStyle={{
            backgroundColor: Colors.background,
            width: '95%',
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderColor: Colors.primary,
          }}
          defaultButtonText="What's your baby's Sex?"
          data={gender}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSex((sex = selectedItem));
            console.log('gender : ' + sex);
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

      {/* RELATIONSHIP DROPDOWN CONTAINER */}
      <View style={{marginTop: metrics.doubleBaseMargin}}>
        <SelectDropdown
          buttonTextStyle={{
            color: Colors.primary,
            fontWeight: 'bold',
            paddingVertical: 10,
            textAlign: 'auto',
          }}
          buttonStyle={{
            backgroundColor: Colors.background,
            width: '95%',
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderColor: Colors.primary,
          }}
          defaultButtonText="What's your relationship to baby?"
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
          position: 'relative',
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
          onPress={() => {
            fetchApi();
          }}
        />
      </View>
    </View>
  );
};

export default BornChild;

const styles = StyleSheet.create({});
