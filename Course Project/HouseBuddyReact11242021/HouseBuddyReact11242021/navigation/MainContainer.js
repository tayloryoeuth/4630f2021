import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import HomeScreen from "./screens/HomeScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import BrowseScreen from "./screens/BrowseScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

//Screen names
const homeName = "Home";
const favoriteName = "Favorite";
const browseName = "Browse";
const profileName = "Profile";
const settingsName = "Settings";

const BottomTab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <BottomTab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === favoriteName) {
            iconName = focused ? "heart" : "heart-outline";
          } else if (rn === browseName) {
            iconName = focused ? "compass" : "compass-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 10 },
        style: { height: 70 },
      }}
    >
      <BottomTab.Screen name={homeName} component={HomeScreen} />
      <BottomTab.Screen name={favoriteName} component={FavoriteScreen} />
      <BottomTab.Screen name={browseName} component={BrowseScreen} />
      <BottomTab.Screen name={profileName} component={ProfileScreen} />
      <BottomTab.Screen name={settingsName} component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}
