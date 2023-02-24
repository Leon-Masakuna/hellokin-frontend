import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputSecureText from "react-native-input-secure-text";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToSignup = () => {
    navigation.navigate("SignUp");
  };

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/logo.png")} style={styles.image} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.connexionText}>Connectez-vous</Text>
          <View>
            <Text>Nom d'utilisateur</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.passwordText}>Mot de passe</Text>
            <InputSecureText
              containerStyle={{ width: "100%" }}
              placeholder=""
              iconSize={25}
              value=""
              onChangeText={(text) => setPassword(text)}
              style={[styles.input, styles.lastInput]}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={navigateToHome} style={styles.button}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text>Vous êtes nouveau sur HelloKin ?</Text>
          <Text onPress={navigateToSignup} style={styles.secondBottomText}>
            Créez un compte
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 150,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  helloTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  connexionTextContainer: {
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  connexionText: {
    fontSize: 20,
    marginTop: 100,
    marginBottom: 40,
    color: "#ec8311",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
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
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
  },
  button: {
    backgroundColor: "#ec8311",
    width: "100%",
    padding: 15,
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
    fontSize: 16,
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
});
