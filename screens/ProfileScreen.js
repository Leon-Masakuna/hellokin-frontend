import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const ProfileScreen = ({ navigation }) => {
  const [biography, setBiography] = useState("");

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512",
        }}
        style={styles.image}
      />
      <Text>Choose your profile picture</Text>
      <View>
        <TextInput
          placeholder="Write a little biography about your self"
          value={biography}
          onChangeText={(text) => setBiography(text)}
          style={styles.textArea}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToHome} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
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
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
