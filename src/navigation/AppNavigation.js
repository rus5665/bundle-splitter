import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { register } from 'react-native-bundle-splitter'
// import Home from '../firstApp/screens/Home'
// import LoadScreen from '../firstApp/screens/load'
import FirstAppStack from './FirstAppStack'
import SecondAppStack from './SecondAppStack'
import SelectApp from '../SelectApp'

const Stack = createStackNavigator()

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectApp"
        component={SelectApp}
      />
      <Stack.Screen
        name="FirstAppStack"
        component={FirstAppStack}
      />
      <Stack.Screen
        name="SecondAppStack"
        component={SecondAppStack}
      />
    </Stack.Navigator>
  )
}


function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default AppNavigator