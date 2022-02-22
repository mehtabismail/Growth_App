import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import navigationStrings from '../../../Constants/navigationStrings';
import Colors from '../../../Themes/Colors';
import Fonts from '../../../Themes/Fonts';
import metrics from '../../../Themes/Metrics';
import BreastStyles from './BreastStyles';

export default class Breast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minute: 0,
      second: 0,

      lMinute: 0,
      lSecond: 0,

      rMinute: 0,
      rSecond: 0,

      rightPressed: false,
      leftPressed: false,

      leftIntervalID: 0,
      rightIntervalId: 0,

      stopped: false,
    };
  }

  render() {
    stopWatch = async () => {
      if (
        this.state.leftPressed === true &&
        this.state.rightPressed === false &&
        this.state.stopped == false
      ) {
        clearInterval(this.state.rightIntervalId);
        this.state.leftIntervalID = setInterval(() => {
          return this.setState((state, props) => {
            return {
              lSecond: state.lSecond == 59 ? 0 : state.lSecond + 1,
              lMinute: state.lSecond == 59 ? state.lMinute + 1 : state.lMinute,
              second: state.lSecond + state.rSecond,
              minute: state.lMinute + state.rMinute,
            };
          });
        }, 1000);
      } else {
        clearInterval(this.state.leftIntervalID);
        console.log('value : ' + this.state.leftPressed);
      }

      if (this.state.leftPressed == false && this.state.rightPressed == true) {
        this.setState({stopped: true});
      }

      if (
        this.state.rightPressed == false &&
        this.state.leftPressed == true &&
        this.state.stopped == true
      ) {
        this.setState({stopped: false});
        clearInterval(this.state.rightIntervalId);
        this.state.leftIntervalID = setInterval(() => {
          return this.setState((state, props) => {
            return {
              lSecond: state.lSecond == 59 ? 0 : state.lSecond + 1,
              lMinute: state.lSecond == 59 ? state.lMinute + 1 : state.lMinute,
              second: state.lSecond + state.rSecond,
              minute: state.lMinute + state.rMinute,
            };
          });
        }, 1000);
      }
    };

    stopWatch2 = () => {
      if (
        this.state.rightPressed == true &&
        this.state.leftPressed == false &&
        this.state.stopped == false
      ) {
        console.log('running');
        clearInterval(this.state.leftIntervalID);
        this.state.rightIntervalId = setInterval(() => {
          return this.setState((state, props) => {
            return {
              rSecond: state.rSecond == 59 ? 0 : state.rSecond + 1,
              rMinute: state.rSecond == 59 ? state.rMinute + 1 : state.rMinute,
              second: state.lSecond + state.rSecond,
              minute: state.lMinute + state.rMinute,
            };
          });
        }, 1000);
      } else {
        clearInterval(this.state.rightIntervalId);
      }

      if (this.state.leftPressed == true && this.state.rightPressed == false) {
        this.setState({stopped: true});
      }

      if (
        this.state.rightPressed == true &&
        this.state.leftPressed == false &&
        this.state.stopped == true
      ) {
        this.setState({stopped: false});
        clearInterval(this.state.leftIntervalID);
        this.state.rightIntervalId = setInterval(() => {
          return this.setState((state, props) => {
            return {
              rSecond: state.rSecond == 59 ? 0 : state.rSecond + 1,
              rMinute: state.rSecond == 59 ? state.rMinute + 1 : state.rMinute,
              second: state.lSecond + state.rSecond,
              minute: state.lMinute + state.rMinute,
            };
          });
        }, 1000);
      }
    };

    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View style={BreastStyles.container}>
          <View style={{height: 50}}></View>

          <View style={BreastStyles.timeCircleView}>
            <Text style={BreastStyles.timeText}>
              {this.state.minute < 10
                ? '0' + this.state.minute
                : this.state.minute}
              :
              {this.state.second == 0 && this.state.minute == 0
                ? '00'
                : this.state.second < 9
                ? '0' + (this.state.second + 1)
                : this.state.second + 1}
            </Text>
          </View>

          <View style={BreastStyles.buttonView}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  width: '80%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={{fontSize: Fonts.size.input}}>
                    {this.state.lMinute < 10
                      ? '0' + this.state.lMinute
                      : this.state.lMinute}
                    :
                    {this.state.lSecond < 10
                      ? '0' + this.state.lSecond
                      : this.state.lSecond}
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: Fonts.size.input}}>
                    {this.state.rMinute < 10
                      ? '0' + this.state.rMinute
                      : this.state.rMinute}
                    :
                    {this.state.rSecond < 10
                      ? '0' + this.state.rSecond
                      : this.state.rSecond}
                  </Text>
                </View>
              </View>
              <View style={BreastStyles.button}>
                <Button
                  icon={
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain',
                        marginRight: metrics.smallMargin,
                        tintColor: Colors.primary,
                      }}
                      source={require('../../../assets/play-button.png')}
                    />
                  }
                  buttonStyle={[BreastStyles.playButton, {marginRight: -1}]}
                  containerStyle={{width: '40%'}}
                  type="outline"
                  title="Left"
                  titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
                  onPress={async () => {
                    if (
                      this.state.leftPressed == false &&
                      this.state.rightPressed == false
                    ) {
                      await this.setState({
                        leftPressed: true,
                        rightPressed: false,
                      });
                      return stopWatch();
                    }

                    if (
                      this.state.rightPressed == false &&
                      this.state.leftPressed == true &&
                      this.state.stopped == true
                    ) {
                      await this.setState({
                        rightPressed: false,
                        leftPressed: true,
                      });
                      return stopWatch();
                    }

                    if (
                      this.state.leftPressed == true &&
                      this.state.rightPressed == false
                    ) {
                      await this.setState({
                        leftPressed: false,
                        rightPressed: true,
                      });
                      return stopWatch();
                    }

                    if (
                      this.state.leftPressed == false &&
                      this.state.rightPressed == true
                    ) {
                      await this.setState({
                        leftPressed: true,
                        rightPressed: false,
                      });
                      return stopWatch();
                    }
                  }}
                />
                <Button
                  icon={
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain',
                        marginRight: metrics.smallMargin,
                        tintColor: Colors.primary,
                      }}
                      source={require('../../../assets/play-button.png')}
                    />
                  }
                  buttonStyle={[BreastStyles.playButton]}
                  containerStyle={{width: '40%'}}
                  type="outline"
                  title="Right"
                  titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
                  onPress={async () => {
                    if (
                      this.state.rightPressed == false &&
                      this.state.leftPressed == false
                    ) {
                      await this.setState({
                        rightPressed: true,
                        leftPressed: false,
                      });
                      return stopWatch2();
                    }

                    if (
                      this.state.rightPressed == true &&
                      this.state.leftPressed == false &&
                      this.state.stopped == true
                    ) {
                      await this.setState({
                        rightPressed: true,
                        leftPressed: false,
                      });
                      return stopWatch2();
                    }

                    if (
                      this.state.rightPressed == true &&
                      this.state.leftPressed == false
                    ) {
                      await this.setState({
                        rightPressed: false,
                        leftPressed: true,
                      });
                      return stopWatch2();
                    }

                    if (
                      this.state.rightPressed == false &&
                      this.state.leftPressed == true
                    ) {
                      await this.setState({
                        rightPressed: true,
                        leftPressed: false,
                      });
                      return stopWatch2();
                    }

                    if (this.state.rightPressed == false) {
                      await this.setState({
                        rightPressed: true,
                        leftPressed: false,
                      });
                      return stopWatch2();
                    }
                  }}
                />
              </View>
              <View style={{marginTop: metrics.regularMargin}}>
                <Button
                  title="Save"
                  buttonStyle={{
                    borderColor: Colors.primary,
                  }}
                  type="outline"
                  raised
                  titleStyle={{color: Colors.primary}}
                  containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                  }}
                />
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', padding: metrics.basePadding}}
                onPress={() =>
                  this.props.navigation.navigate(navigationStrings.BREASTMANNUAL)
                }>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    alignSelf: 'flex-start',
                    tintColor: Colors.primary,
                  }}
                  source={require('../../../assets/keyboard.png')}
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
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
