import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { register } from 'react-native-bundle-splitter'
import Home from '../firstApp/screens/Home'
import LoadScreen from '../firstApp/screens/load'

const Stack = createStackNavigator()

function FirstAppStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Home" component={register({ loader: () => import('../firstApp/screens/Home'), group: 'FirstApp' })} />
      {/* <Stack.Screen name="LoadScreen" component={LoadScreen} /> */}
      <Stack.Screen name="LoadScreen" component={register({ loader: () => import('../firstApp/screens/load/LoadScreen'), group: 'FirstApp' })} />
    </Stack.Navigator>
  )
}

export default FirstAppStack