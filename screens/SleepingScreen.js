import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import { Button, Text, Icon } from 'react-native-elements'

const SleepingScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <CustomHeader text="Sleeping"/>
                </View>
                <View style={styles.timeCircleView}>
                    <Text style={styles.timeText}>00:00</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.containerLast}>
                        <Icon
                            name="keyboard"
                            type='fontisto'
                            size={15}
                            color="#63815c"
                        />
                        <Text style={{fontSize:15, color: "#63815c", marginLeft:5}}>or Enter Manually</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <Button
                            icon={
                                <Icon
                                    name="play"
                                    type='font-awesome'
                                    size={40}
                                    color="#63815c"
                                />
                            }
                            buttonStyle={{ borderColor: "#63815c", borderWidth: 2, width:200 }}
                            type="outline"
                            title="Sleeps"
                            titleStyle={{color:"black", fontSize:20, margin:10}}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SleepingScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    headerView:{
        elevation:3
    },
    timeCircleView: {
        width: 250, height: 250,
        borderRadius: 250 / 2,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
        elevation:1
    },
    buttonView: {
        alignItems: "center",
        
    },
    timeText: {
        fontSize: 50,
        fontWeight: "bold",
    },
    containerLast:{
        flexDirection:"row",
    },
    button: {
        margin: 10,
    }
})

