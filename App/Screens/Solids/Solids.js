import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import {Input, Image, Button, Slider, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottleStyles from '../BottleScreen/BottleStyles';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import Shadow from '../../Components/Shadow';
import VerticalSlider from 'rn-vertical-slider';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  useCreateSolidFeedMutation,
  useGetSolidFeedQuery,
} from '../../Redux/Services/SolidFeed';
import navigationStrings from '../../Constants/navigationStrings';
import {useSelector} from 'react-redux';
import Loader from '../../Components/Loader';

const Solids = ({navigation}) => {
  const testData = [{name: 'mehtab'}, {name: 'Irfan'}, {name: 'Numan'}];
  var feedCategories = null;
  const {currentChild} = useSelector(state => state.children);

  const [createSolidFeed, responseInfo] = useCreateSolidFeedMutation();
  const showData = useGetSolidFeedQuery();
  // console.log(showData.currentData.data[0], "Data which is Showed in ShowData")
  if (showData.isSuccess == true) {
    feedCategories = showData.currentData.data;
    // console.log(feedCategories[1]);
  }
  // console.log(responseInfo);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [beginDate, setBeginDate] = useState('');
  var [beginTime, setBeginTime] = useState('');
  var [mode, setMode] = useState('date');
  var [time, setTime] = useState();

  const selectDate = () => {
    setMode((mode = 'date'));
    showDatePicker();
  };

  const selectTime = () => {
    setMode((mode = 'time'));
    showDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setTime(date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: Colors.background,
        }}>
        {/* LOADING INDICATOR */}
        {responseInfo.isLoading == true ? (
          <ActivityIndicator
            animating={true}
            size="large"
            style={{position: 'absolute', top: '45%', left: '45%'}}
          />
        ) : null}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          locale="en_GB" // Use "en_GB" here
          // date={new Date()}
          timePickerModeAndroid=""
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {/* DATE OF FEEDING CONTAINER / TOP CONTAINER */}
        <View
          style={{
            marginVertical: 20,
            marginHorizontal: metrics.baseMargin,
            height: '10%',
          }}>
          <Text
            style={{
              marginLeft: metrics.smallMargin,
              fontSize: Fonts.size.large,
            }}>
            Date of Feeding
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                showDatePicker();
              }}
              style={{flexDirection: 'row'}}>
              <Input
                placeholder={
                  time ? time.toString().substring(0, 25) : 'Date & Time'
                }
                editable={false}
                inputStyle={{fontSize: Fonts.size.medium}}
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={BottleStyles.caretDownImage}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* CENTER CONTAINER */}
        <View
          style={{
            height: '70%',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: Fonts.size.h6,
                fontWeight: 'bold',
                color: Colors.primary,
                alignSelf: 'center',
              }}>
              Solids Tracking & Food Journal
            </Text>
            <Text style={{fontSize: Fonts.size.regular}}>
              Start tracking solids by picking one of the{' '}
            </Text>
            <Text style={{fontSize: Fonts.size.regular}}>
              categories below and add reaction :
            </Text>
          </View>
          {
            feedCategories != null ?  <View style={{flexDirection: 'row'}}>
            <View style={{width: '75%', height: 260}}>
              <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                  {feedCategories.map((value, index) => {
                    // console.log(value.image);
                    return (
                      <View
                        key={index}
                        style={{
                          paddingVertical: metrics.smallPadding,
                          paddingHorizontal: metrics.regularPadding,
                          margin: 5,
                          width: 85,
                        }}>
                        {/* <Text>{item.item.name}</Text> */}
                        <Image
                          source={{uri: `${value.image}`}}
                          style={{width: 70, height: 70}}
                        />
                        <Text style={{textAlign: 'center'}} numberOfLines={2}>
                          {value.name}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                width: '25%',
                height: 260,
              }}>
              <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                  {feedCategories.map((value, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          paddingVertical: metrics.smallPadding,
                          paddingHorizontal: metrics.regularPadding,
                          margin: 5,
                          width: 85,
                        }}>
                        <Image
                          source={{uri: `${value.image}`}}
                          style={{width: 70, height: 70}}
                        />
                        <Text style={{textAlign: 'center'}} numberOfLines={2}>
                          {value.name}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>: <View><ActivityIndicator
        animating={true}
        size="large"
      /></View>
          }
         
          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text>Add a note and the pic of the meal</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View>
                  <Image
                    style={{height: 70, width: 70, tintColor: Colors.primary}}
                    source={require('../../assets/camera.png')}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.primary,
                    borderWidth: 1,
                    padding: metrics.smallPadding,
                    margin: metrics.smallMargin,
                    borderRadius: 5,
                  }}>
                  <View>
                    <Image
                      style={{height: 20, width: 20, tintColor: Colors.primary}}
                      source={require('../../assets/plus.png')}
                    />
                  </View>
                  <Text
                    style={{
                      color: Colors.primary,
                      fontSize: Fonts.size.regular,
                    }}>
                    Milestone
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* BUTTON CONTAINER / BOTTOM CONTAINER */}
        <View style={BottleStyles.bottomContainer}>
          <Button
            title={`Save`}
            type="solid"
            containerStyle={{width: '100%'}}
            buttonStyle={(Shadow.shadow, BottleStyles.buttonContainer)}
            titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
            onPress={async () => {
              if (time) {
                await createSolidFeed({
                  child_id: currentChild.id,
                  time: time,
                  reaction: 'hate',
                });
                navigation.popToTop();
              } else alert('data is missing!');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Solids;

const styles = StyleSheet.create({});
