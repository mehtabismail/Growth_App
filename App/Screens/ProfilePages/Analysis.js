import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import metrics from '../../Themes/Metrics';
import Colors from '../../Themes/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../Themes/Fonts';
import Shadow from '../../Components/Shadow';
import {PieChart} from 'react-native-chart-kit';
// import pie to make pie chart
import Pie from 'react-native-pie';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Analysis = () => {
  const data = [
    {
      percentage: 10,
      color: '#C70039',
      name: 'Grains'
    },
    {
      percentage: 20,
      color: '#44CD40',
      name: 'Fruits'
    },
    {
      percentage: 30,
      color: '#404FCD',
      name: 'Puree'
    },
    {
      percentage: 40,
      color: '#EBD22F',
      name: 'Veg'
    },
  ];

  return (
    <View
      style={{
        height: '60%',
        marginHorizontal: metrics.doubleBaseMargin,
        marginTop: metrics.doubleBaseMargin,
      }}>
      <View
        style={[
          {flex: 1, borderRadius: 10, borderWidth: 1, borderColor: 'gray'},
          Shadow.shadow,
        ]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '15%',
            paddingHorizontal: metrics.basePadding,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          colors={Colors.gradient_chart}>
          <View>
            <Text style={{fontSize: Fonts.size.medium, fontWeight: '600'}}>
              Solid
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{tintColor: 'white', width: 25, height: 25}}
              source={require('../../assets/caret-down.png')}
            />
          </TouchableOpacity>
        </LinearGradient>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: metrics.basePadding,
              paddingHorizontal: metrics.basePadding,
            }}>
            <Pie
              radius={80}
              innerRadius={50}
              sections={data}
              strokeCap={'butt'}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -110,
              }}>
              <Text style={{fontSize: Fonts.size.medium, fontWeight: 'bold'}}>
                84 Times
              </Text>
              <Text style={{fontSize: Fonts.size.medium, fontWeight: 'bold'}}>
                Total
              </Text>
            </View>
          </View>
          <View style={{marginTop:metrics.baseMargin}}>
            <FlatList
              data={data}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={item => {
                return <View key={item.index} style={{paddingHorizontal:10, flexDirection:"row"}} >
                    <View style={{width:20, height:20, backgroundColor: item.item.color}}></View>
                    <Text style={{paddingLeft:metrics.smallPadding}}>{item.item.name}</Text>
                </View>;
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Analysis;

const styles = StyleSheet.create({});
