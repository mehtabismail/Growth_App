import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';

const Community = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '10%',
        }}>
        <Text style={{fontSize: Fonts.size.large}}>
          Pick Up your Topic of Interest
        </Text>
      </View>
      <View style={{height: '75%'}}></View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title="Save"
          type="solid"
          containerStyle={{width: '100%'}}
          buttonStyle={
            Shadow.shadow,
            {
              borderRadius: 10,
              backgroundColor: Colors.primary,
              width: '50%',
              alignSelf: 'center',
            }
          }
          titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.background,
  },
});
