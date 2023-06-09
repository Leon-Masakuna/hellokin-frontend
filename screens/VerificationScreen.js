import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const VerificationScreen = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/sms.png")} style={styles.image} />
      </View>
      <View style={styles.codeContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.verificationContainer}>
            <Text style={styles.verificationText}>
              entrez votre code de {"\n"} vérification
            </Text>
            <TextInput style={styles.verificationCode} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={navigateToHome} style={styles.button}>
                <Text style={styles.buttonText}>vérifier</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.smsText}>envoyez un sms</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fca80a",
    height: "100%",
    paddingTop: 200,
  },
  codeContainer: {
    justifyContent: "center",
    marginTop: 150,
  },
  verificationContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    width: 250,
    height: 150,
    borderRadius: 20,
    padding: 10,
  },
  verificationText: {
    textAlign: "center",
    fontSize: 10,
    marginBottom: 19,
  },
  verificationCode: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#7c7c7c",
    borderTopColor: "#7c7c7c",
    marginBottom: 19,
    marginRight: 10,
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fca80a",
    width: "60%",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
  smsText: {
    textAlign: "center",
    color: "white",
    marginTop: 50,
  },
  imageContainer: {
    borderRadius: "50%",
  },
});
