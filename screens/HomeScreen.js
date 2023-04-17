import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import PostCard from "../components/home/PostCard";
import MissionButton from "../components/home/MissionButton";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.fullContainer}>
      <View style={styles.container}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <View style={styles.viewCardContainer}>
          <PostCard />
          <PostCard />
          <PostCard />
        </View>
      </ScrollView>
      <MissionButton />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
  container: {
    marginTop: 28,
    backgroundColor: "#01070B",
  },
  cardContainer: {
    flexGrow: 0,
    paddingBottom: 80,
    backgroundColor: "#44474C",
  },
  viewCardContainer: {
    marginTop: 5,
    height: "100%",
    padding: 0,
  },
});
