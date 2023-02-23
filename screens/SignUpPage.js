import {
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";

const SignUpPage = ({ navigation }) => {
  const navigateToSignup = () => {
    navigation.navigate("SignUp");
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <View style={styles.helloTextContainer}>
        <Text style={styles.helloText}>Hello !</Text>
        <Text style={styles.helloBottomText}>Let's get started</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToSignup} style={styles.button}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToLogin}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  helloTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ec8311",
    width: "100%",
    padding: 10,
    borderRadius: 20,
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
    color: "#7c7c7c",
    fontWeight: "300",
  },
  helloBottomText: {
    fontSize: 12,
    color: "#7c7c7c",
    fontWeight: "700",
  },
  image: {
    width: 100,
    height: 100,
  },
});
