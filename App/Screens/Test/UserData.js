import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-elements';
import {addData} from '../../Redux/Reducers/UserData';

const newData = {
  name: 'Yasir',
  id: 2,
  Sap: 70067345,
  Degree: 'Software Engineering',
  CGPA: 3.0,
};

const UserData = () => {
  const [pressed, setPressed] = useState(false);
  const data = useSelector(state => state.user_data);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        {console.log(data)}
        <Text style={styles.textStyle}>Full Name : {data.data.name}</Text>
        <Text style={styles.textStyle}>Sap ID : {data.data.Sap}</Text>
        <Text style={styles.textStyle}>CGPA : {data.data.CGPA}</Text>
        <Text style={styles.textStyle}>Degree : {data.data.Degree}</Text>
      </View>

      {/* <View>
          <Text style={styles.textStyle}>User data screen </Text>
        </View> */}

      <View style={{paddingTop: 40}}>
        <Button
          title="Change Student Data"
          onPress={() => {
            dispatch(addData(newData));
          }}
          buttonStyle={{borderRadius: 20}}
        />
      </View>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
