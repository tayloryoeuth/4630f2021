import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import Card from "./card/card";

import masterbedroom from "./room/MasterBedroom"

const reviews = [
  { id: 1, title: "Master bedroom", component: masterbedroom},
  { id: 2, title: "Bedroom" },
  { id: 3, title: "Kitchen" },
  { id: 4, title: "Dining Room" },
  { id: 5, title: "Guest Room" },
  { id: 6, title: "Bathroom" },
  { id: 7, title: "Office" },
];

// export default function Home({ navigation }) {
const DefaultScreen = ({ navigation }) => {
  const [review, setreview] = useState(reviews); //
  const [isRender, setisRender] = useState(false);
  const [screen, setscreen] = useState(reviews);

  const [isModalVisible, setisModalVisible] = useState(false); //popup change text view
  const [inputText, setinputText] = useState(); //inputting text
  const [editItem, seteditItem] = useState(); //editing text
  const [changeScreen, setchangeScreen] = useState(); //change screen

  const onPressItem = (item) => {
    setisModalVisible(true);
    setinputText(item.text);
    seteditItem(item.id);
    setchangeScreen(item.id);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
        <Card>
          <Text style={styles.title}>{item.title}</Text>
        </Card>
      </TouchableOpacity>
    );
  };

  //handles the editted item
  //set title to new title
  //checks if completed
  const handleEditItem = (editItem) => {
    const newReview = review.map((item) => {
      if (item.id == editItem) {
        item.title = inputText;
        return item;
      }
      return item;
    });
    setreview(newReview);
    setisRender(isRender);
  };

  //edits the item and saves
  //exit modal
  const onPressSaveEdit = () => {
    handleEditItem(editItem);
    setisModalVisible(false);
  };

  //handles changing screen
  const handleScreenChange = (changeScreen) => {
    const newScreen = screen.map((item) => {
      if(item.id == changeScreen) {
        return navigation.navigate(item.component)
      }
      return navigation.navigate(item.component)
    });
    setscreen(newScreen);
    setisRender(isRender);
  }

  const onPressGotoScreen = () => {
    handleScreenChange(changeScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={isRender}
      />
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.text}>Change Text: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(title) => setinputText(title)}
            defaultValue={inputText}
            editable={true}
            multiline={false}
            maxLength={200}
          />
          <TouchableOpacity
            onPress={() => onPressSaveEdit()}
            style={styles.touchableSave}
          >
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPressGotoScreen()}
            style={styles.touchableGoto}
          >
            <Text style={styles.text}>Go to Screen</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  textInput: {
    width: "90%",
    height: 70,
    borderColor: "grey",
    fontSize: 25,
    borderWidth: 1,
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableSave: {
    backgroundColor: "tomato",
    padding: 30,
    alignItems: "center",
    marginTop: 20,
  },
  touchableGoto: {
    backgroundColor: "tomato",
    padding: 30,
    alignItems: "center",
    marginTop: 150,
  },
});
