import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../Themes/Colors';
import {Card, Image} from 'react-native-elements';
import Shadow from '../../Components/Shadow';
import metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';
import {useGetArticlesQuery} from '../../Redux/Services/Resources';
import Loader from '../../Components/Loader';

const Resources = () => {
  const responseInfo = useGetArticlesQuery();
  console.log(responseInfo)
  return (
    <View style={{flex: 1}}>
      {responseInfo.isLoading === true ? <Loader /> : null}
      {responseInfo.isSuccess === true ? <View style={styles.mainContainer}>
          <ScrollView>
            <View style={{marginBottom: metrics.doubleBaseMargin}}>
              {responseInfo.data.data.map(item => 
              {
                return (
                  <TouchableOpacity key={item.id}>
                    <Card
                      containerStyle={[{borderRadius: 10}, Shadow.shadow]}>
                      <Card.Title>{item.name}</Card.Title>
                      <Text style={{marginBottom: metrics.smallMargin}}>{item.body}</Text>
                      <Text>
                        {item.created_at.toString()}
                      </Text>
                    </Card>
                  </TouchableOpacity>
                );
              }
              )}
            </View>
          </ScrollView>
        </View>: null}
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
});
