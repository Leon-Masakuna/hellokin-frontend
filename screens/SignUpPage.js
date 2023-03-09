import {
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

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
      <Swiper
        style={styles.swiper}
        dot={
          <View
            style={{
              borderColor: "#fca80a",
              backgroundColor: "white",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
              borderWidth: 1,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#fca80a",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
      >
        <View style={styles.helloTextContainer}>
          <Text style={styles.helloText}>Hello!</Text>
          <Text style={styles.helloBottomText}>Let's get started</Text>
        </View>
        <View style={styles.helloTextContainer}>
          <Text style={styles.helloSecondText}>
            Nous aidons les créatif à{"\n"}développer leur activité
          </Text>
          <Text style={styles.helloSecondText}>et leurs compétences.</Text>
        </View>
        <View style={styles.helloTextContainer}>
          <Text style={styles.helloSecondText}>
            Vous etes créatif ?{"\n"}Donnez sens à{"\n"}votre créativité à
            travers{"\n"}Hellokin.
          </Text>
        </View>
      </Swiper>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToSignup} style={styles.button}>
          <Text style={styles.buttonText}>s'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToLogin}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>connexion</Text>
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
    backgroundColor: "white",
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
    marginBottom: 100,
  },
  button: {
    backgroundColor: "#fca80a",
    width: "70%",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 20,
    borderColor: "#7c7c7c",
    borderWidth: 1,
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
    fontSize: 80,
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
    marginTop: 130,
    marginBottom: 90,
  },
  swiper: {
    // backgroundColor: "black",
  },
  helloSecondText: {
    fontSize: 24,
    textAlign: "center",
    color: "#7c7c7c",
    fontWeight: "300",
  },
});
