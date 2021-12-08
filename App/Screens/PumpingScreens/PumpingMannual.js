
import React from 'react'
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Icon, Input, Text } from 'react-native-elements'
import CustomHeader from '../../Components/CustomHeader'

const PumpingMannual = () => {
    return (
        <SafeAreaView>

            <View style={styles.container}>
                <View>
                    <View>
                        <CustomHeader />
                    </View>
                    <View style={styles.beginDateContainer}>
                        <View>
                            <Text>Begin Date</Text>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "50%", flexDirection: "row" }}>
                                    <Input
                                        placeholder='Today'
                                        rightIcon={
                                            <TouchableOpacity>
                                                <Icon
                                                    name='caret-down'
                                                    type='font-awesome'
                                                />
                                            </TouchableOpacity>
                                        }
                                    />
                                </View>
                                <View style={{ width: "50%" }}>
                                    <Input
                                        placeholder='Begin Time'
                                        rightIcon={
                                            <TouchableOpacity>
                                                <Icon
                                                    name='caret-down'
                                                    type='font-awesome'
                                                />
                                            </TouchableOpacity>
                                        }
                                    />
                                </View>
                            </View>
                            <View>
                                <Input
                                    placeholder='Duration (Optional)'
                                    rightIcon={
                                        <TouchableOpacity>
                                            <Icon
                                                name='caret-down'
                                                type='font-awesome'
                                            />
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={{ margin: 10, flexDirection: "row" }}>
                            <View style={{ marginRight: 5 }}>
                                <Icon
                                    name="stopwatch"
                                    type="fontisto"
                                    size={20}
                                    color="#63815c"
                                />
                            </View>
                            <View>
                                <Text style={styles.textContainer}>or Start Time</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text>Side(s) & Amount (optional)</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                icon={
                                    <Icon
                                        name='square-o'
                                        type='font-awesome'
                                        style={{ margin: 10 }}
                                    />
                                }
                                title="Left"
                                type="outline"
                                titleStyle={{
                                    fontSize: 20,
                                    color: "black"
                                }}
                                buttonStyle={{
                                    borderColor: "#63815c",
                                    borderWidth: 2,
                                    width: 120,
                                    height: 50,
                                    borderRadius: 15
                                }}
                            />
                            <Button
                                icon={
                                    <Icon
                                        name='square-o'
                                        type='font-awesome'
                                        style={{ margin: 10 }}
                                    />
                                }
                                title="Right"
                                type="outline"
                                titleStyle={{
                                    fontSize: 20,
                                    color: "black"

                                }}
                                buttonStyle={{
                                    borderColor: "#63815c",
                                    borderWidth: 2,
                                    width: 120,
                                    height: 50,
                                    borderRadius: 15
                                }}
                            />
                        </View>
                        <View style={{ width: "100%", marginTop: 5 }}>
                            <Input
                                placeholder="Total amount (optional)"
                                rightIcon={
                                    <TouchableOpacity>
                                        <Icon
                                            name='caret-down'
                                            type='font-awesome'
                                        />
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                    </View>
                </View>
                <View >
                    <Button
                        title="Save"
                        type="solid"
                        titleStyle={{
                            fontSize: 20,
                            color: "#f5d745",

                        }}
                        buttonStyle={{
                            width: 150,
                            height: 50,
                            alignSelf: "center",
                            margin: 10,
                            backgroundColor: "#63815c"
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PumpingMannual

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        height: "100%"
    },
    beginDateContainer: {
        margin: 30,
        alignItems: "center"
    },
    textContainer: {
        color: "#63815c",
        fontSize: 15,
        fontWeight: "bold"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        margin: 20,
        justifyContent: "space-around"
    }


})
