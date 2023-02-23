import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.fullContainer}>
      <View style={styles.container}>
        <Header />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fullContainer: {
    marginTop: 13,
    backgroundColor: "#1F222B",
    height: "100%",
  },
  container: {
    marginTop: 13,
    backgroundColor: "#01070B",
  },
});
