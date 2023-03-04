import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [biography, setBiography] = useState("");

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Entypo name="dots-three-vertical" size={24} color="#fca80a" />
      </View>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={
              {
                // uri: "https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512",
              }
            }
            style={styles.image}
          />
        </View>
        <View style={styles.choosePicture}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={24}
            style={styles.iconColor}
          />
        </View>
      </View>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerInputs}></View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C0D0D",
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 100,
  },
  textArea: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 50,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 350,
  },
  menuContainer: {
    marginTop: 50,
    alignSelf: "flex-end",
    marginBottom: 120,
  },
  containerScroll: {
    height: "100%",
    width: "100%",
  },
  containerInputs: {
    width: "100%",
    height: 180,
    backgroundColor: "white",
    borderRadius: 20,
  },
  containerScroll: {
    width: 300,
    borderRadius: 20,
    marginTop: 50,
  },
  choosePicture: {
    alignSelf: "flex-end",
  },
  iconColor: {
    fontSize: 40,
    color: "white",
  },
});
