// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {Button, Input} from 'react-native-elements';
// import {useSelector, useDispatch} from 'react-redux';
// // import ObjReducer, {setEmail} from './App/Redux/Reducers/ObjReducer';
// import LoginReducer, {setApiData} from './App/Redux/Reducers/LoginReducer';
// import Colors from './App/Themes/Colors';

// const Test2 = ({navigation}) => {
//   const person = {
//     firstName: 'john',
//     lastName: 'Doe',
//     age: 50,
//     eyeColor: 'red',
//   };
//   const dispatch = useDispatch();
//   const {loginApiData} = useSelector(state => state.login);
//   return (
//     <View style={styles.container}>
//       <View
//         style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
//         <View>
//           <Text
//             style={{fontSize: 40, fontWeight: 'bold', color: 'purple'}}>
//                 {console.log(loginApiData.firstName)}
//                 {loginApiData.firstName}
//             </Text>
//         </View>
//         <Input
//           placeholder="E-mail or Username"
//           style={{
//             fontWeight: 'bold',
//           }}
//           inputContainerStyle={{
//             width: '95%',
//             alignSelf: 'center',
//             marginBottom: -15,
//             borderBottomWidth: 1,
//             borderBottomColor: Colors.primary,
//           }}
//         />
//         <View>
//           <View>
//             <Button
//               title="Submit"
//               containerStyle={{margin: 10}}
//               onPress={() => {
//                 console.log('pressed');
//                 dispatch(setApiData(person));
//               }}
//             />
//           </View>
//           <View>
//             <Button
//               title="Navigation"
//               containerStyle={{margin: 10}}
//               onPress={() => {
//                 navigation.navigate('SignIn');
//               }}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Test2;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//   },
// });

