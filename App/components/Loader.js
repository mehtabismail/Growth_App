import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = (data) => {
  return (
    <View>
      <ActivityIndicator
        animating={true}
        size="large"
        style={{position: 'absolute', top: '40%', left: '40%'}}
      />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})