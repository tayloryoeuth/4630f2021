import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

import masterBedroom from "./home/room/MasterBedroom";
import guestBedroom from "./home/room/GuestBedroom";
import boysBedroom from "./home/room/BoysBedroom";
import girlsBedroom from "./home/room/GirlsBedroom";
import office from "./home/room/Office";
import livingRoom from "./home/room/LivingRoom";
import kitchen from "./home/room/Kitchen";
import diningRoom from "./home/room/DiningRoom";
import bathroom from "./home/room/Bathroom";

export default function HomeScreen() {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator
      initialRouteName="MasterBedroom"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "white" },
        tabBarScrollEnabled: true,
      }}
    >
      <TopTab.Screen
        name="MasterBedroom"
        component={masterBedroom}
        options={{ tabBarLabel: "Master Bedroom" }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="BoysBedroom"
        component={boysBedroom}
        options={{ tabBarLabel: "Boy's Bedroom" }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="GirlsBedroom"
        component={girlsBedroom}
        options={{ tabBarLabel: "Girl's Bedroom" }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="GuestBedroom"
        component={guestBedroom}
        options={{ tabBarLabel: "Guest Bedroom" }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="Office"
        component={office}
        options={{ tabBarLabel: "Office" }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="LivingRoom"
        component={livingRoom}
        options={{ tabBarLabel: "Living Room" }}
      ></TopTab.Screen>
       <TopTab.Screen
        name="DiningRoom"
        component={diningRoom}
        options={{ tabBarLabel: "Dining Room" }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="Kitchen"
        component={kitchen}
        options={{ tabBarLabel: "Kitchen" }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="Bathroom"
        component={bathroom}
        options={{ tabBarLabel: "Bathroom" }}
      ></TopTab.Screen>
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({});
