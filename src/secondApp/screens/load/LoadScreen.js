import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { investigate } from 'react-native-bundle-splitter/dist/utils'
import Button from '../../../common/Button'
import SecondButton from '../../../common/SecondButton'
import CommonButton from '../../../common/CommonButton'

const LoadScreen = () => {
  console.log('Bundle Info LoadScreen : ', investigate())

  return (
    <View>
      <Text>LoadScreen</Text>
      <Button />
      <SecondButton />
      <CommonButton />
    </View>
  )
}

export default LoadScreen

const styles = StyleSheet.create({})
