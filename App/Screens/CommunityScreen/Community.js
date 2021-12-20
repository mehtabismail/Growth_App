import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Avatar, Button, CheckBox, Icon} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';

const Community = () => {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={{fontSize: Fonts.size.large}}>
          Pick Up your Topic of Interest
        </Text>
      </View>
      <View style={{height: '75%'}}>
        <View style={styles.centerContainer}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              center
              checkedIcon={
                <Image
                  source={require('../../assets/checked-dot-circle.png')}
                  style={styles.checkedIconStyle}
                />
              }
              uncheckedIcon={
                <Image
                  source={require('../../assets/dot-circle.png')}
                  style={styles.uncheckedIconStyles}
                />
              }
              checked={check}
              onPress={() => setCheck(!check)}
            />
            <Text style={{fontSize: Fonts.size.h6}}>Discipline</Text>
          </View>
          <View style={{paddingRight: metrics.doubleBasePadding}}>
            <Avatar
              rounded
              size="medium"
              source={require('../../assets/google.png')}
            />
          </View>
        </View>

        <View style={styles.centerContainer}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              center
              checkedIcon={
                <Image
                  source={require('../../assets/checked-dot-circle.png')}
                  style={styles.checkedIconStyle}
                />
              }
              uncheckedIcon={
                <Image
                  source={require('../../assets/dot-circle.png')}
                  style={styles.uncheckedIconStyles}
                />
              }
              checked={check2}
              onPress={() => setCheck2(!check2)}
            />
            <Text style={{fontSize: Fonts.size.h6}}>Development</Text>
          </View>
          <View style={{paddingRight: metrics.doubleBasePadding}}>
            <Avatar
              rounded
              size="medium"
              source={require('../../assets/facebook.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Save"
          type="solid"
          containerStyle={{width: '100%'}}
          buttonStyle={(Shadow.shadow, styles.buttonContainer)}
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
    backgroundColor: Colors.background,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
  },
  centerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkedIconStyle: {
    height: 30,
    width: 30,
    tintColor: Colors.secondary,
  },
  uncheckedIconStyles: {
    height: 30,
    width: 30,
    tintColor: Colors.primary,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: Colors.primary,
    width: '50%',
    alignSelf: 'center',
  },
});
