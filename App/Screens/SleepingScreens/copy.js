import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import moment from 'moment';
import {Button, Text, Icon, Input, Image} from 'react-native-elements';
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
      totalTime: 0,

      beginDate: null,
      endDate: null,

      pressed: false,
      pressCount: 0,

      currentDate: moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a'),

      sleepButton: 'Sleeps',
      wakeButton: 'Wakes Up',
    };
  }
  intervalID = 0;
  secTime = 0;

  stopWatch() {
    if (this.state.pressed == false) {
      this.setState({pressed: true});
      this.setState({pressCount: this.state.pressCount + 1});
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
      this.setState({pressCount: this.state.pressCount + 1});
      clearInterval(this.intervalID);
      this.secTime = this.state.second;
      this.minTime = this.state.minute;
    }
  }

  render() {
    const sleepingTime = () => {
      this.stopWatch();
    };
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {/* BEGIN DATE & Time */}
          {this.state.pressed == true || this.state.pressCount >= 1 ? (
            <View style={{padding: metrics.regularPadding}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    // this.selectDate();
                  }}>
                  <Input
                    placeholder={
                      this.state.currentDate.substring(0, 10) ==
                      this.state.beginDate.substring(0, 10)
                        ? 'Today'
                        : this.state.beginDate.substring(0, 10)
                    }
                    editable={false}
                    rightIcon={
                      <TouchableOpacity>
                        <Image
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            alignSelf: 'flex-start',
                            marginLeft: 20,
                          }}
                          source={require('../../assets/caret-down.png')}
                        />
                      </TouchableOpacity>
                    }
                  />
                </TouchableOpacity>
                {console.log(
                  `begin Time : ${this.state.beginDate.substring(11, 19)}`,
                )}
                <TouchableOpacity style={{width: '50%'}}>
                  <Input
                    placeholder={this.state.beginDate.substring(11, 19)}
                    editable={false}
                    rightIcon={
                      <TouchableOpacity>
                        <Image
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            alignSelf: 'flex-start',
                            marginLeft: 20,
                          }}
                          source={require('../../assets/caret-down.png')}
                        />
                      </TouchableOpacity>
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          {/* END DATE & Time */}
          {this.state.pressed == false && this.state.pressCount >= 1 ? (
            <View style={{padding: metrics.regularPadding}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    // this.selectDate();
                  }}>
                  {
                    (console.log(this.state.currentDate.substring(0, 10)),
                    console.log('and'),
                    console.log(this.state.endDate.substring(0, 10)))
                  }
                  <Input
                    placeholder={
                      this.state.currentDate.substring(0, 10) ===
                      this.state.endDate.substring(0, 10)
                        ? 'Today'
                        : this.state.endDate.substring(0, 10)
                    }
                    editable={false}
                    rightIcon={
                      <TouchableOpacity>
                        <Image
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            alignSelf: 'flex-start',
                            marginLeft: 20,
                          }}
                          source={require('../../assets/caret-down.png')}
                        />
                      </TouchableOpacity>
                    }
                  />
                </TouchableOpacity>
                {console.log(
                  `begin Time : ${this.state.endDate.substring(11, 19)}`,
                )}
                <TouchableOpacity style={{width: '50%'}}>
                  <Input
                    placeholder={this.state.endDate.substring(11, 19)}
                    editable={false}
                    rightIcon={
                      <TouchableOpacity>
                        <Image
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            alignSelf: 'flex-start',
                            marginLeft: 20,
                          }}
                          source={require('../../assets/caret-down.png')}
                        />
                      </TouchableOpacity>
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          {this.state.pressed == false && this.state.pressCount == 0 ? (
            <View style={{height: '20%'}}></View>
          ) : null}

          {/* TIME CIRCLE */}
          <View>
            <View style={styles.timeCircleView}>
              {this.state.pressCount >= 2 ? (
                <View>
                  <Text style={styles.timeText}>
                    {this.state.second >= 31
                      ? this.state.minute + 1 + ' min'
                      : '0 min'}
                  </Text>
                </View>
              ) : (
                <Text style={styles.timeText}>
                  {this.state.minute < 10
                    ? '0' + this.state.minute
                    : this.state.minute}
                  :
                  {this.state.second < 10
                    ? '0' + this.state.second
                    : this.state.second}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.buttonView}>
            {this.state.pressed == false && this.state.pressCount == 0 ? (
              <TouchableOpacity
                style={styles.containerLast}
                onPress={() =>
                  this.props.navigation.navigate(
                    navigationStrings.SLEEPING_MANNUAL,
                    {
                      minute: this.state.minute,
                      second: this.state.second,
                    },
                  )
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
            ) : null}

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
                title={
                  this.state.pressed == false && this.state.pressCount == 0
                    ? 'Sleeps'
                    : this.state.pressed == true && this.state.pressCount == 1
                    ? 'Wakes Up'
                    : 'Save'
                }
                titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
                onPress={() => {
                  console.log('Count : ' + this.state.pressCount);
                  if (
                    this.state.pressed == false &&
                    this.state.pressCount == 0
                  ) {
                    this.setState({
                      beginDate: moment()
                        .utcOffset('+05:00')
                        .format('YYYY-MM-DD hh:mm a'),
                    });
                    return sleepingTime();
                  }

                  if (
                    this.state.pressed == true &&
                    this.state.pressCount == 1
                  ) {
                    this.setState({
                      endDate: moment()
                        .utcOffset('+05:00')
                        .format('YYYY-MM-DD hh:mm a'),
                    });
                    return sleepingTime();
                  }

                  if (this.state.pressCount >= 2) {
                    alert('Uploaded Successfully');
                    this.props.navigation.popToTop();
                  }
                }}
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
    // backgroundColor:"red",
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
