import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const BedroomCard = () => {
    return (
        <View style={styles.cardContainer}>
            <Text>Bedroom Card</Text>
        </View>
    )
}

export default BedroomCard

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    cardContainer: { 
        width: deviceWidth - 25, 
        backgroundColor: '#a29bfe'
    }
})
