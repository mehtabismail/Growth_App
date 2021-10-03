
import React from 'react'
import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import { Button, Icon, Input, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'

const PumpingMannual = () => {
    return (
        <SafeAreaView>
            
            <View style={styles.container}>
            <StatusBar backgroundColor="#285E29"/>
                <View>
                    <View>
                        <CustomHeader />
                    </View>
                    <View style={{ margin: 30, alignItems: "center" }}>
                        <View>
                            <Text>Begin Date</Text>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "50%" }}>
                                    <Input
                                        placeholder='Today'
                                    />
                                </View>
                                <View style={{ width: "50%" }}>
                                    <Input
                                        placeholder='Begin Time'
                                    />
                                </View>
                            </View>
                            <View>
                                <Input
                                    placeholder='Duration (Optional)'
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={{ margin: 10, flexDirection: "row" }}>
                            <View style={{marginRight:5}}>
                                <Icon
                                    name="stopwatch"
                                    type="fontisto"
                                    size={20}
                                    color="#63815c"
                                />
                            </View>
                            <View>
                                <Text style={{ color: "#63815c", fontSize: 15, fontWeight: "bold" }}>or Start Time</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text>Side(s) & Amount (optional)</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", margin: 20, justifyContent: "space-around" }}>
                            <Button
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
                        <View style={{ width: "100%" }}>
                            <Input
                                placeholder="Total amount (optional)"
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
    }
})
