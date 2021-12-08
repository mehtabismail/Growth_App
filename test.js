import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import CounterSlice, {decrement, increment, incrementByAmount} from './App/Redux/Reducers/CounterSlice';

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


