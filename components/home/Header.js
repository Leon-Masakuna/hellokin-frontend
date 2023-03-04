import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoProfileContainer}>
        <Image
          onPress={navigateToProfile}
          source={{
            uri: "https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512",
          }}
          style={styles.image}
        />
        <Image
          source={require("../home/assets/Logo_Hellokin.png")}
          style={styles.homeLogo}
        />
        <View style={styles.iconContainer}>
          <Ionicons
            name="ios-search"
            size={24}
            color="black"
            style={styles.iconItems}
          />
          <Zocial
            name="email"
            size={24}
            color="black"
            style={styles.iconItems}
          />
          <AntDesign
            name="shoppingcart"
            size={24}
            color="black"
            style={styles.iconItems}
          />
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={[styles.optionsText, styles.activeOption]}>Tous</Text>
        <Text style={styles.optionsText}>Photographie</Text>
        <Text style={styles.optionsText}>Vidéaste</Text>
        <Text style={styles.optionsText}>Graphiste</Text>
        <Text style={styles.optionsText}>Développeur</Text>
        <Text style={styles.optionsText}>Growth hacking</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#1F222B",
  },
  logoProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignSelf: "flex-end",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 75,
    marginLeft: -30,
    alignSelf: "flex-end",
  },
  iconItems: {
    fontSize: 20,
    color: "white",
  },
  logo: {
    fontSize: 33,
    color: "white",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
    padding: 10,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "white",
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontSize: 12,
  },
  homeLogo: {
    height: 25,
    width: 105,
  },
  optionsText: {
    fontSize: 10,
  },
  activeOption: {
    fontSize: 14,
    backgroundColor: "#1bbcc7",
    padding: 5,
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
  },
});
