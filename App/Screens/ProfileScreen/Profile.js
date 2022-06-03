import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {Avatar, Card} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';
import {useSelector} from 'react-redux';
import {useGetUserProfileQuery} from '../../Redux/Services/Profile';
import Shadow from '../../Components/Shadow';
import Skeleton from '../../Components/Skeleton';
import {getProfile} from '../../Services/Profile';

const Profle = () => {
  const {children} = useSelector(state => state.children);
  var [profileData, setProfileData] = useState(null);
  var [loading, setLoading] = useState(true);
  const token = useSelector(state => state?.login?.token);
  console.log(token, 'token is getting ...');
  useEffect(() => {
    getProfile(token, success, fail);
  }, []);

  const success = data => {
    console.log(data, 'success');
    setProfileData(data?.data);
    setLoading(false);
  };

  const fail = data => {
    console.log(data, 'fail');
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      {loading === true ? (
        <Skeleton />
      ) : profileData !== null ? (
        <View style={{flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: metrics.doubleBasePadding,
            }}>
            <Avatar
              rounded
              size="large"
              avatarStyle={{tintColor: Colors.primary}}
              containerStyle={{
                backgroundColor: 'white',
                padding: metrics.basePadding,
              }}
              source={require('../../assets/user.png')}
            />
          </View>
          <View
            style={{
              paddingVertical: metrics.smallPadding,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: Fonts.size.h5,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {`${profileData.first_name} ${profileData.last_name}`}
            </Text>
          </View>
          <View
            style={{
              paddingVertical: metrics.smallPadding,
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: metrics.doubleBasePadding,
            }}>
            <Text style={{fontSize: Fonts.size.medium, color: 'black'}}>
              {profileData.email}
            </Text>
          </View>
          <View
            style={{
              paddingBottom: metrics.basePadding,
            }}>
            <View style={{paddingHorizontal: metrics.basePadding}}>
              <Text
                style={{
                  fontSize: Fonts.size.h6,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Children List :
              </Text>
            </View>
          </View>
          <View>
            <FlatList
              data={children.data}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={item => {
                return (
                  <TouchableOpacity>
                    <Card
                      key={item.user_id}
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
                        Gender : {item.item.gender}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: Fonts.size.medium,
                        }}>
                        DOB :{' '}
                        {item.item.date_of_birth.toString().substring(0, 10)}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: Fonts.size.medium,
                        }}>
                        Relationship : {item.item.relationship}
                      </Text>
                    </Card>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      ) : profileData == null ? (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{fontWeight: '600', Fonts: 18, color: 'black'}}>
            No item fiund !
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Profle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  textContainer: {
    fontSize: Fonts.size.h5,
    color: Colors.primary,
    paddingHorizontal: 10,
  },
});
