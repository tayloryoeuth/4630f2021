import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { useState } from "react";
import Card from "../card/card";

const reviews = [
    {
      id: 1,
      title: "Dining Room",
      urlname1: "Table",
      link: "https://www.amazon.com/s?k=dining+room+table&ref=nb_sb_noss_1",
      url1: "https://img.icons8.com/cotton/2x/coffee-table--v3.png",
      urlname2: "Center Piece Flowers",
      link2: "https://www.amazon.com/s?k=dining+room+table+flowers&ref=nb_sb_noss_1",
      url2: "https://img.icons8.com/cotton/2x/bunch-flowers.png",
      urlname3: "Light Fixtures",
      link3: "https://www.amazon.com/s?k=light+fixtures&ref=nb_sb_noss_1",
      url3: "https://img.icons8.com/cotton/2x/chandelier--v2.png",
      urlname4: "Chair",
      link4: "https://www.amazon.com/s?k=dining+room+chairs&ref=nb_sb_noss_1",
      url4: "https://img.icons8.com/cotton/2x/dining-chair-side-vew--v2.png",
      urlname5: "Light Switch",
      link5: "https://www.amazon.com/s?k=light+switches&ref=nb_sb_noss_1",
      url5: "https://img.icons8.com/cotton/2x/light-switch--v2.png",
    },
  ];

// export default function Home({ navigation }) {
const DiningRoom = ({ navigation }) => {
    const [review, setreview] = useState(reviews); //
    const [isRender, setisRender] = useState(false);
  
    const renderItem = ({ item, index }) => {
      return (
        <SafeAreaView>
          <Card>
            <Text style={styles.title}>{item.title}</Text>
          </Card>
          <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link)}>
            <Image
              style={{ width: "100%", height: 200, resizeMode: "contain" }}
              source={{ uri: item.url1 }}
            />
          </TouchableOpacity>
          <Text style={styles.itemText}>{item.urlname1}</Text>
          <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link2)}>
            <Image
              style={{ width: "100%", height: 200, resizeMode: "contain" }}
              source={{ uri: item.url2 }}
            />
          </TouchableOpacity>
          <Text style={styles.itemText}>{item.urlname2}</Text>
          <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link3)}>
            <Image
              style={{ width: "100%", height: 200, resizeMode: "contain" }}
              source={{ uri: item.url3 }}
            />
          </TouchableOpacity>
          <Text style={styles.itemText}>{item.urlname3}</Text>
          <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link4)}>
            <Image
              style={{ width: "100%", height: 200, resizeMode: "contain" }}
              source={{ uri: item.url4 }}
            />
          </TouchableOpacity>
          <Text style={styles.itemText}>{item.urlname4}</Text>
          <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link5)}>
            <Image
              style={{ width: "100%", height: 200, resizeMode: "contain" }}
              source={{ uri: item.url5 }}
            />
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.urlname5}</Text>
        </SafeAreaView>
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={reviews}
          renderItem={renderItem} //uses function to call all items and images
          keyExtractor={(item) => item.id} // places them in order from the array
          extraData={isRender}
        />
      </SafeAreaView>
    );
  };
  
  export default DiningRoom;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      textAlign: 'center',
    },
    itemText: {
      color: "blue",
      textAlign: "center",
      paddingTop: 15,
      paddingBottom: 75,
    },
    image: {
      paddingTop: 50,
    }
  });