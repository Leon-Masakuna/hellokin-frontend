import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const MissionButton = () => {
  return (
    <View style={styles.MissionButtonContainer}>
      <View style={styles.ButtonContainer}>
        <Entypo name="plus" size={30} color="white" />
      </View>
    </View>
  );
};

export default MissionButton;

const styles = StyleSheet.create({
  MissionButtonContainer: {
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
});
