import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './navigation/screens/profile/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Main' component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App

const styles = StyleSheet.create({})