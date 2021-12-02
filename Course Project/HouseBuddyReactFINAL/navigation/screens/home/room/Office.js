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
    title: "Office",
    urlname1: "Desk",
    link: "https://www.amazon.com/s?k=desk&ref=nb_sb_noss_1",
    url1: "https://img.icons8.com/cotton/2x/desk--v2.png",
    urlname2: "Chair",
    link2: "https://www.amazon.com/s?k=desk+chair&ref=nb_sb_noss_1",
    url2: "https://img.icons8.com/cotton/2x/desk-chair--v2.png",
    urlname3: "Pens",
    link3: "https://www.amazon.com/s?k=pens&ref=nb_sb_noss_1",
    url3: "https://img.icons8.com/cotton/2x/stationery--v2.png",
    urlname4: "Monitor",
    link4: "https://www.amazon.com/s?k=monitor&ref=nb_sb_noss_1",
    url4: "https://img.icons8.com/cotton/2x/tv--v1.png",
    urlname5: "Trash Barrel",
    link5: "https://www.amazon.com/s?k=trashbarrel&ref=nb_sb_noss_1",
    url5: "https://img.icons8.com/cotton/2x/delete.png",
    urlname6: "Floor Lamp",
    link6: "https://www.amazon.com/s?k=floor+lamp&ref=nb_sb_noss_1",
    url6: "https://img.icons8.com/cotton/2x/floor-lamp--v1.png",
    urlname7: "Globe",
    link7: "https://www.amazon.com/s?k=globe&ref=nb_sb_noss_1",
    url7: "https://img.icons8.com/cotton/2x/globe-earth.png",
    urlname8: "Air Conditoner",
    link8: "https://www.amazon.com/s?k=bath+curtains&ref=nb_sb_noss_1",
    url8: "https://img.icons8.com/cotton/2x/air-conditioner--v3.png",
    urlname9: "Potted Plants",
    link9: "https://www.amazon.com/s?k=hairdryer&ref=nb_sb_noss_1",
    url9: "https://img.icons8.com/cotton/2x/potted-plant--v3.png",
    urlname10: "Curtains",
    link10: "https://www.amazon.com/s?k=iron&ref=nb_sb_noss_1",
    url10: "https://img.icons8.com/cotton/2x/curtains--v2.png",
  },
];

// export default function Home({ navigation }) {
const Office = () => {
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

export default Office;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  itemText: {
    color: "blue",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 75,
  },
  image: {
    paddingTop: 50,
  },
});
