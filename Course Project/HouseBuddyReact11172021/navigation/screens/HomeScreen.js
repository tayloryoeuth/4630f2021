import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import DefaultScreen from './home/DefaultScreen';
import List1Screen from './home/List1Screen';
import List2Screen from './home/List2Screen';

export default function HomeScreen() {

  const TopTab = createMaterialTopTabNavigator();

    return (
        <TopTab.Navigator
          initialRouteName="Default"
          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: 'white' },
          }}>
          <TopTab.Screen
            name="Default"
            component={DefaultScreen}
            options={{ tabBarLabel: 'Default' }}>
          </TopTab.Screen>
          <TopTab.Screen
            name="List1"
            component={List1Screen}
            options={{ tabBarLabel: 'List1' }}>
          </TopTab.Screen>
          <TopTab.Screen
            name="List2"
            component={List2Screen}
            options={{ tabBarLabel: 'List2' }}>
          </TopTab.Screen>
        </TopTab.Navigator>
      );
}

const styles = StyleSheet.create({
  
})