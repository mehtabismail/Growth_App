import React from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Image, Input, Text, } from 'react-native-elements'


const LoginScreen = () => {
    return (
      <SafeAreaView>
            <View style={{ flex: 1, }}>
            <View >
                <View style={styles.gradient}>
                    <View style={{ padding: 5, marginTop: "50%", marginLeft: "20%", }}>
                        <Text style={{ fontSize: 20, color: "#f5d745", fontWeight: "bold" }}>Growth</Text>
                        <View style={{ borderWidth: 2, borderColor: "#f5d745", marginTop: 10, }}></View>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row-reverse", marginTop: -10 }}>
                <TouchableOpacity style={{ margin: 20 }}>
                    <Text style={{ fontWeight: "300", fontSize: 20, color: "#63815c" }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20 }}>
                    <Text style={{ fontWeight: "300", fontSize: 20, }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* INPUT View */}
            <View style={{ margin: "10%", }}>
                <Input
                    placeholder="E-mail or Username"
                    style={{
                        fontWeight: "bold"
                    }}
                />
                <Input
                    placeholder="Password"
                    style={{
                        fontWeight: "bold"
                    }}
                />
                <Input
                    placeholder="Confirm Password"
                    style={{
                        fontWeight: "bold"
                    }}
                />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>or</Text>
            </View>


            {/* Button Views */}

            <View style={{ margin: 40, }}>
                <View>
                    <TouchableOpacity style={{
                        elevation: 3,
                        borderRadius: 15,alignItems:"center",
                        height: 50,
                        shadowColor: "#7F5DF0",
                        flexDirection:"row",

                    }}>
                        <Image
                            source={require('../../assets/facebook2.png')}
                            style={{ width: 30,height: 30, marginLeft:40, marginRight:20 }}
                        />
                        <Text style={{ fontSize: 15, color: "grey" }}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 15 }}>
                    <TouchableOpacity style={{
                        elevation: 3,
                        borderRadius: 15,alignItems:"center",
                        height: 50,
                        shadowColor: "#7F5DF0",
                        flexDirection:"row",

                    }}>
                        <Image
                            source={require('../../assets/google.png')}
                            style={{ width: 30,height: 30, marginLeft:40, marginRight:20 }}
                        />
                        <Text style={{ fontSize: 15, color: "grey" }}>Continue with Google</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View>
                <View style={{ marginLeft: 40, marginRight: 40, marginBottom: 20, marginTop: 10 }}>
                    <TouchableOpacity style={{
                        elevation: 3,
                        borderRadius: 15,
                        backgroundColor: "#63815c",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        shadowColor: "#7F5DF0",
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5,
                    }}>
                        <Text style={{ fontWeight: "bold", fontSize: 30, color: "#ffffff" }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, color: "#63815c" }}>
                            I'm already a Member
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    gradient: {
        backgroundColor: "#63815c",
        width: 350,
        height: 300, justifyContent: "center",
        alignItems: "center", borderRadius: 400 / 2,
        marginTop: "-30%", marginLeft: "-20%",
        transform: [
            { scaleX: 2 }
        ]
    }
})






