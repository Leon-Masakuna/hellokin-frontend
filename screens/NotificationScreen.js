import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is my notifications screen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
