import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import navigationStrings from '../../Constants/navigationStrings';

const AddChild = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <View>
        {/* TEXT COMPONENT CONTAINER */}
        <View style={styles.textContainer}>
          <Text style={{fontSize: Fonts.size.h6, fontWeight: 'bold'}}>
            Has the baby been born yet?
          </Text>
        </View>

        {/* BUTTON COMPONENT CONTAINER */}
        <View>
          <Button
            title="Yes!"
            buttonStyle={{
              borderColor: Colors.secondary,
              borderWidth: 1,
              padding: 10,
            }}
            type="outline"
            raised
            titleStyle={{color: Colors.secondary, fontWeight: 'bold'}}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            onPress={()=>{
                navigation.navigate(navigationStrings.BORNCHILD)
            }}
          />
        </View>
        <View>
          <Button
            title="No, not yet."
            buttonStyle={{
              borderColor: Colors.primary,
              borderWidth: 1,
              padding: 10,
            }}
            type="outline"
            raised
            titleStyle={{color: Colors.primary, fontWeight:"bold"}}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            onPress={()=>{
                navigation.navigate(navigationStrings.NOTBORNCHILD)
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AddChild;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
