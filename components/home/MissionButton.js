import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MissionButton = () => {
  const navigation = useNavigation();
  const navigateToNewPostScreen = () => {
    navigation.navigate("NewPost");
  };

  return (
    <View style={styles.missionButtonContainer}>
      <TouchableOpacity onPress={navigateToNewPostScreen}>
        <View style={styles.buttonContainer}>
          <Entypo name="plus" size={30} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MissionButton;

const styles = StyleSheet.create({
  missionButtonContainer: {
    position: "absolute",
    backgroundColor: "#F49E1E",
    marginTop: 610,
    height: 60,
    width: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "80%",
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
