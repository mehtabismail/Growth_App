import React, {useState, useEffect, useLayoutEffect} from 'react';
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

/* PROFILE CONTAINER */
const ProfileContainer = (navigation, profileName) => {
  const [modalVisible, setModalVisible] = useState(false);

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
              {/* {profileName == '' ? 'loading' : profileName} */}
              {profileName}
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
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Existing baby if any?</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setModalVisible(!modalVisible),
                        navigation.navigate(navigationStrings.ADDCHILD);
                    }}>
                    <Text style={styles.textStyle}>Add new baby</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={{marginTop: -10}}
              onPress={() => setModalVisible(true)}>
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
const HomeAnalysis = navigation => {
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
              Breastfead
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Shadow.shadow, styles.feedButtons]}>
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
          <TouchableOpacity style={[Shadow.shadow, styles.otherButtons]}>
            <Text style={{fontSize: Fonts.size.regular, fontWeight: '600'}}>
              Diaper
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

// EXPORT FUNCTION / MAIN FUNCTION
const ProfilePage = ({navigation}) => {
  var [profileName, setProfileName] = useState('');
  let dataGot;
  // const [dataGot, setDataGot] = useState();
  // const dispatch = useDispatch();
  // const {userApiData} = useSelector(state => state.userData);
  // USEFFECT / COMPONENT-DID-MOUNT

  useLayoutEffect(() => {
    async function fetchUserData() {
      let auth_token = await AsyncStorage.getItem('session_token');
      console.log(`token : ${auth_token}`)
      dataGot = await fetch('http://grow-backend.herokuapp.com/api/profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth_token}`,
        },
      })
        .then(async response => response.json())
        .catch(error => {
          alert(error);
        });

      // console.log(dataGot);
      setProfileName((profileName = dataGot.data.first_name));
    }

    fetchUserData();

    [];
  });



  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.container}>
        {/* PROFILE CONTAINER */}
        {ProfileContainer(navigation, profileName)}

        {/* HOME & ANALYSIS PART */}
        {HomeAnalysis(navigation)}
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
    flex: 1,
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









  // useEffect(() => {
  //   // USER DATA API FETCH METHOD
  //   async function fetchUserData() {
  //     var err = false;
  //     return await fetch('http://grow-backend.herokuapp.com/api/profile', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer 120|IXMyAylsLKvxHiJgPulx7L2ffeFRIFVO2ZwJs7Vw',
  //       },
  //     })
  //       .then(async response =>
  //         response.status === 200
  //           ? response.json()
  //           : (err = true && response.json()),
  //       )
  //       .then(async json => {
  //         if (json.message) {
  //           console.log(json);
  //         } else {
  //           console.log(json);
  //           setProfileName((profileName = json.data.first_name));
  //           console.log(`name : ${profileName}`);
  //         }
  //       })
  //       .catch(error => {
  //         alert(error);
  //       });
  //   }

  //   return () => {
  //     fetchUserData();
  //   };
  // }, []);