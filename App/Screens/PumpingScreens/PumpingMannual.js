import React from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {Button, Icon, Input, Text, Image} from 'react-native-elements';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';

const PumpingMannual = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <View style={styles.beginDateContainer}>
            <View>
              <Text>Begin Date</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', flexDirection: 'row'}}>
                  <Input
                    placeholder="Today"
                    rightIcon={
                      <TouchableOpacity>
                        <Image
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            alignSelf: 'flex-start',
                            marginLeft: 20,
                          }}
                          source={require('../../assets/caret-down.png')}
                        />
                      </TouchableOpacity>
                    }
                  />
                </View>
                <View style={{width: '50%'}}>
                  <Input
                    placeholder="Begin Time"
                    rightIcon={
                      <TouchableOpacity>
                        <Image
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            alignSelf: 'flex-start',
                            marginLeft: 20,
                          }}
                          source={require('../../assets/caret-down.png')}
                        />
                      </TouchableOpacity>
                    }
                  />
                </View>
              </View>
              <View>
                <Input
                  placeholder="Duration (Optional)"
                  rightIcon={
                    <TouchableOpacity>
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          resizeMode: 'contain',
                          alignSelf: 'flex-start',
                          marginLeft: 20,
                        }}
                        source={require('../../assets/caret-down.png')}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
            </View>
            <TouchableOpacity style={{margin: 10, flexDirection: 'row'}}>
              <View style={{marginRight: 5}}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    alignSelf: 'flex-start',
                    tintColor: Colors.primary,
                  }}
                  source={require('../../assets/stopwatch.png')}
                />
              </View>
              <View style={{marginTop: 2}}>
                <Text style={styles.textContainer}>or Start Time</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text>Side(s) & Amount (optional)</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                icon={
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      alignSelf: 'flex-start',
                      tintColor: Colors.primary,
                      marginRight: metrics.baseMargin,
                    }}
                    source={require('../../assets/square.png')}
                  />
                }
                title="Left"
                type="outline"
                titleStyle={{
                  fontSize: 20,
                  color: 'black',
                }}
                buttonStyle={{
                  borderColor: Colors.primary,
                  borderWidth: 2,
                  width: 120,
                  height: 50,
                  borderRadius: 15,
                }}
              />
              <Button
                icon={
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      alignSelf: 'flex-start',
                      tintColor: Colors.primary,
                      marginRight: metrics.baseMargin,
                    }}
                    source={require('../../assets/square.png')}
                  />
                }
                title="Right"
                type="outline"
                titleStyle={{
                  fontSize: 20,
                  color: 'black',
                }}
                buttonStyle={{
                  borderColor: Colors.primary,
                  borderWidth: 2,
                  width: 120,
                  height: 50,
                  borderRadius: 15,
                }}
              />
            </View>
            <View style={{width: '100%', marginTop: 5}}>
              <Input
                placeholder="Total amount (optional)"
                rightIcon={
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: 'contain',
                        alignSelf: 'flex-start',
                        marginLeft: 20,
                      }}
                      source={require('../../assets/caret-down.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '50%',
            marginBottom: metrics.baseMargin,
          }}>
          <Button
            title="Save"
            type="solid"
            containerStyle={{width: '100%'}}
            buttonStyle={{
              borderRadius: 50,
              backgroundColor: Colors.primary,
            }}
            titleStyle={[Fonts.style.buttonText, {color: Colors.secondary}]}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PumpingMannual;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  beginDateContainer: {
    margin: 30,
    alignItems: 'center',
  },
  textContainer: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    margin: 20,
    justifyContent: 'space-around',
  },
});
