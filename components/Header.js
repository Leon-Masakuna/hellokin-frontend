import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoProfileContainer}>
        <Image
          source={{
            uri: "https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512",
          }}
          style={styles.image}
        />
        <Text style={styles.logo}>HelloKin</Text>
        <View style={styles.iconContainer}>
          <Text style={styles.iconItems}>1 & </Text>
          <Text style={styles.iconItems}>2</Text>
          {/* <FontAwesomeIcon icon={faMugSaucer} /> */}
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <Text>Tous</Text>
        <Text>Photos</Text>
        <Text>Vidéos</Text>
        <Text>Livres</Text>
        <Text>Tutoriels</Text>
        <Text>Podcats</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  logoProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "black",
    borderRadius: 5,
    padding: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconItems: {
    fontSize: 25,
    color: "white",
  },
  logo: {
    fontSize: 33,
    color: "white",
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    padding: 25,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "white",
    borderRadius: 25,
  },
});