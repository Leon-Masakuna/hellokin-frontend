import {
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import InputSecureText from "react-native-input-secure-text";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isNotFocused, setIsNotFocused] = useState(false);

  const navigateToSignup = () => {
    navigation.navigate("SignUp");
  };

  const navigateToHome = () => {
    navigation.navigate("Home");
  };
  const navigateToProfile = () => {
    navigation.navigate("Bio");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.connexionTextContainer}>
          <Text style={styles.connexionText}>connectez-vous</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={isFocused && styles.textLabelChange}>
            Nom d'utilisateur
          </Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            onPressIn={() => setIsFocused(true)}
          />
          <Text style={styles.passwordText}>Mot de passe</Text>
          <InputSecureText
            containerStyle={{ width: "100%" }}
            iconSize={25}
            value={password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={navigateToHome} style={styles.button}>
            <Text style={styles.buttonText}>connexion</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text>vous êtes nouveau sur HelloKin ?</Text>
          <Text onPress={navigateToSignup} style={styles.secondBottomText}>
            Créez un compte
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    height: "100%",
    width: "100%",
  },
  container: {
    justifyContent: "space-evenly",
    paddingTop: 100,
    paddingBottom: 20,
    backgroundColor: "white",
    width: "100%",
  },
  helloTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  connexionTextContainer: {
    alignSelf: "center",
    width: 300,
    marginTop: 100,
    marginBottom: 40,
  },
  connexionText: {
    fontSize: 20,
    color: "#fca80a",
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
    alignSelf: "center",
    marginTop: 5,
  },
  passwordText: {
    marginTop: 25,
  },
  input: {
    paddingVertical: 1,
    borderColor: "white",
    borderBottomColor: "#7c7c7c",
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  lastInput: {
    marginBottom: 1,
  },
  buttonContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#fca80a",
    width: "100%",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#7c7c7c",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  buttonOutlineText: {
    color: "#7c7c7c",
    fontWeight: "700",
    fontSize: 16,
  },
  helloText: {
    fontSize: 50,
  },
  helloBottomText: {
    fontSize: 12,
  },
  imageContainer: {
    alignSelf: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  bottomTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
  },
  secondBottomText: {
    color: "#ec8311",
    fontWeight: "bold",
  },
  textLabelChange: {
    color: "#fca80a",
  },
});
