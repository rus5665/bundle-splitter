import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { register } from 'react-native-bundle-splitter'
import Home from '../secondApp/screens/Home'
import LoadScreen from '../secondApp/screens/load'

const Stack = createStackNavigator()

function SecondAppStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Home" component={register({ loader: () => import('../secondApp/screens/Home'), group: 'SecondApp' })} />

      {/* <Stack.Screen name="LoadScreen" component={LoadScreen} /> */}
      <Stack.Screen name="LoadScreen" component={register({
        group: 'SecondApp',
        loader: () => import('../secondApp/screens/load/LoadScreen'),
        placeholder: () => (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#0398fc" />
          </View>
        ),
      })} />
    </Stack.Navigator>
  )
}

export default SecondAppStack