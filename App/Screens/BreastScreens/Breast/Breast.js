import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import navigationStrings from '../../../Constants/navigationStrings';
import Colors from '../../../Themes/Colors';
import Fonts from '../../../Themes/Fonts';
import metrics from '../../../Themes/Metrics';
import BreastStyles from './BreastStyles';
import moment from 'moment';

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

      beginDate: null,
      endDate: null,

      rightPressed: false,
      leftPressed: false,

      leftIntervalID: 0,
      rightIntervalId: 0,

      stopped: false,

      currentDate: moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a'),
      saveCount: 0,
    };
  }

  render() {
    const fetchBreastFeedApi = async () => {
      return await fetch('http://grow-backend.herokuapp.com/api/breast-feed', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer 7|kWcDNvzMDQrIznMSUBE1osrjSclZKoRTAa5VKYnh',
        },
        body: JSON.stringify({
          child_id: 4,
          side: 'left',
          started_at: this.state.beginDate,
          end_at: this.state.endDate,
          total_time: this.state.minute.toString(),
        }),
      })
        .then(async response => response.json())
        .then(async json => {
          console.log(json);
        })
        .catch(error => {
          console.error(error);
        });
    };

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
          {this.state.saveCount === 0 &&
          this.state.minute === 0 &&
          this.state.second === 0 &&
          this.state.leftPressed === false &&
          this.state.rightPressed === false ? (
            <View style={{height: 50}}></View>
          ) : null}

          {/* BEGIN DATE & Time */}
          {this.state.rightPressed == false &&
          this.state.leftPressed == false &&
          this.state.minute == 0 &&
          this.state.second == 0 ? null : (
            <View
              style={{
                paddingHorizontal: metrics.regularPadding,
                paddingTop: metrics.regularPadding,
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                  }}>
                  <Input
                    label="Date of feeding"
                    placeholder={
                      this.state.currentDate.substring(0, 10) ==
                      this.state.beginDate.substring(0, 10)
                        ? 'Today'
                        : this.state.beginDate.substring(0, 10)
                    }
                    editable={false}
                  />
                </TouchableOpacity>
                {console.log(
                  `begin Time : ${this.state.beginDate.substring(11, 19)}`,
                )}
                <TouchableOpacity style={{width: '50%'}}>
                  <Input
                    placeholder={this.state.beginDate.substring(11, 19)}
                    editable={false}
                    label="Begin Time"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* END DATE & Time */}
          {this.state.saveCount >= 1 ? (
            <View
              style={{
                paddingHorizontal: metrics.regularPadding,
                paddingTop: metrics.regularPadding,
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                  }}>
                  <Input
                    label="Left duration"
                    placeholder={
                      this.state.lSecond >= 31
                        ? `${this.state.lMinute + 1} min`
                        : `${this.state.lMinute} min`
                    }
                    editable={false}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{width: '50%'}}>
                  <Input
                    label="Right duration"
                    placeholder={
                      this.state.rSecond >= 31
                        ? `${this.state.rMinute + 1} min`
                        : `${this.state.rMinute} min`
                    }
                    editable={false}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          {/* {this.state.pressed == false && this.state.pressCount == 0 ? (
            <View style={{height: '20%'}}></View>
          ) : null} */}

          {/* TIME CIRCLE */}
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
              {this.state.saveCount == 0 ? (
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
              ) : null}

              {/* LEFT BUTTON  */}
              {this.state.saveCount === 0 ? (
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
                    titleStyle={[
                      Fonts.style.buttonText,
                      {color: Colors.primary},
                    ]}
                    onPress={async () => {
                      if (this.state.saveCount == 0) {
                        if (
                          this.state.leftPressed == false &&
                          this.state.rightPressed == false
                        ) {
                          this.setState({
                            beginDate: moment()
                              .utcOffset('+05:00')
                              .format('YYYY-MM-DD hh:mm a'),
                          });
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
                      }
                    }}
                  />

                  {/* RIGHT BUTTON */}
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
                    titleStyle={[
                      Fonts.style.buttonText,
                      {color: Colors.primary},
                    ]}
                    onPress={async () => {
                      if (this.state.saveCount == 0) {
                        if (
                          this.state.rightPressed == false &&
                          this.state.leftPressed == false
                        ) {
                          this.setState({
                            beginDate: moment()
                              .utcOffset('+05:00')
                              .format('YYYY-MM-DD hh:mm a'),
                          });
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
                      }
                    }}
                  />
                </View>
              ) : null}

              {this.state.lSecond > 0 ||
              this.state.lMinute > 0 ||
              this.state.rSecond > 0 ||
              this.state.rMinute > 0 ||
              this.state.leftPressed === true ||
              this.state.rightPressed === true ? (
                <View
                  style={{
                    marginTop: metrics.regularMargin,
                  }}>
                  <Button
                    title={
                      this.state.saveCount === 0 ? 'Save' : 'Save & Finish'
                    }
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
                    onPress={async () => {
                      if (this.state.minute != 0 || this.state.second != 0) {
                        this.setState({saveCount: this.state.saveCount + 1});
                        clearInterval(this.state.rightIntervalId);
                        clearInterval(this.state.leftIntervalID);

                        if (this.state.saveCount === 1) {
                          console.log(`left duration : ${this.state.lMinute} `);
                          console.log(
                            `right duration : ${this.state.rMinute} `,
                          );
                          await this.setState({
                            endDate: moment()
                              .utcOffset('+05:00')
                              .format('YYYY-MM-DD hh:mm a'),
                          });
                          fetchBreastFeedApi();
                          this.props.navigation.popToTop();
                        }
                      }
                    }}
                  />
                </View>
              ) : null}
              {this.state.rightPressed == false &&
              this.state.leftPressed == false &&
              this.state.minute == 0 &&
              this.state.second == 0 &&
              this.state.saveCount === 0 ? (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    padding: metrics.basePadding,
                  }}
                  onPress={() =>
                    this.props.navigation.navigate(
                      navigationStrings.BREASTMANNUAL,
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
              ) : null}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
