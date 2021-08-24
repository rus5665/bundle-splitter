import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { preload } from 'react-native-bundle-splitter'

const REGISTERED = 'REGISTERED';

const doLoginRequest = () => new Promise((resolve) => {
  setTimeout(() => resolve({ status: REGISTERED }), 3000);
})

const Home = () => {

  const navigation = useNavigation()

  // const doLogin = async () => {
  //   const { status } = await doLoginRequest();
  //   if (status === REGISTERED) {
  //     navigation.navigate('LoadScreen');
  //   }
  // }

  const doLogin = async () => {
    // const { status } = await doLoginRequest()
    // await preload().component('LoadScreen')
    const [{ status }] = await Promise.all([
      doLoginRequest(),
      preload().component('LoadScreen')
    ]);
    if (status === REGISTERED) {
      navigation.navigate('LoadScreen')
    }
  }

  return (
    <View>
      <Text>Home        Home</Text>
      <Button
        title="Go to Details"
        onPress={doLogin}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
