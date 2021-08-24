import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { register } from 'react-native-bundle-splitter';


export default register({
  name: 'LoadScreen',
  loader: () => import('./LoadScreen'),
  placeholder: () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#0398fc" />
    </View>
  ),
});

const styles = StyleSheet.create({})
