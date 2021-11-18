import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import {useState} from 'react';
import { globalStyles } from '../../../styles/global'; 
import { useNavigation } from '@react-navigation/core';

import { roomDetails } from '../../roomDetails'
import Card from './card/card';

// export default function Home({ navigation }) {
const DefaultScreen = () => {
    const navigation = useNavigation();

    const[reviews] = useState([
        { title:'Master bedroom' , body: 'dawdqwdwqdwqdwd' },
        { title:'Bedroom' , body: 'dawdqwfwefewfwqdwd' },
        { title:'Kitchen' , body: 'dawdqefwfewfdwqdwd' },
        { title:'Dining Room' , body: 'dawdqefwfewfwdqdwqdwd' },
        { title:'Guest Room' , body: 'dawdqefwfewfwdwqdwd' },
        { title:'Bathroom' , body: 'ddqefwfewfqdwqdwd' },
        { title:'Office' , body: 'dawdqfwfewfwqdwd' },
    ]);

    return (
        <View style={globalStyles.container}>
          <FlatList data={reviews} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('roomDetails', item)}>
              <Card>
                <Text style={globalStyles.titleText}>{ item.title }</Text>
              </Card>
            </TouchableOpacity>
          )} />
        </View>
      );
}

export default DefaultScreen

const styles = StyleSheet.create({

})
