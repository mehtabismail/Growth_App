import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Input, Image, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottleStyles from './BottleStyles';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import Shadow from '../../Components/Shadow';

const Bottle = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* DATE OF FEEDING CONTAINER / TOP CONTAINER */}
        <View style={BottleStyles.topContainer}>
          <Text
            style={{
              marginLeft: metrics.smallMargin,
              fontSize: Fonts.size.large,
            }}>
            Date of Feeding
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <Input
                placeholder="Today"
                inputStyle={{fontSize: Fonts.size.medium}}
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={BottleStyles.caretDownImage}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={{width: '50%'}}>
              <Input
                placeholder="Time of Feeding"
                inputStyle={{fontSize: Fonts.size.small}}
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={BottleStyles.caretDownImage}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
        </View>
        {/* BOTTLE CONTAINER / CENTER CONTAINER */}
        <View style={BottleStyles.centerContainer}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.secondary,
                paddingVertical: metrics.basePadding,
                paddingHorizontal:metrics.doubleBasePadding,
                // borderTopLeftRadius:20,
                // borderBottomLeftRadius:20
                borderRadius:20,
                marginRight:-10
              }}>
              <Text>Formula</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                styles.container
            }}
              style={{
                // backgroundColor: 'yellow',
                paddingVertical: metrics.basePadding,
                paddingHorizontal:metrics.doubleBasePadding,
                borderTopColor:Colors.primary,
                borderBottomColor:Colors.primary,
                borderRightColor:Colors.primary,
                borderLeftColor: "transparent",
                borderWidth:1,
                borderTopRightRadius:20,
                borderBottomRightRadius:20,
                marginLeft:-10
              }}>
              <Text>Breast Milk</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require('../../assets/bottle.png')}
              style={{height: 250, width: 250}}
            />
          </View>
        </View>
        {/* BUTTON CONTAINER / BOTTOM CONTAINER */}
        <View style={BottleStyles.bottomContainer}>
          <Button
            title="Save"
            type="solid"
            containerStyle={{width: '100%'}}
            buttonStyle={(Shadow.shadow, BottleStyles.buttonContainer)}
            titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bottle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});
