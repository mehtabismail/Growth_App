import React, {useState, useLayoutEffect, useEffect} from 'react';
// IMPORT FROM REACT NATIVE
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Modal,
  Alert,
  FlatList,
} from 'react-native';
import Shadow from '../../Components/Shadow';
// IMPORT FROM REACT-REDUX
import {useSelector, useDispatch} from 'react-redux';
// IMPORT FROM REACT-NATIVE-ELEMENTS
import {Avatar, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
// IMPORT FROM GLOBAL SET CONSTANTS
import navigationStrings from '../../Constants/navigationStrings';
// IMPORT FROM THEMES DATA
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';
// IMPORT FROM REDUX REDUCERS
import UserDataReducer, {userData} from '../../Redux/Reducers/UserDataReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfilePage = ({navigation}) => {
  const [profileName, setProfileName] = useState('');
  const [babiesList, setBabiesList] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(0);

  const fetchBabiesList = async () => {
    console.log('babies list fetched : ');
    let auth_token = await AsyncStorage.getItem('session_token');
    let babyData = await fetch(
      'http://grow-backend.herokuapp.com/api/profile/children',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth_token}`,
        },
      },
    )
      .then(async response => response.json())
      .catch(error => {
        alert(error);
      });

    const variable = babyData.data[0].name;
    console.log(variable);
    // await this.setState({babiesList: babyData.data});
    await setBabiesList(babyData.data);
    // await this.setState({profileName: this.state.babiesList[0].name});
    await setProfileName(variable);
  };

  useEffect(() => {
    fetchBabiesList();
  }, []);

  /* PROFILE CONTAINER */
  ProfileContainer = () => {
    return (
      <View style={styles.profileContainer}>
        {/* PROFILE IMAGE AVATAR */}
        <View style={{marginRight: metrics.smallMargin}}>
          <Avatar
            rounded
            size="large"
            source={require('../../assets/google.png')}
          />
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{flexDirection: 'row'}}>
          {/* PROFILE NAME & MONTH */}
          <View style={{flexDirection: 'column'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.profileNameTextStyle}>
                {profileName == '' ? 'loading' : profileName}
                {/* {profileName} */}
              </Text>
            </View>
            <View style={{margin: metrics.smallMargin}}>
              <Text style={{fontSize: Fonts.size.medium}}>3 Months</Text>
            </View>
          </View>
          {/* DROPDOWN ICON */}
          <View style={{justifyContent: 'center', padding: 5}}>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  // this.setState({modalVisible: !this.state.modalVisible});
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View>
                      <Text style={styles.modalText}>Select baby if any?</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <FlatList
                        showsVerticalScrollIndicator={false}
                        data={babiesList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={item => {
                          return (
                            <View>
                              <TouchableOpacity
                                style={{
                                  backgroundColor: Colors.tertiary,
                                  borderRadius: 10,
                                  paddingHorizontal: metrics.doubleBasePadding,
                                  paddingVertical: metrics.basePadding,
                                  marginBottom: metrics.regularMargin,
                                  shadowColor: '#000',
                                  shadowOffset: {
                                    width: 0,
                                    height: 2,
                                  },
                                  shadowOpacity: 0.25,
                                  shadowRadius: 4,
                                  elevation: 5,
                                }}
                                onPress={() => {
                                  // this.setState({
                                  //   profileName: item.item.name,
                                  //   modalVisible: false,
                                  // });
                                  setProfileName(item.item.name);
                                  setModalVisible(false);
                                }}>
                                <Text
                                  style={{
                                    fontSize: Fonts.size.h6,
                                    fontWeight: 'bold',
                                  }}>
                                  {item.item.name}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
                    <View style={{marginTop: metrics.baseMargin}}>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                          // this.setState({
                          //   modalVisible: !this.state.modalVisible,
                          // }),
                          setModalVisible(!modalVisible);
                          navigation.navigate(navigationStrings.ADDCHILD)
                        }}>
                        <Text style={styles.textStyle}>Add new baby</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={{marginTop: -10}}
                onPress={() =>
                  // this.setState({modalVisible: true})
                  setModalVisible(true)
                }>
                <Image
                  style={styles.caretDownImage}
                  source={require('../../assets/caret-down.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  /* HOME & ANALYSIS PART */
  HomeAnalysis = () => {
    return (
      <View style={styles.flexContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.homeAndAnalysisContainer}>
            <Text style={styles.homeAndAnalysisText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeAndAnalysisContainer}>
            <Text style={styles.homeAndAnalysisText}>Analysis</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* FEED PART*/}
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.primary,
                marginVertical: metrics.smallMargin,
              }}>
              <Text
                style={{
                  paddingVertical: metrics.smallPadding,
                  paddingHorizontal: metrics.basePadding,
                  fontSize: Fonts.size.regular,
                  fontWeight: 'bold',
                }}>
                Feed
              </Text>
            </View>
            <TouchableOpacity
              style={[Shadow.shadow, styles.feedButtons]}
              onPress={() => navigation.navigate(navigationStrings.BOTTLE)}>
              <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                Bottle
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Shadow.shadow, styles.feedButtons]}
              onPress={() => navigation.navigate(navigationStrings.BREAST)}>
              <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                Breastfeed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Shadow.shadow, styles.feedButtons]}
              onPress={() => navigation.navigate(navigationStrings.SOLIDS)}>
              <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                Solids
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Shadow.shadow, styles.feedButtons]}
              onPress={() => navigation.navigate(navigationStrings.PUMPING)}>
              <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                Pumping
              </Text>
            </TouchableOpacity>
          </View>
          {/* OTHERS PART*/}
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingBottom: metrics.doubleBasePadding,
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.primary,
                marginVertical: metrics.smallMargin,
              }}>
              <Text
                style={{
                  paddingVertical: metrics.smallPadding,
                  paddingHorizontal: metrics.basePadding,
                  fontSize: Fonts.size.regular,
                  fontWeight: 'bold',
                }}>
                Others
              </Text>
            </View>
            <TouchableOpacity
              style={[Shadow.shadow, styles.otherButtons]}
              onPress={() => navigation.navigate(navigationStrings.SLEEPING)}>
              <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                Sleeping
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[Shadow.shadow, styles.otherButtons]}>
              <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
                Diaper
              </Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    );
  };
  // MAIN SCREEN RENDERING
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.container}>
        {/* PROFILE CONTAINER */}
        {ProfileContainer()}

        {/* HOME & ANALYSIS PART */}
        {HomeAnalysis()}
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flexContainer: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileNameTextStyle: {fontSize: Fonts.size.h5, fontWeight: 'bold'},
  caretDownImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  homeAndAnalysisText: {
    fontSize: Fonts.size.input,
    fontWeight: 'bold',
  },
  homeAndAnalysisContainer: {
    borderBottomColor: Colors.primary,
    width: '30%',
    borderBottomWidth: 2,
    padding: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedTextStyle: {
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.basePadding,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
  },
  feedTextContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    marginVertical: metrics.smallMargin,
  },
  feedButtons: {
    backgroundColor: Colors.quaternary,
    width: '80%',
    paddingVertical: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: metrics.smallMargin,
  },
  otherButtons: {
    backgroundColor: Colors.secondary,
    width: '80%',
    paddingVertical: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: metrics.smallMargin,
  },

  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
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
    backgroundColor: '#2196F3',
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
