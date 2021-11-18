//this is used to put in the data when a user clicks on the card component
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from './screens/home/card/card';

export default function RoomDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          { navigation.getParam('title') }
        </Text>
        <Text>{ navigation.getParam('body') }</Text>
      </Card>
    </View>
  );
}