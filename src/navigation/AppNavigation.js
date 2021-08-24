import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { register } from 'react-native-bundle-splitter';
import Home from '../screens/Home'
import LoadScreen from '../screens/load/'

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoadScreen" component={LoadScreen} />
    </Stack.Navigator>
  );
}
function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default AppNavigator