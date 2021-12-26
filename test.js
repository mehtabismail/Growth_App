import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import CounterSlice, {decrement, increment, incrementByAmount} from './App/Redux/Reducers/CounterSlice';
import LoginReducer, {setEmail} from './App/Redux/Reducers/LoginReducer';
import Colors from './App/Themes/Colors';


const Test = ({navigation}) => {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <View>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: 'purple'}}>
            {count}
          </Text>
        </View>
        <Input
                    placeholder="E-mail or Username"
                    style={{
                      fontWeight: 'bold',
                    }}
                    inputContainerStyle={{
                      width: '95%',
                      alignSelf: 'center',
                      marginBottom: -15,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.primary,
                    }}
                  />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Button
              title="increment"
              containerStyle={{margin: 10}}
              onPress={() => {
                dispatch(increment());
              }}
            />
            <Button
              title="decrement"
              containerStyle={{margin: 10}}
              onPress={() => {
                dispatch(decrement());
              }}
            />
          </View>
          <View>
            <Button
              title="increment by Amount"
              containerStyle={{margin: 10}}
              onPress={() => {
                dispatch(incrementByAmount(10));
              }}
            />
          </View>
          <View>
            <Button
              title="Navigation"
              containerStyle={{margin: 10}}
              onPress={() => {
                navigation.navigate("SignIn")
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});



// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {Button, Input} from 'react-native-elements';
// import {useSelector, useDispatch} from 'react-redux';
// import LoginReducer, {setEmail} from './App/Redux/Reducers/LoginReducer';
// import Colors from './App/Themes/Colors';

// const Test = ({navigation}) => {
//   const email = useSelector((state) => state.email);
//   const dispatch = useDispatch();
//   // const emails ='';
//   return (
//     <View style={styles.container}>
//       <View
//         style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
//         <View>
//           <Text style={{fontSize: 40, fontWeight: 'bold', color: 'purple'}}>
//             {email}
//           </Text>
//         </View>
//         <Input
//                     placeholder="E-mail or Username"
//                     // onChangeText={(value)=> dispatch(setEmail(value))}
//                     style={{
//                       fontWeight: 'bold',
//                     }}
//                     inputContainerStyle={{
//                       width: '95%',
//                       alignSelf: 'center',
//                       marginBottom: -15,
//                       borderBottomWidth: 1,
//                       borderBottomColor: Colors.primary,
//                     }}
//                   />
//         <View>
//           {/* <View style={{flexDirection: 'row'}}>
//             <Button
//               title="increment"
//               containerStyle={{margin: 10}}
//               onPress={() => {
//                 dispatch(increment());
//               }}
//             />
//             <Button
//               title="decrement"
//               containerStyle={{margin: 10}}
//               onPress={() => {
//                 dispatch(decrement());
//               }}
//             />
//           </View> */}
//           <View>
//             <Button
//               title="increment by Amount"
//               containerStyle={{margin: 10}}
//               onPress={() => {
//                 dispatch(setEmail("world"));
//               }}
//             />
//           </View>
//           <View>
//             <Button
//               title="Navigation"
//               containerStyle={{margin: 10}}
//               onPress={() => {
//                 navigation.navigate("SignIn")
//               }}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Test;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//   },
// });


