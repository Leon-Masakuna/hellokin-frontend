import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import React, { useState } from "react";

const SignupScreen = ({ navigation }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const navigateToBio = () => {
    navigation.navigate("Bio");
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const navigateBack = () => {
    navigation.navigate("SignUpPage");
  };

  const navigateToVerification = () => {
    navigation.navigate("Verification");
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Text onPress={navigateBack} style={styles.buttonIcone}>
          Back icon
        </Text>
      </View>
      <Text style={styles.accountCreate}>Créez un compte</Text>
      <View style={styles.appleFbLogoContainer}>
        <View style={styles.facebookContainer}>
          <Image
            source={require("../assets/FacebookLogo.png")}
            style={styles.image}
          />
          <Text style={styles.appleFacebookLogoText}>
            Se connecter avec facebook
          </Text>
        </View>
        <View style={styles.oRTextContainer}>
          <Text> OU </Text>
        </View>
        <View style={styles.facebookContainer}>
          <Image
            source={require("../assets/appleLogo.jpg")}
            style={styles.image}
          />
          <Text style={styles.appleFacebookLogoText}>
            Se connecter avec apple
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Numéro de téléphone ou adresse email"
          value={phoneOrEmail}
          onChangeText={(text) => setPhoneOrEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Nom complet"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Nom d'utilisateur"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={(text) => setPassWord(text)}
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={navigateToBio} style={styles.button}>
            <Text onPress={navigateToVerification} style={styles.buttonText}>
              S'inscrire
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            repellat velit quam, expedita molestiae.
          </Text>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            Vous avez un compte ?{" "}
            <Text onPress={navigateToLogin} style={styles.colorText}>
              Connectez-vous
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fca80a",
  },
  textContainer: {
    paddingLeft: 70,
    paddingRight: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 8,
  },
  colorText: {
    color: "#ffffff",
  },
  accountCreate: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    marginTop: 100,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 25,
    height: 40,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  button: {
    backgroundColor: "#ffffff",
    width: "60%",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: -30,
    marginTop: -25,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "#7c7c7c",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  bottomTextContainer: {
    marginTop: 50,
    marginBottom: -20,
  },
  bottomText: {
    textAlign: "center",
  },
  appleFbLogoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appleFacebookLogoText: {
    fontSize: 9,
    marginLeft: 15,
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
  },
  facebookContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  oRTextContainer: {
    alignSelf: "flex-end",
  },
  backButton: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  buttonIcone: {
    textAlign: "left",
  },
});
