import React from 'react';
import {StyleSheet, Text, View, } from 'react-native';
import {Header, Icon} from 'react-native-elements';

const ArrowIcon = () => {
  return <Icon name="arrow-back-outline" type="ionicon" color="#f5d745" />;
};

const CustomHeader = () => {
  return (
      <View>
        <Header
          placement="left"
          statusBarProps={{barStyle: 'light-content'}}
          barStyle="light-content"
          leftComponent={
            <ArrowIcon />
          }
          centerComponent={{
            text: 'Sleeping',
            style: {color: '#f5d745', fontSize: 20, fontWeight: 'bold'},
          }}
          containerStyle={{
            backgroundColor: '#63815c',
            justifyContent: 'space-around',
          }}
        />
      </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});



