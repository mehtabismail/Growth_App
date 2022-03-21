import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../Themes/Colors';
import {Card, Image} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';

const Resources = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={{marginBottom: metrics.doubleBaseMargin}}>
          {number.map(item => {
            return (
              <TouchableOpacity key={item}>
                <Card
                  title="CARD WITH DIVIDER"
                  containerStyle={[{borderRadius: 10}, Shadow.shadow]}>
                  <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component
                    structure than actual design.
                  </Text>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          height: 50,
          width: 50,
          borderRadius: 25,
          position: 'absolute',
          bottom: metrics.regularMargin,
          right: metrics.regularMargin,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 30, width: 32, tintColor: Colors.primary}}
          source={require('../../assets/plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Resources;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    // backgroundColor:"red"
  },
});
