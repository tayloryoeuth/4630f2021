import * as React from "react";
import { View, Text, Image } from "react-native";

export default function BrowseScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Image
              style={{ width: "100%", height: 200, resizeMode: "contain", paddingBottom: 50 }}
              source={{ uri: 'https://img.icons8.com/cotton/2x/chrome.png' }}
            />
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Browse Screen
      </Text >
      <Text style={{ fontSize: 15, fontWeight: "bold" }}> *FUTURE IMPLEMENTATION*</Text>
    </View>
  );
}
