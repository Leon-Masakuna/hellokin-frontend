import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Zocial } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("Bio");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoProfileContainer}>
        <TouchableOpacity onPress={navigateToProfile}>
          <Image
            source={{
              uri: "https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512",
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/Logo_Hellokin.png")}
          style={styles.homeLogo}
        />
        <View style={styles.iconContainer}>
          <View>
            <Ionicons
              name="ios-search"
              size={24}
              color="black"
              style={styles.iconItems}
            />
          </View>
          <View>
            <Zocial
              name="email"
              size={24}
              color="black"
              style={[styles.iconItems, styles.middleIcon]}
            />
            <View style={styles.messageCountContainer}>
              <Text style={styles.messageCount}>9</Text>
            </View>
          </View>
          <View>
            <AntDesign
              name="shoppingcart"
              size={24}
              color="black"
              style={styles.iconItems}
            />
          </View>
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
    paddingRight: 18,
    marginBottom: 1,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    alignSelf: "flex-end",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 75,
    alignSelf: "flex-end",
    marginLeft: -30,
  },
  iconItems: {
    fontSize: 24,
    color: "white",
  },
  middleIcon: {
    marginRight: 8,
    marginLeft: 8,
  },
  messageCountContainer: {
    backgroundColor: "red",
    width: 15,
    height: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -27,
    marginLeft: 20,
  },
  messageCount: {
    color: "white",
    textAlign: "center",
    fontSize: 11,
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
    backgroundColor: "#041C2E",
    padding: 5,
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
  },
});
