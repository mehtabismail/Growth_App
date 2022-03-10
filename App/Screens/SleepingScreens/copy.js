// import React, {Component} from 'react';
// import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
// import moment from 'moment';
// import {Button, Text, Icon, Input, Image} from 'react-native-elements';
// import metrics from '../../Themes/Metrics';
// import Fonts from '../../Themes/Fonts';
// import Colors from '../../Themes/Colors';
// import navigationStrings from '../../Constants/navigationStrings';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// class Sleeping extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       minute: 0,
//       second: 0,
//       totalTime: 0,

//       beginDate: null,
//       endDate: null,

//       pressed: false,
//       pressCount: 0,

//       currentDate: moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a'),

//       sleepButton: 'Sleeps',
//       wakeButton: 'Wakes Up',
//     };
//   }
//   intervalID = 0;
//   secTime = 0;

//   stopWatch() {
//     if (this.state.pressed == false) {
//       this.setState({pressed: true});
//       this.setState({pressCount: this.state.pressCount + 1});
//       this.intervalID = setInterval(() => {
//         return this.setState((state, props) => {
//           return {
//             second: state.second == 59 ? 0 : state.second + 1,
//             minute: state.second == 59 ? state.minute + 1 : state.minute,
//           };
//         });
//       }, 1000);
//     } else if (this.state.pressed == true) {
//       this.setState({pressed: false});
//       this.setState({pressCount: this.state.pressCount + 1});
//       clearInterval(this.intervalID);
//       this.secTime = this.state.second;
//       this.minTime = this.state.minute;
//     }
//   }

//   render() {
//     const sleepingTime = () => {
//       this.stopWatch();
//     };
//     return (
//       <SafeAreaView>
//         <View style={styles.container}>
//           {/* BEGIN DATE & Time */}
//           {this.state.pressed == true || this.state.pressCount >= 1 ? (
//             <View style={{padding: metrics.regularPadding}}>
//               <View style={{flexDirection: 'row'}}>
//                 <TouchableOpacity
//                   style={{
//                     width: '50%',
//                     flexDirection: 'row',
//                   }}
//                   onPress={() => {
//                     // this.selectDate();
//                   }}>
//                   <Input
//                     placeholder={
//                       this.state.currentDate.substring(0, 10) ==
//                       this.state.beginDate.substring(0, 10)
//                         ? 'Today'
//                         : this.state.beginDate.substring(0, 10)
//                     }
//                     editable={false}
//                     rightIcon={
//                       <TouchableOpacity>
//                         <Image
//                           style={{
//                             width: 25,
//                             height: 25,
//                             resizeMode: 'contain',
//                             alignSelf: 'flex-start',
//                             marginLeft: 20,
//                           }}
//                           source={require('../../assets/caret-down.png')}
//                         />
//                       </TouchableOpacity>
//                     }
//                   />
//                 </TouchableOpacity>
//                 {console.log(
//                   `begin Time : ${this.state.beginDate.substring(11, 19)}`,
//                 )}
//                 <TouchableOpacity style={{width: '50%'}}>
//                   <Input
//                     placeholder={this.state.beginDate.substring(11, 19)}
//                     editable={false}
//                     rightIcon={
//                       <TouchableOpacity>
//                         <Image
//                           style={{
//                             width: 25,
//                             height: 25,
//                             resizeMode: 'contain',
//                             alignSelf: 'flex-start',
//                             marginLeft: 20,
//                           }}
//                           source={require('../../assets/caret-down.png')}
//                         />
//                       </TouchableOpacity>
//                     }
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ) : null}

//           {/* END DATE & Time */}
//           {this.state.pressed == false && this.state.pressCount >= 1 ? (
//             <View style={{padding: metrics.regularPadding}}>
//               <View style={{flexDirection: 'row'}}>
//                 <TouchableOpacity
//                   style={{
//                     width: '50%',
//                     flexDirection: 'row',
//                   }}
//                   onPress={() => {
//                     // this.selectDate();
//                   }}>
//                   {
//                     (console.log(this.state.currentDate.substring(0, 10)),
//                     console.log('and'),
//                     console.log(this.state.endDate.substring(0, 10)))
//                   }
//                   <Input
//                     placeholder={
//                       this.state.currentDate.substring(0, 10) ===
//                       this.state.endDate.substring(0, 10)
//                         ? 'Today'
//                         : this.state.endDate.substring(0, 10)
//                     }
//                     editable={false}
//                     rightIcon={
//                       <TouchableOpacity>
//                         <Image
//                           style={{
//                             width: 25,
//                             height: 25,
//                             resizeMode: 'contain',
//                             alignSelf: 'flex-start',
//                             marginLeft: 20,
//                           }}
//                           source={require('../../assets/caret-down.png')}
//                         />
//                       </TouchableOpacity>
//                     }
//                   />
//                 </TouchableOpacity>
//                 {console.log(
//                   `begin Time : ${this.state.endDate.substring(11, 19)}`,
//                 )}
//                 <TouchableOpacity style={{width: '50%'}}>
//                   <Input
//                     placeholder={this.state.endDate.substring(11, 19)}
//                     editable={false}
//                     rightIcon={
//                       <TouchableOpacity>
//                         <Image
//                           style={{
//                             width: 25,
//                             height: 25,
//                             resizeMode: 'contain',
//                             alignSelf: 'flex-start',
//                             marginLeft: 20,
//                           }}
//                           source={require('../../assets/caret-down.png')}
//                         />
//                       </TouchableOpacity>
//                     }
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ) : null}
//           {this.state.pressed == false && this.state.pressCount == 0 ? (
//             <View style={{height: '20%'}}></View>
//           ) : null}

//           {/* TIME CIRCLE */}
//           <View>
//             <View style={styles.timeCircleView}>
//               {this.state.pressCount >= 2 ? (
//                 <View>
//                   <Text style={styles.timeText}>
//                     {this.state.second >= 31
//                       ? this.state.minute + 1 + ' min'
//                       : '0 min'}
//                   </Text>
//                 </View>
//               ) : (
//                 <Text style={styles.timeText}>
//                   {this.state.minute < 10
//                     ? '0' + this.state.minute
//                     : this.state.minute}
//                   :
//                   {this.state.second < 10
//                     ? '0' + this.state.second
//                     : this.state.second}
//                 </Text>
//               )}
//             </View>
//           </View>
//           <View style={styles.buttonView}>
//             {this.state.pressed == false && this.state.pressCount == 0 ? (
//               <TouchableOpacity
//                 style={styles.containerLast}
//                 onPress={() =>
//                   this.props.navigation.navigate(
//                     navigationStrings.SLEEPING_MANNUAL,
//                     {
//                       minute: this.state.minute,
//                       second: this.state.second,
//                     },
//                   )
//                 }>
//                 <Image
//                   style={{
//                     width: 30,
//                     height: 30,
//                     resizeMode: 'contain',
//                     alignSelf: 'flex-start',
//                     tintColor: Colors.primary,
//                   }}
//                   source={require('../../assets/keyboard.png')}
//                 />
//                 <Text
//                   style={{
//                     fontSize: Fonts.size.medium,
//                     color: Colors.primary,
//                     marginLeft: metrics.smallMargin,
//                     marginTop: metrics.smallMargin,
//                   }}>
//                   or Enter Manually
//                 </Text>
//               </TouchableOpacity>
//             ) : null}

//             <View style={styles.button}>
//               <Button
//                 icon={
//                   <Image
//                     style={{
//                       width: 30,
//                       height: 30,
//                       resizeMode: 'contain',
//                       marginRight: metrics.baseMargin,
//                       tintColor: Colors.primary,
//                     }}
//                     source={require('../../assets/play-button.png')}
//                   />
//                 }
//                 buttonStyle={{
//                   borderColor: Colors.primary,
//                   borderWidth: 2,
//                   paddingHorizontal: metrics.doubleBasePadding,
//                 }}
//                 type="outline"
//                 title={
//                   this.state.pressed == false && this.state.pressCount == 0
//                     ? 'Sleeps'
//                     : this.state.pressed == true && this.state.pressCount == 1
//                     ? 'Wakes Up'
//                     : 'Save'
//                 }
//                 titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
//                 onPress={() => {
//                   console.log('Count : ' + this.state.pressCount);
//                   if (
//                     this.state.pressed == false &&
//                     this.state.pressCount == 0
//                   ) {
//                     this.setState({
//                       beginDate: moment()
//                         .utcOffset('+05:00')
//                         .format('YYYY-MM-DD hh:mm a'),
//                     });
//                     return sleepingTime();
//                   }

//                   if (
//                     this.state.pressed == true &&
//                     this.state.pressCount == 1
//                   ) {
//                     this.setState({
//                       endDate: moment()
//                         .utcOffset('+05:00')
//                         .format('YYYY-MM-DD hh:mm a'),
//                     });
//                     return sleepingTime();
//                   }

//                   if (this.state.pressCount >= 2) {
//                     alert('Uploaded Successfully');
//                     this.props.navigation.popToTop();
//                   }
//                 }}
//               />
//             </View>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// export default Sleeping;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     height: '100%',
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//   },
//   headerView: {
//     elevation: 3,
//   },
//   timeCircleView: {
//     width: 250,
//     height: 250,
//     borderRadius: 250 / 2,
//     backgroundColor: 'lightblue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 1,
//   },
//   buttonView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     // backgroundColor:"red",
//     paddingBottom: metrics.doubleBasePadding,
//   },
//   timeText: {
//     fontSize: 50,
//     fontWeight: 'bold',
//   },
//   containerLast: {
//     flexDirection: 'row',
//     padding: 5,
//   },
//   button: {
//     // margin: 10,
//     // paddingBottom:10
//   },
// });










// import React, {Component} from 'react';
// import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
// import CustomHeader from '../../Components/CustomHeader';
// import {Button, Text, Icon, Input, Image} from 'react-native-elements';
// import Colors from '../../Themes/Colors';
// import Fonts from '../../Themes/Fonts';
// import metrics from '../../Themes/Metrics';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import navigationStrings from '../../Constants/navigationStrings';

// export default class SleepingMannual extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected1: false,
//       selected2: false,
//       isDatePickerVisible: false,
//       beginDate: '',
//       endDate: '',
//       beginTime: '',
//       endTime: '',
//       mode: '',
//       first: false,
//       second: false,

//       time1: null,
//       time2: null,

//       overAllTime: null,
//     };
//   }

//   selectDate = () => {
//     this.setState({mode: 'date'});
//     this.showDatePicker();
//   };

//   selectTime = () => {
//     this.setState({mode: 'time'});
//     this.showDatePicker();
//   };

//   showDatePicker = () => {
//     this.setState({isDatePickerVisible: true});
//   };

//   hideDatePicker = () => {
//     this.setState({isDatePickerVisible: false});
//   };

//   millisToMinutesAndSeconds = duration => {

//     var milliseconds = parseInt((duration % 1000) / 100),
//       seconds = Math.floor((duration / 1000) % 60),
//       minutes = Math.floor((duration / (1000 * 60)) % 60),
//       hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     return console.log(
//       hours + ':' + minutes + ':' + seconds + '.' + milliseconds,
//     );
//   };

//   logicFun = () => {
//     console.log('running ');

//     const ms = Math.abs(this.state.time2 - this.state.time1);

//     let minutes = (ms / (1000 * 60)).toFixed(1);
//     let hours = (ms / (1000 * 60 * 60)).toFixed(1);
//     let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);

//     if (minutes < 60) {
//       console.log(minutes + ' Min');
//     } else if (hours < 24) {
//       console.log(hours + ' Hrs');
//     } else {
//       console.log(days + ' Days');
//     }
//     console.log('minutes : ');
//     console.log(minutes);
//     let length = minutes.length;
//     console.log(`length : ${length}`);

//     this.setState({overAllTime: minutes.toString().substring(0, length - 2)});
//     console.log(`overall time in minutes : ${this.state.overAllTime}`);
//   };

//   handleConfirm = date => {
//     if (this.state.first == true) {
//       if (this.state.mode == 'date') {
//         this.setState({beginDate: date.toString().substring(0, 15)});
//       } else {
//         this.setState({
//           beginTime: date.toString().substring(16, 21),
//           time1: date,
//         });
//       }
//     } else {
//       if (this.state.mode == 'date') {
//         this.setState({endDate: date.toString().substring(0, 15)});
//       } else {
//         this.setState({
//           endTime: date.toString().substring(16, 21),
//           time2: date,
//         });
//       }
//     }

//     this.setState({second: false});
//     this.setState({first: false});
//     this.setState({mode: ''});
//     this.hideDatePicker();

//     if (this.state.time1 != null && this.state.time2 != null) {
//       // const ms = Math.abs(this.state.time2 - this.state.time1);
//       // this.millisToMinutesAndSeconds(ms);
//       this.logicFun();
//     }
//   };

//   BeginDateAndTime = () => {
//     return (
//       <View>
//         <View style={{flexDirection: 'row'}}>
//           <TouchableOpacity
//             style={{
//               width: '50%',
//               flexDirection: 'row',
//             }}
//             onPress={() => {
//               this.setState({first: true});
//               this.selectDate();
//             }}>
//             <Input
//               placeholder={
//                 this.state.beginDate == ''
//                   ? 'Begin Date'
//                   : this.state.beginDate.toString().substring(0, 7)
//               }
//               editable={false}
//               rightIcon={
//                 <TouchableOpacity>
//                   <Image
//                     style={{
//                       width: 25,
//                       height: 25,
//                       resizeMode: 'contain',
//                       alignSelf: 'flex-start',
//                       marginLeft: 20,
//                     }}
//                     source={require('../../assets/caret-down.png')}
//                   />
//                 </TouchableOpacity>
//               }
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               this.setState({first: true});
//               this.selectTime();
//             }}
//             style={{width: '50%'}}>
//             <Input
//               placeholder={
//                 this.state.beginTime == '' ? 'Begin Time' : this.state.beginTime
//               }
//               editable={false}
//               rightIcon={
//                 <TouchableOpacity>
//                   <Image
//                     style={{
//                       width: 25,
//                       height: 25,
//                       resizeMode: 'contain',
//                       alignSelf: 'flex-start',
//                       marginLeft: 20,
//                     }}
//                     source={require('../../assets/caret-down.png')}
//                   />
//                 </TouchableOpacity>
//               }
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   EndDateAndTime = () => {
//     return (
//       <View>
//         <View style={{flexDirection: 'row'}}>
//           <TouchableOpacity
//             style={{
//               width: '50%',
//               flexDirection: 'row',
//             }}
//             onPress={() => {
//               this.setState({second: true});
//               this.selectDate();
//             }}>
//             <Input
//               placeholder={
//                 this.state.endDate == ''
//                   ? 'End Date'
//                   : this.state.endDate.toString().substring(0, 7)
//               }
//               editable={false}
//               rightIcon={
//                 <TouchableOpacity
//                   onPress={() => {
//                     this.setState({second: true});
//                     this.selectDate();
//                   }}>
//                   <Image
//                     style={{
//                       width: 25,
//                       height: 25,
//                       resizeMode: 'contain',
//                       alignSelf: 'flex-start',
//                       marginLeft: 20,
//                     }}
//                     source={require('../../assets/caret-down.png')}
//                   />
//                 </TouchableOpacity>
//               }
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               this.setState({second: true});
//               this.selectTime();
//             }}
//             style={{width: '50%'}}>
//             <Input
//               placeholder={
//                 this.state.endTime == '' ? 'End Time' : this.state.endTime
//               }
//               editable={false}
//               rightIcon={
//                 <TouchableOpacity
//                   onPress={() => {
//                     this.setState({second: true});
//                     this.selectTime();
//                   }}>
//                   <Image
//                     style={{
//                       width: 25,
//                       height: 25,
//                       resizeMode: 'contain',
//                       alignSelf: 'flex-start',
//                       marginLeft: 20,
//                     }}
//                     source={require('../../assets/caret-down.png')}
//                   />
//                 </TouchableOpacity>
//               }
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
//   render() {
//     return (
//       <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
//         <View style={styles.container}>
//           <DateTimePickerModal
//             isVisible={this.state.isDatePickerVisible}
//             mode={this.state.mode}
//             locale="en_GB" // Use "en_GB" here
//             // date={new Date()}
//             timePickerModeAndroid=""
//             onConfirm={this.handleConfirm}
//             onCancel={this.hideDatePicker}
//           />
//           <View style={{marginHorizontal: metrics.baseMargin}}>
//             {/* BEGIN DATE / BEGIN TIME */}
//             {this.BeginDateAndTime()}
//             {/* END DATE / END TIME */}
//             {this.EndDateAndTime()}
//           </View>
//           <View style={styles.timeCircleView}>
//             <Text style={styles.timeText}>
//               {this.state.overAllTime == null
//                 ? (this.props.route.params.minute < 10
//                     ? '0' + this.props.route.params.minute
//                     : this.props.route.params.minute) +
//                   ':' +
//                   (this.props.route.params.second < 10
//                     ? '0' + this.props.route.params.second
//                     : this.props.route.params.second)
//                 :`${this.state.overAllTime} minutes`}
//             </Text>
//           </View>
//           <View style={styles.buttonView}>
//             <View style={styles.button}>
//               <Button
//                 icon={
//                   <Image
//                     style={{
//                       width: 30,
//                       height: 30,
//                       resizeMode: 'contain',
//                       marginRight: metrics.baseMargin,
//                       tintColor: Colors.primary,
//                     }}
//                     source={require('../../assets/play-button.png')}
//                   />
//                 }
//                 buttonStyle={{
//                   borderColor: Colors.primary,
//                   borderWidth: 2,
//                   paddingHorizontal: metrics.doubleBasePadding,
//                 }}
//                 type="outline"
//                 title="Save"
//                 titleStyle={[Fonts.style.buttonText, {color: Colors.primary}]}
//                 onPress={()=> {
//                   alert("Saved Selected Data");
//                   this.props.navigation.replace(navigationStrings.BOTTOM_TABS)
//                 }}
//               />
//             </View>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     height: '100%',
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//   },
//   headerView: {
//     elevation: 3,
//   },
//   timeCircleView: {
//     width: 220,
//     height: 220,
//     borderRadius: 220 / 2,
//     backgroundColor: 'lightblue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 1,
//   },
//   buttonView: {
//     alignItems: 'center',
//     marginBottom: -metrics.baseMargin,
//   },
//   timeText: {
//     fontSize: Fonts.size.h5,
//     fontWeight: 'bold',
//     padding:metrics.regularPadding
//   },
//   containerLast: {
//     flexDirection: 'row',
//     padding: metrics.basePadding,
//   },
//   button: {
//     // margin: 10,
//     // marginBottom:metrics.baseMargin
//   },
// });
