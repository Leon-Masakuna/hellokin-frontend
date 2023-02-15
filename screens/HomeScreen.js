import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Header />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 13,
  },
});
