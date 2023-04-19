import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewPostScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={{}} style={styles.image} />
        </View>
        <View style={styles.choosePicture}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={24}
            style={styles.iconColor}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.imageContents}></View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Publier</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "grey",
    height: "100%",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 125,
  },
  imageContainer: {
    width: 250,
    height: 150,
    borderRadius: 5,
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 100,
  },
  choosePicture: {
    alignSelf: "flex-end",
  },
  iconColor: {
    fontSize: 40,
    color: "white",
  },
  imageContents: {
    width: "100%",
    height: 180,
    backgroundColor: "#363737",
    borderRadius: 20,
  },
  containerScroll: {
    width: 300,
    height: 180,
    borderRadius: 20,
    marginTop: 50,
  },
  buttonContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#363737",
    width: "100%",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
