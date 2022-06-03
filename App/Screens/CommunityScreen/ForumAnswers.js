import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Token from '../../Redux/Services/Token';
import {Image} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Loader from '../../Components/Loader';
import navigationStrings from '../../Constants/navigationStrings';
import { BaseUrl } from '../../Services/BaseUrl';

const ForumAnswers = data => {
  const newData = data.route.params.data;
  console.log(data.route.params.data);
  var [count, setCount] = useState(0);
  var [answers, setAnswers] = useState(null);
  var [newAnswers, setNewAnswers] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchAnswersList = async () => {
    return await fetch(
      `${BaseUrl}/questions/${newData.id}/answers`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Token.auth_token._W}`,
        },
      },
    )
      .then(async response => response.json())
      .then(async json => {
        console.log(json.data);
        setAnswers(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const createAnswer = async () => {
    return await fetch(
      `${BaseUrl}/questions/${newData.id}/answers`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Token.auth_token._W}`,
        },
        body: JSON.stringify({answer: newAnswers})
      },
    )
      .then(async response => response.json())
      .then(async json => {
        console.log(json.data);
        setCount(count+1)
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAnswersList();
  }, [count]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {answers === null ? (
          <Loader />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              paddingBottom: metrics.smallPadding,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: Fonts.size.h5,
                  padding: metrics.regularPadding,
                }}>
                {'Q.' + newData.question}
              </Text>
            </View>
            <View style={{height: '80%'}}>
              <ScrollView>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.centeredView}>
                    <View style={styles.modalView}>
                      {/* <View>
                      <Text style={styles.modalText}>Select baby if any?</Text>
                    </View> */}
                      <View
                        style={{
                          width: '100%',
                          marginBottom: metrics.baseMargin,
                        }}>
                        <TextInput
                          style={{
                            width: '100%',
                            borderBottomColor: Colors.primary,
                            borderBottomWidth: 1,
                          }}
                          placeholder="Enter your answer"
                          value={newAnswers}
                          onChangeText={(value)=>setNewAnswers(value)}
                        />
                      </View>
                      {/* <View style={{flex: 1}}>
                      <Text>Add New Answer</Text>
                    </View> */}
                      <View style={{marginTop: metrics.baseMargin}}>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => {
                            setModalVisible(!modalVisible);
                            if (newAnswers != null) {
                              createAnswer();
                            }
                          }}>
                          <Text style={styles.textStyle}>Add new answer</Text>
                        </Pressable>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Modal>
                <View>
                  {answers.data.map(value => {
                    return (
                      <View
                        key={value.id}
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
                            alignSelf: 'center',
                          }}>
                          {value.answer}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  flexDirection: 'row',
                  padding: metrics.basePadding,
                  backgroundColor: Colors.primary,
                  width: '80%',
                  borderRadius: 50,
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
                <View style={{paddingRight: metrics.regularPadding}}>
                  <Image
                    style={{height: 30, width: 32, tintColor: Colors.secondary}}
                    source={require('../../assets/plus.png')}
                  />
                </View>
                <View style={{paddingLeft: metrics.regularPadding}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: Fonts.size.h6,
                      color: Colors.secondary,
                    }}>
                    Add New Answer
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ForumAnswers;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: Colors.primary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
