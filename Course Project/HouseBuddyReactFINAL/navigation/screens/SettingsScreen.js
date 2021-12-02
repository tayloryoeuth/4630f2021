import * as React from "react";
import { View, Text, Image } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{
          width: "100%",
          height: 200,
          resizeMode: "contain",
          paddingBottom: 50,
        }}
        source={{ uri: "https://img.icons8.com/cotton/2x/user-settings.png" }}
      />
      <Text
        onPress={() => navigation.navigate("Home")} // used for when users click on it it brings them back to homescreen
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        SETTINGS
      </Text>
    </View>
  );
}
