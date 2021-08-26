/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigation'
import { investigate } from 'react-native-bundle-splitter/dist/utils'

const App = () => {
  console.log('Bundle Info: ', investigate())

  return (
    <AppNavigator />
  )
}

export default App;
