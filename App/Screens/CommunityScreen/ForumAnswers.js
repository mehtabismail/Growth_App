import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';

const ForumAnswers = item => {
  var [answers, setAnswers] = useState(item.route.params);
  return (
    <View>
      {answers.map((value, key) => {
        return (
          <View
            key={key}
            style={{
              flexDirection: 'row',
              paddingVertical: metrics.smallPadding,
            }}>
            <Text
              style={{
                paddingHorizontal: metrics.smallPadding,
                fontSize: Fonts.size.h3,
                fontWeight: 'bold',
              }}>
              {'\u2022'}
            </Text>
            <Text
              style={{
                fontSize: Fonts.size.input,
                fontWeight: '500',
                alignSelf:"center",
              }}>
              {value}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ForumAnswers;

const styles = StyleSheet.create({});
