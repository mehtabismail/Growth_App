import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Card, Image} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import Colors from '../../Themes/Colors';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import navigationStrings from '../../Constants/navigationStrings';
import {useGetForumCategoryQuery} from '../../Redux/Services/Community';
import Loader from '../../Components/Loader';
import Token from '../../Redux/Services/Token';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {BaseUrl} from '../../Services/BaseUrl';
import {useSelector} from 'react-redux';
import {getCommunityForum} from '../../Services/CommunityForum';
export const SKELETON_SPEED = 1000;
export const SKELETON_BG = '#D9D9D9';
export const SKELETON_HIGHLIGHT = '#e7e7e7';
export const MAX_RATING_DEVIATION = 200;
const {width, height} = Dimensions.get('window');

const CommunityForum = ({navigation}) => {
  var [forumdata, setForumdata] = useState(null);
  var [newQuestion, setNewQuestion] = useState(null);
  var [count, setCount] = useState(0);
  var [forumId, setForumId] = useState(1);
  var [loading, setLoading] = useState(true);
  var [communityForumData, setCommunityFormData] = useState(null);

  const token = useSelector(state => state?.login?.token);
  const [modalVisible, setModalVisible] = useState(false);
  const responseInfo = useGetForumCategoryQuery();

  // console.log(responseInfo);

  const fetchQuestions = async () => {
    setLoading(true);
    return await fetch(`${BaseUrl}/forum/${forumId}/questions`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token.auth_token._W}`,
      },
    })
      .then(async response => response.json())
      .then(async json => {
        console.log('after pressing : ', json);
        setForumdata(json);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  };

  const createQuestion = async () => {
    setLoading(true);
    return await fetch(`${BaseUrl}/forum/${forumId}/questions`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token.auth_token._W}`,
      },
      body: JSON.stringify({question: newQuestion}),
    })
      .then(async response => response.json())
      .then(async json => {
        console.log(json, 'success');
        setLoading(false);
        setCount(count + 1);
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  };

  const success = data => {
    console.log(data, 'success in fetching data');
    setCommunityFormData(data?.data);
    setLoading(false);
  };

  const fail = data => {
    console.log(data, 'fail');
    setLoading(false);
  };

  useEffect(() => {
    getCommunityForum(token, success, fail);
    fetchQuestions();
    console.log('rendered + updated');
  }, [count]);

  return (
    <View style={{flex: 1}}>
      {loading === true ? (
        <Loader />
      ) : communityForumData.length !== null &&
        communityForumData.length !== 0 ? (
        <View style={styles.container}>
          <View>
            <FlatList
              data={responseInfo.data.data}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={item => {
                if (item.item.id <= 15) {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setForumId(item.item.id);
                        setCount(count + 1);
                      }}>
                      <Card
                        key={item.index}
                        containerStyle={[
                          {
                            marginBottom: metrics.baseMargin,
                            borderRadius: metrics.regularMargin,
                          },
                          Shadow.shadow,
                        ]}>
                        <Card.Title style={{fontSize: Fonts.size.h6}}>
                          {item.item.name}
                        </Card.Title>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: Fonts.size.medium,
                          }}>
                          ID : {item.item.id}
                        </Text>

                        <Text
                          style={{
                            color: 'black',
                            fontSize: Fonts.size.medium,
                          }}></Text>
                      </Card>
                    </TouchableOpacity>
                  );
                }
              }}
            />
          </View>
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
                      placeholder="Enter your Question"
                      value={newQuestion}
                      onChangeText={value => setNewQuestion(value)}
                    />
                  </View>
                  <View style={{marginTop: metrics.baseMargin}}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setNewQuestion(null);
                        if (newQuestion != null && forumdata != null) {
                          createQuestion();
                        }
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setModalVisible(!modalVisible);
                          setNewQuestion(null);
                          if (newQuestion != null && forumdata != null) {
                            createQuestion();
                          }
                        }}>
                        <Text style={styles.textStyle}>Add new Question</Text>
                      </TouchableOpacity>
                    </Pressable>
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>
            <View style={{padding: metrics.regularPadding}}>
              <Text style={{fontWeight: 'bold', fontSize: Fonts.size.h6}}>
                Questions
              </Text>
            </View>
            {loading == true ? (
              <View>
                <ActivityIndicator animating={true} size="large" />
              </View>
            ) : forumdata === null ? (
              <View style={{padding: metrics.basePadding}}>
                <Text>{'-->  Please Select Forum '}</Text>
              </View>
            ) : forumdata.data.length === 0 ? (
              <View style={{padding: metrics.basePadding}}>
                <Text>{'This Forum has no Question '}</Text>
              </View>
            ) : (
              <View>
                {forumdata.data.map((item, key) => {
                  return (
                    <TouchableOpacity
                      key={key}
                      onPress={() => {
                        navigation.navigate(navigationStrings.FORUM_ANSWERS, {
                          data: item,
                        });
                      }}>
                      <Card
                        key={item.index}
                        containerStyle={[
                          {
                            marginBottom: metrics.baseMargin,
                            borderRadius: metrics.regularMargin,
                          },
                        ]}>
                        <Card.Title style={{fontSize: Fonts.size.h6}}>
                          {item.question}
                        </Card.Title>
                      </Card>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </ScrollView>
          <View
            style={{alignItems: 'flex-end', padding: metrics.regularPadding}}>
            <TouchableOpacity
              onPress={() => {
                if (forumId != null) {
                  setModalVisible(true);
                } else {
                  alert('Please select a Forum !');
                }
              }}
              style={{
                backgroundColor: 'white',
                height: 50,
                width: 50,
                borderRadius: 25,

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
          </View>
        </View>
      ) : communityForumData.length === 0 ? (
        <View>
          <Text>Item not found</Text>
        </View>
      ) : null}
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

{
  /* <View style={{paddingBottom: metrics.basePadding}}>
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
        </View> */
}

// const questions = [
//   {
//     question: "What's your Name?",
//     answers: [
//       'My name is Mehtab Ismail',
//       'Hi, i am Irfan',
//       'its me Zia',
//       'Hello my name is Yasir',
//     ],
//   },
//   {
//     question: "What's your friends Name?",
//     answers: ['mehtab', 'irfan', 'zia', 'yasir'],
//   },
//   {
//     question: "What's your alternate name?",
//     answers: ['mehtab', 'irfan', 'zia', 'yasir'],
//   },
// ];

{
  /* DOB : {item.item.created_at.toString()} */
}
{
  /* {console.log(item, 'item bro')} */
}
