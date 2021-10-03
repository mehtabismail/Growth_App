import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from 'react-native-elements'

const SleepingScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Hello</Text>
            </View>
            <View>

            </View>
        </View>
    )
}

export default SleepingScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        backgroundColor:"lightblue",
        height:"100%"
    }
})
