import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Card} from 'react-native-elements';
import Fonts from '../../Themes/Fonts';

class Testcounter extends Component {
  render() {
    var testData = this.props.posts.posts;

    return (
      <View>
        <View>
          <Text>Class Component</Text>
        </View>
        <View>
          {testData.map((item, key) => {
            return (
              <Card key={key}>
                <TouchableOpacity>
                  <Text
                    style={{fontSize: Fonts.size.large, fontWeight: 'bold'}}>
                    {item.id+"."+item.description}
                  </Text>
                </TouchableOpacity>
              </Card>
            );
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.Posts_Reducer,
  };
};

export default connect(mapStateToProps)(Testcounter);

const styles = StyleSheet.create({});
