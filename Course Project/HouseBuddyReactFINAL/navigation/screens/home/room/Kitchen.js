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
    title: "Kitchen",
    urlname1: "Fridge",
    link: "https://www.amazon.com/s?k=fridge&ref=nb_sb_noss_1",
    url1: "https://img.icons8.com/cotton/2x/fridge.png",
    urlname2: "Kitchenwares",
    link2: "https://www.amazon.com/s?k=kitchenwares&ref=nb_sb_noss_1",
    url2: "https://img.icons8.com/cotton/2x/kitchenwares.png",
    urlname3: "Coffee Maker",
    link3: "https://www.amazon.com/s?k=coffee+maker&ref=nb_sb_noss_1",
    url3: "https://img.icons8.com/cotton/2x/coffee-maker.png",
    urlname4: "Plants",
    link4: "https://www.amazon.com/s?k=plants&ref=nb_sb_noss_1",
    url4: "https://img.icons8.com/cotton/2x/cactus-in-pot--v2.png",
    urlname5: "TV",
    link5: "https://www.amazon.com/s?k=tv&ref=nb_sb_noss_1",
    url5: "https://img.icons8.com/cotton/2x/tv-show.png",
    urlname6: "Kitchen Lamp",
    link6: "https://www.amazon.com/s?k=kitchen+lamp&ref=nb_sb_noss_1",
    url6: "https://img.icons8.com/cotton/2x/kitchen-lamp.png",
    urlname7: "Buffet",
    link7: "https://www.amazon.com/s?k=kitchen+buffet+island&ref=nb_sb_noss_1",
    url7: "https://img.icons8.com/cotton/2x/buffet.png",
    urlname8: "Panini Press",
    link8: "https://www.amazon.com/s?k=mirror&ref=nb_sb_noss_1",
    url8: "https://img.icons8.com/cotton/2x/big-green-egg--v3.png",
    urlname9: "Bar Stool",
    link9: "https://www.amazon.com/s?k=barstool&ref=nb_sb_noss_1",
    url9: "https://img.icons8.com/cotton/2x/bar-stool--v2.png",
    urlname10: "Ingredients",
    link10: "https://www.wholefoodsmarket.com/products",
    url10: "https://img.icons8.com/cotton/2x/ingredients--v2.png",
  },
];

// export default function Home({ navigation }) {
const Kitchen = () => {
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
        <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link6)}>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
            source={{ uri: item.url6 }}
          />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.urlname6}</Text>
        <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link7)}>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
            source={{ uri: item.url7 }}
          />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.urlname7}</Text>
        <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link8)}>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
            source={{ uri: item.url8 }}
          />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.urlname8}</Text>
        <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link9)}>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
            source={{ uri: item.url9 }}
          />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.urlname9}</Text>
        <TouchableOpacity 
            style={styles.image}
            onPress={() => Linking.openURL(item.link10)}>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
            source={{ uri: item.url10 }}
          />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.urlname10}</Text>
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

export default Kitchen;

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
