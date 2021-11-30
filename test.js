import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Test = () => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems:"center"}}>
                <View><Text style={{ fontSize: 55, color: "yellow", fontWeight: "bold" }}>Growth</Text></View>
                <View><Text style={{ fontSize: 40, color: "white", fontWeight: "500" }}>Parrenting Made Easy</Text></View>
                <View style={{ borderWidth: 2, borderColor: "yellow", width: 250,marginTop: 20 }}></View>
            </View>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#63815c',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
    },
})
