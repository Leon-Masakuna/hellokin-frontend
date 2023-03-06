import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import PostCard from "../components/home/PostCard";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.fullContainer}>
      <View style={styles.container}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}></ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fullContainer: {
    marginTop: 15,
    height: "100%",
    padding: 0,
    // backgroundColor: "#1F222B",
  },
  container: {
    marginTop: 13,
    backgroundColor: "#01070B",
  },

  cardContainer: {
    backgroundColor: "#354041",
    flexGrow: 0,
  },
});
