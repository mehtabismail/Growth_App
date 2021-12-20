import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../Themes/Colors';
import { useNavigation } from '@react-navigation/native';

const ArrowBack = () => {
    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={()=>navigation.goBack()} >
        <Image
          source={require('../assets/arrow_back.png')}
          style={{height: 20, width: 20, tintColor: Colors.secondary}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ArrowBack;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingVertical: 5,
  },
});
