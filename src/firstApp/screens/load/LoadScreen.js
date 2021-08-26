import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { investigate } from 'react-native-bundle-splitter/dist/utils'
import SecondButton from '../../../common/SecondButton'

const LoadScreen = () => {
  console.log('Bundle Info LoadScreen : ', investigate())
  return (
    <View>
      <Text>LoadScreen</Text>
      <SecondButton />
    </View>
  )
}

export default LoadScreen

const styles = StyleSheet.create({})
