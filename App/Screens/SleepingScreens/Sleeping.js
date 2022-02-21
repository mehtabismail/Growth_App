import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {Button, Text, Icon, Image} from 'react-native-elements';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import navigationStrings from '../../Constants/navigationStrings';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

class Sleeping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minute: 0,
      second: 0,
      pressed: false,
    };
  }
  intervalID = 0;
  secTime = 0;
  stopWatch() {
    if (this.state.pressed == false) {
      this.setState({pressed: true});
      this.intervalID = setInterval(() => {
        return this.setState((state, props) => {
          return {
            second: state.second == 59 ? 0 : state.second + 1,
            minute: state.second == 59 ? state.minute + 1 : state.minute,
          };
        });
      }, 1000);
    } else if (this.state.pressed == true) {
      this.setState({pressed: false});
      clearInterval(this.intervalID);
      this.secTime = this.state.second;
      this.minTime = this.state.minute;
    }
  }

  render() {
    const sleepingTime = () => {
      // this.state.pressed == true
      //   ? this.stopWatch() &&
      //     this.props.navigation.navigate('SleepingMannual', {
      //       minute: this.state.minute,
      //       second: this.state.second,
      //     })
      //   : this.stopWatch();

      if (this.state.pressed == true) {
        this.stopWatch();
        this.props.navigation.navigate('SleepingMannual', {
          minute: this.state.minute,
          second: this.state.second,
        });
      } else {
        this.stopWatch();
      }
    };
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={{height: '70%', justifyContent: 'center'}}>
            <View style={styles.timeCircleView}>
              <Text style={styles.timeText}>
                {this.state.minute < 10
                  ? '0' + this.state.minute
                  : this.state.minute}
                :
                {this.state.second < 10
                  ? '0' + this.state.second
                  : this.state.second}
              </Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.containerLast}
              onPress={() =>
                this.props.navigation.navigate('SleepingMannual', {
                  minute: this.state.minute,
                  second: this.state.second,
                })
              }>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  alignSelf: 'flex-start',
                  tintColor: Colors.primary,
                }}
                source={require('../../assets/keyboard.png')}
              />
              <Text
                style={{
                  fontSize: Fonts.size.medium,
                  color: Colors.primary,
                  marginLeft: metrics.smallMargin,
                  marginTop: metrics.smallMargin,
                }}>
                or Enter Manually
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <Button
                icon={
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                      marginRight: metrics.baseMargin,
                      tintColor: Colors.primary,
                    }}
                    source={require('../../assets/play-button.png')}
                  />
                }
                buttonStyle={{
                  borderColor: Colors.primary,
                  borderWidth: 2,
                  paddingHorizontal: metrics.doubleBasePadding,
                }}
                type="outline"
                title={this.state.pressed == false ? 'Sleeps' : 'Wakes'}
                titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
                // onPress={()=>this.stopWatch()}
                onPress={sleepingTime}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Sleeping;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerView: {
    elevation: 3,
  },
  timeCircleView: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  buttonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor:"red"
    paddingBottom: metrics.doubleBasePadding,
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  containerLast: {
    flexDirection: 'row',
    padding: 5,
  },
  button: {
    // margin: 10,
    // paddingBottom:10
  },
});
