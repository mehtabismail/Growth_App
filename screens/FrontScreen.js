import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';


const SplashScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ alignItems: "center", marginTop: "20%" }}>
                    <View>
                        <Text style={{ fontSize: 40, color: "#f5d745", fontWeight: "bold" }}>
                            Growth
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                width: 250,
                                height: 250,
                                resizeMode: 'contain'
                            }}
                            source={require('../assets/mother-family.png')} 
                        />
                        
                    </View>
                    <View style={{ alignItems: "center", }}>
                        <Text style={{ fontSize: 30, color: "#f5d745", fontWeight: "bold" }}>
                            Tracking Everything
                        </Text>
                        <View style={{ marginLeft: "20%", marginRight: "20%" }}>
                            <Text style={{ fontSize: 20, color: "white", fontWeight: "100" }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: "center", marginBottom: 40 }}>
                    <TouchableOpacity style={{
                        bottom: 20,
                        left: 10,
                        right: 10,
                        elevation: 5,
                        borderRadius: 15,
                        backgroundColor: "#f5d745",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "80%", height: 50,
                        shadowColor: "#7F5DF0",
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5,
                    }}>
                        <Text style={{ fontWeight: "bold", fontSize: 30, color: "#63815c" }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "100", fontSize: 20, color: "#f5d745" }}>New to Growth? Sign Up </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#63815c',
        width: "100%",
        height: "100%",
        justifyContent: "space-between"
    },
})
