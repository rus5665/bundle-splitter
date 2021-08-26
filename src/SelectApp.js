import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { preload } from 'react-native-bundle-splitter'

const SelectApp = () => {

  const navigation = useNavigation()

  const REGISTERED = 'REGISTERED'
  const doLoginRequest = () => new Promise((resolve) => {
    setTimeout(() => resolve({ status: REGISTERED }), 1000);
  })

  const loadFirstApp = async () => {
    const [{ status }] = await Promise.all([
      doLoginRequest(),
      preload().group('FirstApp')
    ])
    if (status === REGISTERED) {
      navigation.navigate('FirstAppStack')
    }
  }


  const loadSecondApp = async () => {
    const [{ status }] = await Promise.all([
      doLoginRequest(),
      preload().group('SecondApp')
    ])
    if (status === REGISTERED) {
      navigation.navigate('SecondAppStack')
    }
  }




  return (
    <View>
      <Button title={'First App'} onPress={loadFirstApp} />
      <Button title={'Second App'} onPress={loadSecondApp} />
    </View>
  )
}

export default SelectApp

const styles = StyleSheet.create({})
