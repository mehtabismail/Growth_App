import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../Themes/Colors';
import {Card, Image} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import {useGetArticlesQuery} from '../../Redux/Services/Resources';
import Loader from '../../Components/Loader';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {getResources} from '../../Services/Resources';
import Token from '../../Redux/Services/Token';
import {useSelector} from 'react-redux';
export const SKELETON_SPEED = 1000;
export const SKELETON_BG = '#D9D9D9';
export const SKELETON_HIGHLIGHT = '#e7e7e7';
export const MAX_RATING_DEVIATION = 200;
const {width, height} = Dimensions.get('window');

// SHIMMER EFFECT / SKELETON SCREEN
const Skeleton = () => {
  const reuseComp = () => {
    return (
      <View style={{marginTop: 40, marginBottom: 10}}>
        <View style={{}}>
          <SkeletonPlaceholder
            speed={SKELETON_SPEED}
            backgroundColor={SKELETON_BG}
            highlightColor={SKELETON_HIGHLIGHT}>
            <View style={{justifyContent: 'center'}}>
              <View
                style={{
                  marginLeft: 20,
                  width: '90%',
                  height: 50,
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
      {reuseComp()}
      {reuseComp()}
    </View>
  );
};

const Resources = () => {
  var [resourceData, setResourceData] = useState(null);
  var [loading, setLoading] = useState(true);
  const token = useSelector(state => state?.login?.token);
  console.log(token, 'token is getting ...');
  useEffect(() => {
    getResources(token, success, fail);
  }, []);

  const success = data => {
    console.log(data, 'success');
    setResourceData(data?.data);
    setLoading(false);
  };

  const fail = data => {
    console.log(data, 'fail');
    setLoading(false);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainContainer}>
        {loading === true ? (
          <Skeleton />
        ) : resourceData.length !== 0 ? (
          <ScrollView>
            <View style={{marginBottom: metrics.doubleBaseMargin}}>
              {resourceData !== null
                ? resourceData.map(item => {
                    return (
                      <TouchableOpacity key={item.id}>
                        <Card
                          containerStyle={[{borderRadius: 10}, Shadow.shadow]}>
                          <Card.Title>{item.name}</Card.Title>
                          <Text style={{marginBottom: metrics.smallMargin}}>
                            {item.body}
                          </Text>
                          <Text>{item.category.created_at.toString()}</Text>
                        </Card>
                      </TouchableOpacity>
                    );
                  })
                : null}
            </View>
          </ScrollView>
        ) : (
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text style={{fontWeight: '600', Fonts: 18, color: 'black'}}>
              No item fiund !
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Resources;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    // backgroundColor:"red"
  },
  skeltonImageView: {
    width: width / 5,
    margin: 8,
    borderWidth: 0,
    borderRadius: 50,
    height: height / 11,
  },
  skeltonMainView: {
    width: width / 1.4,
    margin: 8,
    borderWidth: 0,
    height: height / 16,
    elevation: 5,
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
    borderRadius: 5,
    // height: globals.screenHeight * 0.24,
  },
  skeltonChangePasswordView: {
    width: '96%',
    margin: 8,
    borderWidth: 0,
    borderRadius: 5,
    height: height * 0.13,
    elevation: 5,
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
  },
});
