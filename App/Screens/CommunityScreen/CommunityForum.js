import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Card, Image} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import Colors from '../../Themes/Colors';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import navigationStrings from '../../Constants/navigationStrings';

const CommunityForum = ({navigation}) => {
  const questions = [
    {
      question: "What's your Name?",
      answers: [
        'My name is Mehtab Ismail',
        'Hi, i am Irfan',
        'its me Zia',
        'Hello my name is Yasir',
      ],
    },
    {
      question: "What's your friends Name?",
      answers: ['mehtab', 'irfan', 'zia', 'yasir'],
    },
    {
      question: "What's your alternate name?",
      answers: ['mehtab', 'irfan', 'zia', 'yasir'],
    },
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          height: 50,
          width: 50,
          borderRadius: 25,
          position: 'absolute',
          bottom: metrics.regularMargin,
          right: metrics.regularMargin,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 30, width: 32, tintColor: Colors.primary}}
          source={require('../../assets/plus.png')}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={{paddingBottom: metrics.basePadding}}>
          {questions.map((item, key) => {
            return (
              <Card key={key} containerStyle={[styles.cardContainer, Shadow]}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      navigationStrings.FORUM_ANSWERS,
                      item.answers,
                    )
                  }>
                  <Text
                    style={{fontSize: Fonts.size.large, fontWeight: 'bold'}}>
                    {'Q.' + item.question}
                  </Text>
                </TouchableOpacity>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CommunityForum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
