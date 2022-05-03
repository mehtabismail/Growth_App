import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import React, {useState} from 'react';
import {Card, Image} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import Colors from '../../Themes/Colors';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import navigationStrings from '../../Constants/navigationStrings';
import {useGetForumCategoryQuery} from '../../Redux/Services/Community';
import Loader from '../../Components/Loader';
import {ForumApi, useGetForumQuery} from '../../Redux/Services/Forum';
import Token from '../../Redux/Services/Token';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
export const SKELETON_SPEED = 1000;
export const SKELETON_BG = '#D9D9D9';
export const SKELETON_HIGHLIGHT = '#e7e7e7';
export const MAX_RATING_DEVIATION = 200;
const {width, height} = Dimensions.get('window');

// SHIMMER EFFECT / SKELETON SCREEN
const Skeleton = () => {
  const reuseComp = () => {
    return (
      <View style={{marginTop: 40, marginBottom:10}}>
        <View>
        <SkeletonPlaceholder
          speed={SKELETON_SPEED}
          backgroundColor={SKELETON_BG}
          highlightColor={SKELETON_HIGHLIGHT}>
          <View style={{justifyContent: 'center',}}>
            <View
              style={{
                marginLeft: 20,
                width: '90%',
                height: 30,
                borderRadius: 4,
              }}
            />
          </View>
        </SkeletonPlaceholder>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {reuseComp()}
      {reuseComp()}
      {reuseComp()}
    </View>
  );
};


const CommunityForum = ({navigation}) => {
  var [forumdata, setForumdata] = useState(null);

  const responseInfo = useGetForumCategoryQuery();

  console.log(responseInfo);

  const ForumApi = async forum_id => {
    return await fetch(
      `http://grow-backend.herokuapp.com/api/forum/${forum_id}/questions`,
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
        console.log("after pressing : ",json);
        setForumdata(json);
      })
      .catch(error => {
        // setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={{flex: 1}}>
      {responseInfo.isLoading === true ? <Loader /> : null}
      {responseInfo.isSuccess === true ? (
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
            <View >
              <FlatList
                data={responseInfo.data.data}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={item => {
                  return (
                    <TouchableOpacity onPress={() => ForumApi(item.item.id)}>
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
                          }}>
                          {/* DOB : {item.item.created_at.toString()} */}{console.log(item, "item bro")}
                        </Text>
                      </Card>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View style={{padding: metrics.basePadding}}>
              <Text style={{fontWeight:"bold", fontSize: Fonts.size.h6}}>
                Questions
              </Text>
            </View>
            {forumdata === null ? <View style={{padding:metrics.basePadding}}><Text>Select Forum </Text></View> : (
              <View>
              {forumdata.data.map((item, key)=>{
                return (
                      <TouchableOpacity key={key} onPress={() => {navigation.navigate(navigationStrings.FORUM_ANSWERS, {data: item})}}>
                        <Card
                          key={item.index}
                          containerStyle={[
                            {
                              marginBottom: metrics.baseMargin,
                              borderRadius: metrics.regularMargin,
                              
                            },
                            // Shadow.shadow,
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
