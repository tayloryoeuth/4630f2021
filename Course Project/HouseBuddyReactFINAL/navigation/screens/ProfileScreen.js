import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
     <Image
              style={{ width: "100%", height: 200, resizeMode: "contain" }}
              source={{ uri: 'https://img.icons8.com/cotton/2x/user-male-circle.png' }}
            />
      <Text style={styles.title}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} styles={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 20,
  },
  title: {
    padding: 20,
    fontSize: 20,
  }
});
