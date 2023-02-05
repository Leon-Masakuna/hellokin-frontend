import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.text}>This is the Home Screen</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  text: {
    marginTop: 25,
  },
});
