import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const VerificationPageScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>PART 1</Text>
      </View>
      <View>
        <Text>PART 2</Text>
      </View>
    </View>
  );
};

export default VerificationPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 25,
  },
});
